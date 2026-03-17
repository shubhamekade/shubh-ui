'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { cn } from '@/utils/cn';
import { calendarVariants } from './component.variants';

// ─── Types ───────────────────────────────────────────────────────────────────

export type CalendarSize = 'sm' | 'md' | 'lg';
export type CalendarView = 'day' | 'month' | 'year';
export type CalendarTheme = 'navy' | 'light';

export interface CalendarProps {
  /** Controlled selected date */
  value?: Date | null;
  /** Default selected date (uncontrolled) */
  defaultValue?: Date | null;
  /** Called when a date is selected */
  onChange?: (date: Date) => void;
  /** Size variant */
  size?: CalendarSize;
  /** Theme variant */
  theme?: CalendarTheme;
  /** Initial view to show */
  initialView?: CalendarView;
  /** Minimum selectable date */
  minDate?: Date;
  /** Maximum selectable date */
  maxDate?: Date;
  /** Additional class names */
  className?: string;
  /** ARIA label for the calendar */
  'aria-label'?: string;
}

// ─── Constants ───────────────────────────────────────────────────────────────

const DAY_HEADERS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const MONTH_NAMES = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
const MONTH_FULL = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const YEAR_RANGE_SIZE = 12; // 4 cols × 3 rows

// ─── Helpers ─────────────────────────────────────────────────────────────────

function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function getYearRangeStart(year: number) {
  return Math.floor(year / YEAR_RANGE_SIZE) * YEAR_RANGE_SIZE;
}

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

// ─── Sub-components ──────────────────────────────────────────────────────────

interface NavHeaderProps {
  label: string;
  onPrev: () => void;
  onNext: () => void;
  onLabelClick: () => void;
  isNavy: boolean;
  size: CalendarSize;
  prevAriaLabel: string;
  nextAriaLabel: string;
}

function NavHeader({
  label,
  onPrev,
  onNext,
  onLabelClick,
  isNavy,
  size,
  prevAriaLabel,
  nextAriaLabel,
}: NavHeaderProps) {
  const textSize = size === 'sm' ? 'text-xs' : size === 'lg' ? 'text-base' : 'text-sm';
  const btnSize = size === 'sm' ? 'h-6 w-6' : size === 'lg' ? 'h-8 w-8' : 'h-7 w-7';
  const iconSize = size === 'sm' ? 'h-3 w-3' : size === 'lg' ? 'h-4 w-4' : 'h-3.5 w-3.5';

  return (
    <div className="flex items-center justify-between mb-3">
      <button
        type="button"
        onClick={onPrev}
        aria-label={prevAriaLabel}
        className={cn(
          btnSize,
          'flex items-center justify-center rounded transition-colors duration-100',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#000080] focus-visible:ring-offset-1',
          isNavy
            ? 'text-gray-400 hover:text-white hover:bg-[#000060]'
            : 'text-gray-400 hover:text-gray-700 hover:bg-[#dae8ff]'
        )}
      >
        <ChevronLeftIcon className={iconSize} />
      </button>

      <button
        type="button"
        onClick={onLabelClick}
        className={cn(
          textSize,
          'font-medium px-2 py-0.5 rounded transition-colors duration-100',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#000080] focus-visible:ring-offset-1',
          isNavy
            ? 'text-gray-300 hover:text-white hover:bg-[#000060]'
            : 'text-gray-500 hover:text-gray-800 hover:bg-[#dae8ff]'
        )}
        aria-label={`Switch to broader view, currently showing ${label}`}
      >
        {label}
      </button>

      <button
        type="button"
        onClick={onNext}
        aria-label={nextAriaLabel}
        className={cn(
          btnSize,
          'flex items-center justify-center rounded transition-colors duration-100',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#000080] focus-visible:ring-offset-1',
          isNavy
            ? 'text-gray-400 hover:text-white hover:bg-[#000060]'
            : 'text-gray-400 hover:text-gray-700 hover:bg-[#dae8ff]'
        )}
      >
        <ChevronRightIcon className={iconSize} />
      </button>
    </div>
  );
}

// ─── Day View ────────────────────────────────────────────────────────────────

