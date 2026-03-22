'use client';

import React, {
  useState,
  useRef,
  useCallback,
  useId,
  type KeyboardEvent,
} from 'react';
import { CalendarIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { cn } from '@/utils/cn';

// ─── Hooks ────────────────────────────────────────────────────────────────────
// useClickOutside hook inlined for CLI templates (no external dependency)
function useClickOutside(ref: React.RefObject<HTMLElement>, callback: () => void) {
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [ref, callback]);
}

// ─── Types ────────────────────────────────────────────────────────────────────

export type DatePickerSize = 'sm' | 'md' | 'lg';

export interface DatePickerProps {
  value?: Date | null;
  defaultValue?: Date | null;
  onChange?: (date: Date | null) => void;
  placeholder?: string;
  size?: DatePickerSize;
  label?: string;
  required?: boolean;
  error?: string | boolean;
  hint?: string;
  disabled?: boolean;
  minDate?: Date;
  maxDate?: Date;
  formatDate?: (date: Date) => string;
  className?: string;
  id?: string;
  'aria-label'?: string;
}

// ─── Calendar Component ────────────────────────────────────────────────────────

interface CalendarProps {
  value?: Date | null;
  onChange?: (date: Date) => void;
  minDate?: Date;
  maxDate?: Date;
  size?: DatePickerSize;
}

