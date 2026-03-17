'use client';

import React, { useEffect, useId, useRef, useState } from 'react';
import { Check, ChevronRight } from 'lucide-react';
import { cn } from '@/utils/cn';
import { useClickOutside } from '@/hooks/useClickOutside';

export interface DropdownItem {
  id: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
  shortcut?: string;
  disabled?: boolean;
  danger?: boolean;
  checked?: boolean;
  separator?: false;
  onClick?: () => void;
  children?: DropdownItem[];
}

export interface DropdownSeparator {
  id: string;
  separator: true;
  label?: string;
}

export type DropdownMenuItem = DropdownItem | DropdownSeparator;

export interface DropdownProps {
  trigger: React.ReactNode;
  items: DropdownMenuItem[];
  align?: 'left' | 'right';
  className?: string;
  menuClassName?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  trigger,
  items,
  align = 'left',
  className,
  menuClassName,
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuId = useId();
  useClickOutside(ref, () => setOpen(false));

  useEffect(() => {
    if (!open) return;
    const firstItem = menuRef.current?.querySelector<HTMLButtonElement>(
      'button[role="menuitem"]:not(:disabled)'
    );
    firstItem?.focus();
  }, [open]);

  const handleTriggerKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter' || event.key === ' ' || event.key === 'ArrowDown') {
      event.preventDefault();
      setOpen(true);
      return;
    }

    if (event.key === 'Escape') {
      setOpen(false);
    }
  };

  const handleMenuKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const menuItems = Array.from(
      menuRef.current?.querySelectorAll<HTMLButtonElement>(
        'button[role="menuitem"]:not(:disabled)'
      ) ?? []
    );

    if (menuItems.length === 0) return;

    const currentIndex = menuItems.indexOf(document.activeElement as HTMLButtonElement);

    if (event.key === 'Escape') {
      event.preventDefault();
      setOpen(false);
      return;
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      const nextIndex = currentIndex < 0 ? 0 : (currentIndex + 1) % menuItems.length;
      menuItems[nextIndex]?.focus();
      return;
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      const prevIndex = currentIndex <= 0 ? menuItems.length - 1 : currentIndex - 1;
      menuItems[prevIndex]?.focus();
    }
  };

  return (
    <div ref={ref} className={cn('relative inline-flex', className)}>
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((v) => !v)}
        onKeyDown={handleTriggerKeyDown}
        className="cursor-pointer"
      >
        {trigger}
      </button>
      {open && (
        <div
          ref={menuRef}
          id={menuId}
          role="menu"
          onKeyDown={handleMenuKeyDown}
          className={cn(
            'absolute z-50 mt-1 min-w-[180px] bg-background border border-border rounded-lg shadow-dropdown py-1 animate-fade-in',
            align === 'right' ? 'right-0' : 'left-0',
            'top-full',
            menuClassName
          )}
        >
          {items.map((item) => {
            if ('separator' in item && item.separator) {
              return (
                <div key={item.id}>
                  {item.label && (
                    <span className="block px-3 py-1 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                      {item.label}
                    </span>
                  )}
                  <hr className="my-1 border-border" />
                </div>
              );
            }

            const d = item as DropdownItem;
            return (
              <button
                key={d.id}
                role="menuitem"
                type="button"
                disabled={d.disabled}
                onClick={() => {
                  d.onClick?.();
                  setOpen(false);
                }}
                className={cn(
                  'w-full flex items-center gap-2 px-3 py-2 text-sm transition-colors duration-100 text-left',
                  d.danger
                    ? 'text-red-600 hover:bg-red-50'
                    : 'text-foreground hover:bg-accent hover:text-accent-foreground',
                  d.disabled && 'opacity-40 cursor-not-allowed'
                )}
              >
                {d.checked !== undefined && (
                  <span className="w-4 shrink-0">
                    {d.checked && <Check className="h-3.5 w-3.5" />}
                  </span>
                )}
                {d.icon && <span className="shrink-0 text-[#808080]">{d.icon}</span>}
                <span className="flex-1">{d.label}</span>
                {d.shortcut && (
                  <kbd className="text-xs text-muted-foreground font-mono">{d.shortcut}</kbd>
                )}
                {d.children && (
                  <ChevronRight className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

Dropdown.displayName = 'Dropdown';
export default Dropdown;