interface DayViewProps {
  viewDate: Date;
  selected: Date | null;
  today: Date;
  size: CalendarSize;
  isNavy: boolean;
  onSelectDay: (date: Date) => void;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  onHeaderClick: () => void;
  minDate?: Date;
  maxDate?: Date;
}

function DayView({
  viewDate,
  selected,
  today,
  size,
  isNavy,
  onSelectDay,
  onPrevMonth,
  onNextMonth,
  onHeaderClick,
  minDate,
  maxDate,
}: DayViewProps) {
  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  const firstDay = getFirstDayOfMonth(year, month);
  const daysInMonth = getDaysInMonth(year, month);
  const daysInPrevMonth = getDaysInMonth(year, month - 1);

  const headerText = `${MONTH_FULL[month]} ${year}`;

  const cellSize =
    size === 'sm' ? 'h-7 w-7 text-xs' : size === 'lg' ? 'h-9 w-9 text-base' : 'h-8 w-8 text-sm';
  const dayHeaderSize = size === 'sm' ? 'text-xs' : size === 'lg' ? 'text-sm' : 'text-xs';

  // Build grid: 6 rows × 7 cols = 42 cells
  const cells: { date: Date; outside: boolean }[] = [];

  // Previous month trailing days
  for (let i = firstDay - 1; i >= 0; i--) {
    cells.push({ date: new Date(year, month - 1, daysInPrevMonth - i), outside: true });
  }
  // Current month days
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ date: new Date(year, month, d), outside: false });
  }
  // Next month leading days
  const remaining = 42 - cells.length;
  for (let d = 1; d <= remaining; d++) {
    cells.push({ date: new Date(year, month + 1, d), outside: true });
  }

  const isDisabled = (date: Date) => {
    if (minDate && date < minDate) return true;
    if (maxDate && date > maxDate) return true;
    return false;
  };

  return (
    <div role="grid" aria-label={headerText}>
      <NavHeader
        label={headerText}
        onPrev={onPrevMonth}
        onNext={onNextMonth}
        onLabelClick={onHeaderClick}
        isNavy={isNavy}
        size={size}
        prevAriaLabel="Previous month"
        nextAriaLabel="Next month"
      />

      {/* Day-of-week headers */}
      <div className="grid grid-cols-7 mb-1" role="row">
        {DAY_HEADERS.map((d) => (
          <div
            key={d}
            role="columnheader"
            aria-label={d}
            className={cn(
              'flex items-center justify-center font-medium',
              cellSize,
              dayHeaderSize,
              isNavy ? 'text-gray-400' : 'text-gray-400'
            )}
          >
            {d}
          </div>
        ))}
      </div>

      {/* Date cells */}
      <div className="grid grid-cols-7 gap-0">
        {cells.map(({ date, outside }, idx) => {
          const isSelected = selected ? isSameDay(date, selected) : false;
          const isToday = isSameDay(date, today);
          const disabled = isDisabled(date);

          return (
            <button
              key={idx}
              type="button"
              role="gridcell"
              aria-label={date.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
              aria-selected={isSelected}
              aria-disabled={disabled}
              tabIndex={isSelected ? 0 : -1}
              disabled={disabled}
              onClick={() => !disabled && onSelectDay(date)}
              className={cn(
                cellSize,
                'flex items-center justify-center rounded transition-colors duration-100',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#000080] focus-visible:ring-offset-1',
                'border',
                isSelected
                  ? 'bg-[#000080] text-white font-semibold border-[#000080] hover:bg-[#0000a0]'
                  : outside
                    ? isNavy
                      ? 'text-gray-600 border-transparent hover:bg-[#000060]'
                      : 'text-gray-300 border-transparent hover:bg-gray-50'
                    : isToday && !isSelected
                      ? isNavy
                        ? 'text-white border-[#000080] hover:bg-[#000060]'
                        : 'text-[#000080] border-[#000080] font-semibold hover:bg-[#dae8ff]'
                      : isNavy
                        ? 'text-gray-200 border-[#000040] hover:bg-[#000060]'
                        : 'text-gray-700 border-gray-200 hover:bg-[#dae8ff]',
                disabled && 'opacity-40 cursor-not-allowed pointer-events-none'
              )}
            >
              {date.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Month View ──────────────────────────────────────────────────────────────

interface MonthViewProps {
  viewDate: Date;
  selected: Date | null;
  size: CalendarSize;
  isNavy: boolean;
  onSelectMonth: (month: number) => void;
  onPrevYear: () => void;
  onNextYear: () => void;
  onHeaderClick: () => void;
}

function MonthView({
  viewDate,
  selected,
  size,
  isNavy,
  onSelectMonth,
  onPrevYear,
  onNextYear,
  onHeaderClick,
}: MonthViewProps) {
  const year = viewDate.getFullYear();
  const cellSize = size === 'sm' ? 'h-8 text-xs' : size === 'lg' ? 'h-11 text-base' : 'h-9 text-sm';

  return (
    <div role="grid" aria-label={`Month picker for ${year}`}>
      <NavHeader
        label={String(year)}
        onPrev={onPrevYear}
        onNext={onNextYear}
        onLabelClick={onHeaderClick}
        isNavy={isNavy}
        size={size}
        prevAriaLabel="Previous year"
        nextAriaLabel="Next year"
      />

      <div className="grid grid-cols-4 gap-1 mt-2">
        {MONTH_NAMES.map((name, idx) => {
          const isSelected = selected
            ? selected.getFullYear() === year && selected.getMonth() === idx
            : false;

          return (
            <button
              key={name}
              type="button"
              role="gridcell"
              aria-label={`${MONTH_FULL[idx]} ${year}`}
              aria-selected={isSelected}
              tabIndex={isSelected ? 0 : -1}
              onClick={() => onSelectMonth(idx)}
              className={cn(
                cellSize,
                'flex items-center justify-center rounded-md font-medium transition-colors duration-100',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#000080] focus-visible:ring-offset-1',
                isSelected
                  ? 'bg-[#000080] text-white hover:bg-[#0000a0]'
                  : isNavy
                    ? 'text-gray-200 hover:bg-[#000060]'
                    : 'text-gray-700 hover:bg-[#dae8ff]'
              )}
            >
              {name}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Year View ───────────────────────────────────────────────────────────────

interface YearViewProps {
  viewDate: Date;
  selected: Date | null;
  size: CalendarSize;
  isNavy: boolean;
  onSelectYear: (year: number) => void;
  onPrevRange: () => void;
  onNextRange: () => void;
}

function YearView({
  viewDate,
  selected,
  size,
  isNavy,
  onSelectYear,
  onPrevRange,
  onNextRange,
}: YearViewProps) {
  const rangeStart = getYearRangeStart(viewDate.getFullYear());
  const rangeEnd = rangeStart + YEAR_RANGE_SIZE - 1;
  const years = Array.from({ length: YEAR_RANGE_SIZE }, (_, i) => rangeStart + i);
  const cellSize = size === 'sm' ? 'h-8 text-xs' : size === 'lg' ? 'h-11 text-base' : 'h-9 text-sm';

  return (
    <div role="grid" aria-label={`Year picker ${rangeStart}–${rangeEnd}`}>
      <NavHeader
        label={`${rangeStart} – ${rangeEnd}`}
        onPrev={onPrevRange}
        onNext={onNextRange}
        onLabelClick={() => {}} // no-op at top level
        isNavy={isNavy}
        size={size}
        prevAriaLabel={`Previous ${YEAR_RANGE_SIZE} years`}
        nextAriaLabel={`Next ${YEAR_RANGE_SIZE} years`}
      />

      <div className="grid grid-cols-4 gap-1 mt-2">
        {years.map((yr) => {
          const isSelected = selected ? selected.getFullYear() === yr : false;

          return (
            <button
              key={yr}
              type="button"
              role="gridcell"
              aria-label={String(yr)}
              aria-selected={isSelected}
              tabIndex={isSelected ? 0 : -1}
              onClick={() => onSelectYear(yr)}
              className={cn(
                cellSize,
                'flex items-center justify-center rounded-md font-medium transition-colors duration-100',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#000080] focus-visible:ring-offset-1',
                isSelected
                  ? 'bg-[#000080] text-white hover:bg-[#0000a0]'
                  : isNavy
                    ? 'text-gray-200 hover:bg-[#000060]'
                    : 'text-gray-700 hover:bg-[#dae8ff]'
              )}
            >
              {yr}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Main Calendar Component ─────────────────────────────────────────────────

export default function Calendar({
  value,
  defaultValue,
  onChange,
  size = 'md',
  theme = 'light',
  initialView = 'day',
  minDate,
  maxDate,
  className,
  'aria-label': ariaLabel = 'Calendar',
}: CalendarProps) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Internal selected state (uncontrolled fallback)
  const [internalSelected, setInternalSelected] = useState<Date | null>(defaultValue ?? null);
  const selected = value !== undefined ? value : internalSelected;

  // View date — the month/year currently being displayed
  const [viewDate, setViewDate] = useState<Date>(() => {
    const base = selected ?? today;
    return new Date(base.getFullYear(), base.getMonth(), 1);
  });

  const [view, setView] = useState<CalendarView>(initialView);

  const isNavy = theme === 'navy';

  // Sync viewDate when controlled value changes
  useEffect(() => {
    if (value) {
      setViewDate(new Date(value.getFullYear(), value.getMonth(), 1));
    }
  }, [value]);

  // ── Day view handlers ──
  const handleSelectDay = useCallback(
    (date: Date) => {
      if (value === undefined) setInternalSelected(date);
      onChange?.(date);
    },
    [value, onChange]
  );

  const handlePrevMonth = useCallback(() => {
    setViewDate((d) => new Date(d.getFullYear(), d.getMonth() - 1, 1));
  }, []);

  const handleNextMonth = useCallback(() => {
    setViewDate((d) => new Date(d.getFullYear(), d.getMonth() + 1, 1));
  }, []);

  // ── Month view handlers ──
  const handleSelectMonth = useCallback((month: number) => {
    setViewDate((d) => new Date(d.getFullYear(), month, 1));
    setView('day');
  }, []);

  const handlePrevYear = useCallback(() => {
    setViewDate((d) => new Date(d.getFullYear() - 1, d.getMonth(), 1));
  }, []);

  const handleNextYear = useCallback(() => {
    setViewDate((d) => new Date(d.getFullYear() + 1, d.getMonth(), 1));
  }, []);

  // ── Year view handlers ──
  const handleSelectYear = useCallback((year: number) => {
    setViewDate((d) => new Date(year, d.getMonth(), 1));
    setView('month');
  }, []);

  const handlePrevRange = useCallback(() => {
    setViewDate((d) => new Date(d.getFullYear() - YEAR_RANGE_SIZE, d.getMonth(), 1));
  }, []);

  const handleNextRange = useCallback(() => {
    setViewDate((d) => new Date(d.getFullYear() + YEAR_RANGE_SIZE, d.getMonth(), 1));
  }, []);

  const containerPadding = size === 'sm' ? 'p-3' : size === 'lg' ? 'p-5' : 'p-4';

  return (
    <div
      role="application"
      aria-label={ariaLabel}
      className={cn(
        calendarVariants({ size }),
        containerPadding,
        'rounded-lg',
        isNavy ? 'bg-[#00002a] text-white' : 'bg-white text-gray-900',
        className
      )}
    >
      {view === 'day' && (
        <DayView
          viewDate={viewDate}
          selected={selected ?? null}
          today={today}
          size={size}
          isNavy={isNavy}
          onSelectDay={handleSelectDay}
          onPrevMonth={handlePrevMonth}
          onNextMonth={handleNextMonth}
          onHeaderClick={() => setView('month')}
          minDate={minDate}
          maxDate={maxDate}
        />
      )}
      {view === 'month' && (
        <MonthView
          viewDate={viewDate}
          selected={selected ?? null}
          size={size}
          isNavy={isNavy}
          onSelectMonth={handleSelectMonth}
          onPrevYear={handlePrevYear}
          onNextYear={handleNextYear}
          onHeaderClick={() => setView('year')}
        />
      )}
      {view === 'year' && (
        <YearView
          viewDate={viewDate}
          selected={selected ?? null}
          size={size}
          isNavy={isNavy}
          onSelectYear={handleSelectYear}
          onPrevRange={handlePrevRange}
          onNextRange={handleNextRange}
        />
      )}
    </div>
  );
}
