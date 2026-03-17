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
          <label htmlFor={selectId} className="block text-sm font-medium text-foreground mb-1.5">
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
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
              'w-full flex items-center justify-between gap-2 rounded-md border bg-background transition-all duration-150',
              'focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0',
              sizeMap[size],
              error
                ? 'border-red-400'
                : open
                  ? 'border-primary'
                  : 'border-border hover:border-muted-foreground',
              disabled && 'opacity-50 cursor-not-allowed bg-gray-50'
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
                  className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  aria-label="Clear selection"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
              <ChevronDown
                className={cn(
                  'h-4 w-4 text-muted-foreground transition-transform duration-150',
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
              className="absolute z-50 mt-1 w-full bg-background border border-border rounded-md shadow-dropdown overflow-auto max-h-56 animate-fade-in scrollbar-thin"
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
                    'flex items-center gap-2 px-3 py-2 text-sm cursor-pointer transition-colors duration-100',
                    activeIndex === index && !opt.disabled && 'bg-gray-50',
                    isSelected(opt.value)
                      ? 'bg-accent text-accent-foreground font-medium'
                      : 'text-foreground hover:bg-gray-50',
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
          <p className="mt-1 text-xs text-red-500" role="alert">
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