function Calendar({ value, onChange, minDate, maxDate, size = 'md' }: CalendarProps) {
  const [viewDate, setViewDate] = useState(() => value || new Date());

  const daysInMonth = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 0).getDate();
  const firstDay = new Date(viewDate.getFullYear(), viewDate.getMonth(), 1).getDay();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const empty = Array.from({ length: firstDay }, () => null);
  const cells = [...empty, ...days];

  const sizeClasses = size === 'sm' ? 'w-56' : size === 'lg' ? 'w-72' : 'w-64';

  return (
    <div className={cn('inline-block select-none', sizeClasses)}>
      <div className="mb-4 flex items-center justify-between">
        <button
          type="button"
          onClick={() => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1))}
          className="rounded-lg p-1 hover:bg-muted"
        >
          ‹
        </button>
        <span className="text-sm font-medium">
          {viewDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </span>
        <button
          type="button"
          onClick={() => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1))}
          className="rounded-lg p-1 hover:bg-muted"
        >
          ›
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1">
        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((d) => (
          <div key={d} className="h-8 flex items-center justify-center text-xs text-muted-foreground">
            {d}
          </div>
        ))}
        {cells.map((day, idx) => (
          <button
            key={idx}
            type="button"
            disabled={!day || (minDate && new Date(viewDate.getFullYear(), viewDate.getMonth(), day) < minDate) || (maxDate && new Date(viewDate.getFullYear(), viewDate.getMonth(), day) > maxDate)}
            onClick={() => day && onChange?.(new Date(viewDate.getFullYear(), viewDate.getMonth(), day))}
            className={cn(
              'h-8 text-sm rounded transition-colors',
              !day && 'invisible',
              day && value && value.getDate() === day && value.getMonth() === viewDate.getMonth()
                ? 'bg-primary text-primary-foreground font-medium'
                : day && 'hover:bg-muted',
              day && (!minDate || new Date(viewDate.getFullYear(), viewDate.getMonth(), day) >= minDate) && (!maxDate || new Date(viewDate.getFullYear(), viewDate.getMonth(), day) <= maxDate)
                ? ''
                : 'opacity-40 cursor-not-allowed'
            )}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── DatePicker Component ──────────────────────────────────────────────────────

const DEFAULT_FORMAT = (date: Date) =>
  date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

const sizeConfig = {
  sm: {
    height: 'h-8',
    text: 'text-sm',
    icon: 'h-3.5 w-3.5',
    zone: 'w-9',
    pl: 'pl-10',
    pr: 'pr-9',
    radius: 'rounded-lg',
  },
  md: {
    height: 'h-10',
    text: 'text-sm',
    icon: 'h-4 w-4',
    zone: 'w-10',
    pl: 'pl-11',
    pr: 'pr-10',
    radius: 'rounded-xl',
  },
  lg: {
    height: 'h-11',
    text: 'text-sm',
    icon: 'h-[18px] w-[18px]',
    zone: 'w-12',
    pl: 'pl-[52px]',
    pr: 'pr-11',
    radius: 'rounded-xl',
  },
} as const;

export default function DatePicker({
  value,
  defaultValue,
  onChange,
  placeholder = 'Select a date',
  size = 'md',
  label,
  required,
  error,
  hint,
  disabled = false,
  minDate,
  maxDate,
  formatDate = DEFAULT_FORMAT,
  className,
  id,
  'aria-label': ariaLabel,
}: DatePickerProps) {
  const generatedId = useId();
  const inputId = id ?? `datepicker-${generatedId}`;

  const [internalValue, setInternalValue] = useState<Date | null>(defaultValue ?? null);
  const selected = value !== undefined ? value : internalValue;

  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useClickOutside(wrapperRef, useCallback(() => setOpen(false), []));

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape') setOpen(false);
  };

  const handleSelect = (date: Date) => {
    if (value === undefined) setInternalValue(date);
    onChange?.(date);
    setOpen(false);
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (value === undefined) setInternalValue(null);
    onChange?.(null);
  };

  const displayValue = selected ? formatDate(selected) : '';
  const hasError = Boolean(error);
  const cfg = sizeConfig[size];

  return (
    <div
      ref={wrapperRef}
      className={cn('relative w-full', className)}
      onKeyDown={handleKeyDown}
    >
      {label && (
        <label htmlFor={inputId} className="mb-1.5 block text-sm font-medium text-foreground">
          {label}
          {required && <span className="ml-1 text-destructive">*</span>}
        </label>
      )}

      <div className="relative flex items-center">
        <div
          aria-hidden="true"
          className={cn(
            'pointer-events-none absolute left-0 top-0 flex h-full items-center justify-center border-r',
            cfg.zone,
            hasError
              ? 'border-destructive/40 text-destructive/80'
              : open
              ? 'border-primary/30 text-primary'
              : 'border-input text-muted-foreground/70',
            disabled && 'opacity-40',
          )}
        >
          <CalendarIcon className={cfg.icon} />
        </div>

        <button
          id={inputId}
          type="button"
          role="combobox"
          aria-haspopup="dialog"
          aria-expanded={open}
          aria-label={ariaLabel ?? label ?? placeholder}
          aria-invalid={hasError}
          disabled={disabled}
          onClick={() => !disabled && setOpen((v) => !v)}
          className={cn(
            'relative flex w-full items-center border bg-surface transition-all duration-150',
            cfg.height,
            cfg.text,
            cfg.pl,
            cfg.pr,
            cfg.radius,
            open && !hasError && 'border-primary shadow-[0_0_0_3px_hsl(var(--primary)/0.12)]',
            hasError && 'border-destructive/60 shadow-[0_0_0_3px_hsl(var(--destructive)/0.10)]',
            !open && !hasError && 'border-input hover:border-muted-foreground/40',
            displayValue ? 'text-foreground font-medium' : 'text-muted-foreground/60',
            disabled
              ? 'cursor-not-allowed opacity-50 bg-muted/40 hover:border-input'
              : 'cursor-pointer',
          )}
        >
          {displayValue || placeholder}
        </button>

        <div className="pointer-events-none absolute right-0 top-0 flex h-full items-center pr-3">
          {selected && !disabled ? (
            <button
              type="button"
              onClick={handleClear}
              aria-label="Clear date"
              className={cn(
                'pointer-events-auto flex items-center justify-center rounded-md p-0.5',
                'text-muted-foreground/60 transition-colors',
                'hover:bg-muted hover:text-foreground',
              )}
            >
              <XMarkIcon className={cfg.icon} />
            </button>
          ) : (
            <CalendarIcon
              aria-hidden="true"
              className={cn(
                cfg.icon,
                'text-muted-foreground/50 transition-colors duration-150',
                open && 'text-primary',
              )}
            />
          )}
        </div>
      </div>

      {hasError && typeof error === 'string' && (
        <p className="mt-1.5 text-xs text-destructive" role="alert">
          {error}
        </p>
      )}
      {!hasError && hint && (
        <p className="mt-1.5 text-xs text-muted-foreground">{hint}</p>
      )}

      {open && (
        <div
          role="dialog"
          aria-label="Date picker calendar"
          aria-modal="false"
          className={cn(
            'absolute left-0 top-full z-50 mt-2',
            'rounded-2xl border border-border bg-popover shadow-dropdown',
            'p-2',
            'animate-fade-in',
            'origin-top',
          )}
        >
          <Calendar
            value={selected ?? null}
            onChange={handleSelect}
            minDate={minDate}
            maxDate={maxDate}
            size={size}
          />
        </div>
      )}
    </div>
  );
}
