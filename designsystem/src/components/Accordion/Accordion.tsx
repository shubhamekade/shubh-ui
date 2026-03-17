'use client';

import React, { useState } from 'react';
import { cn } from '@/utils/cn';

export interface AccordionItem {
  id: string;
  title: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
  icon?: React.ReactNode;
  badge?: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  defaultOpen?: string[];
  multiple?: boolean;
  variant?: 'default' | 'bordered' | 'flush' | 'filled';
  className?: string;
}

const ChevronDownIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const Accordion: React.FC<AccordionProps> = ({
  items,
  defaultOpen = [],
  multiple = false,
  variant = 'default',
  className,
}) => {
  const [openIds, setOpenIds] = useState<string[]>(defaultOpen);

  const toggle = (id: string) => {
    setOpenIds(prev => {
      if (prev.includes(id)) return prev.filter(i => i !== id);
      return multiple ? [...prev, id] : [id];
    });
  };

  const isOpen = (id: string) => openIds.includes(id);

  return (
    <div
      className={cn(
        'w-full',
        variant === 'bordered' && 'border border-border rounded-lg overflow-hidden divide-y divide-border',
        variant === 'default' && 'divide-y divide-border',
        variant === 'flush' && 'divide-y divide-border',
        className
      )}
    >
      {items.map((item) => (
        <div
          key={item.id}
          className={cn(
            variant === 'filled' && 'mb-2 rounded-lg overflow-hidden border border-border'
          )}
        >
          <button
            type="button"
            onClick={() => !item.disabled && toggle(item.id)}
            disabled={item.disabled}
            aria-expanded={isOpen(item.id)}
            className={cn(
              'w-full flex items-center justify-between gap-3 py-3.5 px-0 text-left transition-colors duration-150',
              variant === 'filled' && 'px-4 bg-muted hover:bg-muted/80',
              variant === 'bordered' && 'px-4',
              variant === 'flush' && 'px-0',
              item.disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer hover:text-primary',
              isOpen(item.id) && 'text-primary'
            )}
          >
            <span className="flex items-center gap-2 font-medium text-sm">
              {item.icon && <span className="shrink-0">{item.icon}</span>}
              {item.title}
              {item.badge && <span className="shrink-0">{item.badge}</span>}
            </span>
            <ChevronDownIcon
              className={cn(
                'h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200',
                isOpen(item.id) && 'rotate-180 text-primary'
              )}
            />
          </button>
          <div
            className={cn(
              'overflow-hidden transition-all duration-200 ease-in-out',
              isOpen(item.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            )}
          >
            <div className={cn('pb-4 text-sm text-muted-foreground', variant === 'filled' && 'px-4', variant === 'bordered' && 'px-4')}>
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

Accordion.displayName = 'Accordion';
export default Accordion;