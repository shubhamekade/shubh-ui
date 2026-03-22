'use client';

import React, { forwardRef, useEffect, useState, useRef, useId, useMemo, useCallback } from 'react';
import { ChevronDown, Check, X } from 'lucide-react';
import { cn } from '@/utils/cn';
import { useClickOutside } from '@/hooks/useClickOutside';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
  description?: string;
  icon?: React.ReactNode;
}

export interface SelectProps {
  options: SelectOption[];
  value?: string | string[];
  onChange?: (value: string | string[]) => void;
  placeholder?: string;
  label?: string;
  hint?: string;
  error?: string;
  disabled?: boolean;
  multiple?: boolean;
  clearable?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  id?: string;
  required?: boolean;
}

const sizeMap = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-9 px-3 text-sm',
  lg: 'h-10 px-4 text-base',
};

const Select = forwardRef<HTMLDivElement, SelectProps>(
  (
    {
      options,
      value,
      onChange,
      placeholder = 'Select an option',
      label,
      hint,
      error,
      disabled,
      multiple = false,
      clearable = false,
      size = 'md',
      className,
      id,
      required,
    },
    ref
  ) => {
    const [open, setOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState<number>(-1);
    const containerRef = useRef<HTMLDivElement>(null);
    const generatedId = useId();
    const selectId = id || `select-${generatedId}`;

    useClickOutside(containerRef, () => setOpen(false));

    const selectedValues = useMemo(
      () => (multiple ? (value as string[]) || [] : value ? [value as string] : []),
      [multiple, value]
    );

    const selectedLabels = selectedValues
      .map((v) => options.find((o) => o.value === v)?.label)
      .filter(Boolean);

    const isSelected = useCallback(
      (optValue: string) => selectedValues.includes(optValue),
      [selectedValues]
    );

    const enabledIndices = useMemo(
      () =>
        options
          .map((option, index) => ({ option, index }))
          .filter((entry) => !entry.option.disabled)
          .map((entry) => entry.index),
      [options]
    );

    const handleSelect = (optValue: string) => {
      if (multiple) {
        const newValues = isSelected(optValue)
          ? selectedValues.filter((v) => v !== optValue)
          : [...selectedValues, optValue];
        onChange?.(newValues);
      } else {
        onChange?.(optValue);
        setOpen(false);
      }
    };

    const handleClear = (e: React.MouseEvent) => {
      e.stopPropagation();
      onChange?.(multiple ? [] : '');
    };

    useEffect(() => {
      if (!open) {
        setActiveIndex(-1);
        return;
      }

      const selectedIndex = options.findIndex(
        (option) => isSelected(option.value) && !option.disabled
      );
      if (selectedIndex >= 0) {
        setActiveIndex(selectedIndex);
        return;
      }

      setActiveIndex(enabledIndices[0] ?? -1);
    }, [open, options, enabledIndices, isSelected]);

    const handleTriggerKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
      if (disabled) return;

      if (event.key === 'ArrowDown' || event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        setOpen(true);
        return;
      }

      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    const handleListboxKeyDown = (event: React.KeyboardEvent<HTMLUListElement>) => {
      if (enabledIndices.length === 0) return;

      const currentEnabledPos = enabledIndices.indexOf(activeIndex);

      if (event.key === 'Escape') {
        event.preventDefault();
        setOpen(false);
        return;
      }

      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault();
        const step = event.key === 'ArrowDown' ? 1 : -1;
        const nextPos =
          currentEnabledPos < 0
            ? 0
            : (currentEnabledPos + step + enabledIndices.length) % enabledIndices.length;
        setActiveIndex(enabledIndices[nextPos]);
        return;
      }

      if (event.key === 'Home') {
        event.preventDefault();
        setActiveIndex(enabledIndices[0]);
        return;
      }

      if (event.key === 'End') {
        event.preventDefault();
        setActiveIndex(enabledIndices[enabledIndices.length - 1]);
        return;
      }

      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        const activeOption = options[activeIndex];
        if (activeOption && !activeOption.disabled) {
          handleSelect(activeOption.value);
        }
      }
    };

    return (
      <div ref={containerRef} className={cn('w-full', className)}>
        {label && (
          <label htmlFor={selectId} className="mb-1.5 block text-sm font-medium text-foreground">
            {label}
            {required && <span className="ml-1 text-destructive">*</span>}
          </label>
        )}
        <div className="relative" ref={ref}>
          <button
            id={selectId}
            type="button"
            onClick={() => !disabled && setOpen((v) => !v)}
            onKeyDown={handleTriggerKeyDown}
            disabled={disabled}
            aria-haspopup="listbox"
            aria-expanded={open}
            aria-controls={`${selectId}-listbox`}
            aria-activedescendant={
              open && activeIndex >= 0 ? `${selectId}-option-${activeIndex}` : undefined
            }
            aria-label={label || placeholder}
            className={cn(
              'flex w-full items-center justify-between gap-2 rounded-xl border bg-surface transition-all duration-150 ease-out',
              'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary/50',
              sizeMap[size],
              error
                ? 'border-destructive/40 bg-destructive-soft'
                : open
                  ? 'border-primary/50 ring-2 ring-primary/20'
                  : 'border-input hover:border-muted-foreground/30',
              disabled && 'cursor-not-allowed bg-muted/50 opacity-50'
            )}
          >
            <span
              className={cn(
                'flex-1 text-left truncate',
                !selectedLabels.length && 'text-muted-foreground'
              )}
            >
              {selectedLabels.length
                ? multiple
                  ? `${selectedLabels.length} selected`
                  : selectedLabels[0]
                : placeholder}
            </span>
            <span className="flex items-center gap-1 shrink-0">
              {clearable && selectedValues.length > 0 && (
                <button
                  type="button"
                  onClick={handleClear}
                  className="cursor-pointer rounded-md p-0.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  aria-label="Clear selection"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
              <ChevronDown
                className={cn(
                  'h-4 w-4 text-muted-foreground transition-transform duration-200 ease-in-out',
                  open && 'rotate-180'
                )}
                aria-hidden="true"
              />
            </span>
          </button>

          {open && (
            <ul
              id={`${selectId}-listbox`}
              role="listbox"
              aria-multiselectable={multiple}
              onKeyDown={handleListboxKeyDown}
              className="absolute z-50 mt-1.5 max-h-60 w-full overflow-auto rounded-xl border border-border/80 bg-popover p-1 shadow-dropdown animate-fade-in scrollbar-thin"
            >
              {options.map((opt, index) => (
                <li
                  key={opt.value}
                  id={`${selectId}-option-${index}`}
                  role="option"
                  aria-selected={isSelected(opt.value)}
                  aria-disabled={opt.disabled}
                  onMouseEnter={() => !opt.disabled && setActiveIndex(index)}
                  onClick={() => !opt.disabled && handleSelect(opt.value)}
                  className={cn(
                    'flex cursor-pointer items-center gap-2 rounded-lg px-2.5 py-2 text-sm transition-colors duration-100',
                    activeIndex === index && !opt.disabled && !isSelected(opt.value) && 'bg-muted',
                    isSelected(opt.value)
                      ? 'bg-accent text-accent-foreground font-medium'
                      : 'text-foreground hover:bg-muted',
                    opt.disabled && 'opacity-40 cursor-not-allowed'
                  )}
                >
                  {opt.icon && <span className="shrink-0">{opt.icon}</span>}
                  <span className="flex-1">
                    {opt.label}
                    {opt.description && (
                      <span className="block text-xs text-muted-foreground">{opt.description}</span>
                    )}
                  </span>
                  {isSelected(opt.value) && (
                    <Check className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  )}
                </li>
              ))}
              {options.length === 0 && (
                <li className="px-3 py-4 text-sm text-muted-foreground text-center">
                  No options available
                </li>
              )}
            </ul>
          )}
        </div>
        {error && (
          <p className="mt-1 text-xs text-destructive" role="alert">
            {error}
          </p>
        )}
        {hint && !error && <p className="mt-1 text-xs text-muted-foreground">{hint}</p>}
      </div>
    );
  }
);

Select.displayName = 'Select';
export default Select;
