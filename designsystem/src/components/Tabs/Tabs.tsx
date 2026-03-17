'use client';

import React, { useId, useRef, useState } from 'react';
import { cn } from '@/utils/cn';

export interface TabItem {
  id: string;
  label: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
  badge?: string | number;
  icon?: React.ReactNode;
}

export interface TabsProps {
  items: TabItem[];
  defaultTab?: string;
  activeTab?: string;
  onChange?: (id: string) => void;
  variant?: 'line' | 'pill' | 'enclosed' | 'soft';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  className?: string;
  contentClassName?: string;
}

const tabListVariants = {
  line: 'border-b border-border gap-0',
  pill: 'bg-gray-100 p-1 rounded-lg gap-1',
  enclosed: 'border border-border rounded-t-lg overflow-hidden gap-0',
  soft: 'gap-1',
};

const tabItemVariants = {
  line: {
    base: 'px-4 py-2.5 border-b-2 border-transparent -mb-px font-medium text-muted-foreground hover:text-foreground hover:border-border transition-all duration-150',
    active: 'border-primary text-primary',
    disabled: 'opacity-40 cursor-not-allowed',
  },
  pill: {
    base: 'px-3 py-1.5 rounded-md font-medium text-muted-foreground hover:text-foreground hover:bg-background transition-all duration-150',
    active: 'bg-background text-primary shadow-sm',
    disabled: 'opacity-40 cursor-not-allowed',
  },
  enclosed: {
    base: 'px-4 py-2.5 font-medium text-muted-foreground border-r border-border last:border-r-0 hover:bg-gray-50 transition-all duration-150',
    active: 'bg-background text-primary shadow-sm',
    disabled: 'opacity-40 cursor-not-allowed',
  },
  soft: {
    base: 'px-3 py-2 rounded-md font-medium text-muted-foreground hover:text-foreground hover:bg-gray-100 transition-all duration-150',
    active: 'bg-accent text-accent-foreground',
    disabled: 'opacity-40 cursor-not-allowed',
  },
};

const sizeMap = { sm: 'text-xs', md: 'text-sm', lg: 'text-base' };

const Tabs: React.FC<TabsProps> = ({
  items,
  defaultTab,
  activeTab: controlledTab,
  onChange,
  variant = 'line',
  size = 'md',
  fullWidth = false,
  className,
  contentClassName,
}) => {
  const [internalTab, setInternalTab] = useState(defaultTab || items[0]?.id);
  const current = controlledTab ?? internalTab;
  const baseId = useId();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const handleChange = (id: string) => {
    setInternalTab(id);
    onChange?.(id);
  };

  const activeItem = items.find((i) => i.id === current);

  const enabledIndices = items
    .map((item, index) => ({ item, index }))
    .filter((entry) => !entry.item.disabled)
    .map((entry) => entry.index);

  const handleTabKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (enabledIndices.length === 0) return;

    const currentEnabledPos = enabledIndices.indexOf(index);

    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();
      const step = event.key === 'ArrowRight' ? 1 : -1;
      const nextPos =
        currentEnabledPos < 0
          ? 0
          : (currentEnabledPos + step + enabledIndices.length) % enabledIndices.length;
      const nextIndex = enabledIndices[nextPos];
      const nextTab = items[nextIndex];
      if (!nextTab) return;
      handleChange(nextTab.id);
      tabRefs.current[nextIndex]?.focus();
      return;
    }

    if (event.key === 'Home') {
      event.preventDefault();
      const firstIndex = enabledIndices[0];
      const firstTab = items[firstIndex];
      if (!firstTab) return;
      handleChange(firstTab.id);
      tabRefs.current[firstIndex]?.focus();
      return;
    }

    if (event.key === 'End') {
      event.preventDefault();
      const lastIndex = enabledIndices[enabledIndices.length - 1];
      const lastTab = items[lastIndex];
      if (!lastTab) return;
      handleChange(lastTab.id);
      tabRefs.current[lastIndex]?.focus();
    }
  };

  return (
    <div className={cn('w-full', className)}>
      <div
        role="tablist"
        className={cn('flex items-center', tabListVariants[variant], fullWidth && 'w-full')}
      >
        {items.map((item, index) => (
          <button
            key={item.id}
            ref={(element) => {
              tabRefs.current[index] = element;
            }}
            role="tab"
            type="button"
            id={`${baseId}-tab-${item.id}`}
            aria-controls={`${baseId}-panel-${item.id}`}
            aria-selected={current === item.id}
            aria-disabled={item.disabled}
            tabIndex={current === item.id ? 0 : -1}
            disabled={item.disabled}
            onClick={() => !item.disabled && handleChange(item.id)}
            onKeyDown={(event) => handleTabKeyDown(event, index)}
            className={cn(
              tabItemVariants[variant].base,
              sizeMap[size],
              current === item.id && tabItemVariants[variant].active,
              item.disabled && tabItemVariants[variant].disabled,
              fullWidth && 'flex-1 text-center'
            )}
          >
            <span className="flex items-center gap-1.5 justify-center">
              {item.icon && <span className="shrink-0">{item.icon}</span>}
              {item.label}
              {item.badge !== undefined && (
                <span className="inline-flex items-center justify-center h-4 min-w-[1rem] px-1 rounded-full bg-primary text-primary-foreground text-xs font-medium leading-none">
                  {item.badge}
                </span>
              )}
            </span>
          </button>
        ))}
      </div>
      <div
        role="tabpanel"
        id={`${baseId}-panel-${activeItem?.id ?? 'panel'}`}
        aria-labelledby={activeItem ? `${baseId}-tab-${activeItem.id}` : undefined}
        aria-label={typeof activeItem?.label === 'string' ? activeItem.label : 'Tab content'}
        className={cn('mt-4 animate-fade-in', contentClassName)}
      >
        {activeItem?.content}
      </div>
    </div>
  );
};

Tabs.displayName = 'Tabs';
export default Tabs;
