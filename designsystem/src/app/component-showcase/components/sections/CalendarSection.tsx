'use client';

import React, { useState } from 'react';
import Calendar from '@/components/Calendar';
import type { CalendarSize } from '@/components/Calendar';
import ShowcaseSection from '../ShowcaseSection';
import SectionHeader from '../SectionHeader';
import { useShowcaseTheme } from '../../context/ThemeContext';

export default function CalendarSection() {
  const { theme } = useShowcaseTheme();
  const isNavy = theme === 'navy';

  // Interactive playground state
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date(2024, 9, 14)); // Oct 14 2024
  const [size, setSize] = useState<CalendarSize>('md');

  // Three static demo calendars for side-by-side view
  const [dayViewDate, setDayViewDate] = useState<Date | null>(new Date(2024, 9, 14));
  const [monthViewDate, setMonthViewDate] = useState<Date | null>(new Date(2024, 9, 14));
  const [yearViewDate, setYearViewDate] = useState<Date | null>(new Date(2024, 9, 14));

  const labelClass = isNavy ? 'text-gray-300' : 'text-gray-600';
  const activePill = 'bg-[#000080] text-white';
  const inactivePill = isNavy
    ? 'bg-[#000040] text-gray-300 hover:bg-[#000060]'
    : 'bg-gray-100 text-gray-600 hover:bg-[#dae8ff]';

  const sizes: CalendarSize[] = ['sm', 'md', 'lg'];

  return (
    <div>
      <SectionHeader
        title="Calendar"
        description="Date picker with three drill-down views: Day, Month, and Year. Click the header to zoom out; click a cell to zoom in and select. Supports navy/light themes, size variants, and full keyboard/ARIA accessibility."
        importPath={`import Calendar from "@shubh/ui/Calendar"
;`}
      />

      {/* ── Three Views Side by Side ── */}
      <ShowcaseSection
        title="All Three Views"
        description="Day view (left) shows a full month grid. Click the header to enter Month view (center). Click again to enter Year view (right). Each view has chevron navigation."
      >
        <div className="flex flex-wrap gap-8 items-start justify-center w-full py-4">
          {/* Day View */}
          <div className="flex flex-col items-center gap-2">
            <p className={`text-xs font-semibold uppercase tracking-wide ${labelClass}`}>
              Day View
            </p>
            <Calendar
              value={dayViewDate}
              onChange={setDayViewDate}
              initialView="day"
              theme={theme}
              size="md"
              aria-label="Day view calendar demo"
            />
          </div>

          {/* Month View */}
          <div className="flex flex-col items-center gap-2">
            <p className={`text-xs font-semibold uppercase tracking-wide ${labelClass}`}>
              Month View
            </p>
            <Calendar
              value={monthViewDate}
              onChange={setMonthViewDate}
              initialView="month"
              theme={theme}
              size="md"
              aria-label="Month view calendar demo"
            />
          </div>

          {/* Year View */}
          <div className="flex flex-col items-center gap-2">
            <p className={`text-xs font-semibold uppercase tracking-wide ${labelClass}`}>
              Year View
            </p>
            <Calendar
              value={yearViewDate}
              onChange={setYearViewDate}
              initialView="year"
              theme={theme}
              size="md"
              aria-label="Year view calendar demo"
            />
          </div>
        </div>
      </ShowcaseSection>

      {/* ── Interactive Playground ── */}
      <ShowcaseSection
        title="Interactive Playground"
        description="Select a size variant and interact with the calendar. The selected date is displayed below."
        previewBg="white"
        props={[
          { name: 'value', type: 'Date | null', description: 'Controlled selected date' },
          {
            name: 'defaultValue',
            type: 'Date | null',
            description: 'Default selected date (uncontrolled)',
          },
          {
            name: 'onChange',
            type: '(date: Date) => void',
            description: 'Called when a date is selected',
          },
          {
            name: 'size',
            type: "'sm' | 'md' | 'lg'",
            default: "'md'",
            description: 'Size variant',
          },
          {
            name: 'theme',
            type: "'navy' | 'light'",
            default: "'light'",
            description: 'Color theme',
          },
          {
            name: 'initialView',
            type: "'day' | 'month' | 'year'",
            default: "'day'",
            description: 'Starting view',
          },
          { name: 'minDate', type: 'Date', description: 'Minimum selectable date' },
          { name: 'maxDate', type: 'Date', description: 'Maximum selectable date' },
        ]}
      >
        <div className="w-full space-y-4">
          {/* Size controls */}
          <div className="flex items-center gap-3 flex-wrap">
            <span className={`text-xs font-medium ${labelClass}`}>Size:</span>
            <div className="flex gap-1">
              {sizes.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSize(s)}
                  className={`px-3 py-1 rounded text-xs font-medium transition-colors ${size === s ? activePill : inactivePill}`}
                >
                  {s.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Calendar */}
          <div className="flex justify-center py-4">
            <Calendar
              value={selectedDate}
              onChange={setSelectedDate}
              size={size}
              theme={theme}
              aria-label="Interactive calendar playground"
            />
          </div>

          {/* Selected date display */}
          <div className={`text-center text-sm ${labelClass}`}>
            {selectedDate
              ? `Selected: ${selectedDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}`
              : 'No date selected'}
          </div>
        </div>
      </ShowcaseSection>

      {/* ── Size Variants ── */}
      <ShowcaseSection
        title="Size Variants"
        description="Three sizes — sm, md, lg — controlled via the size prop."
      >
        <div className="flex flex-wrap gap-8 items-start justify-center w-full py-4">
          {sizes.map((s) => (
            <div key={s} className="flex flex-col items-center gap-2">
              <p className={`text-xs font-semibold uppercase tracking-wide ${labelClass}`}>{s}</p>
              <Calendar
                defaultValue={new Date(2024, 9, 14)}
                size={s}
                theme={theme}
                aria-label={`${s} size calendar`}
              />
            </div>
          ))}
        </div>
      </ShowcaseSection>

      {/* ── Theme Variants ── */}
      <ShowcaseSection
        title="Theme Variants"
        description="Navy dark theme and light theme side by side."
      >
        <div className="flex flex-wrap gap-8 items-start justify-center w-full py-4">
          <div className="flex flex-col items-center gap-2">
            <p className={`text-xs font-semibold uppercase tracking-wide ${labelClass}`}>Light</p>
            <Calendar
              defaultValue={new Date(2024, 9, 14)}
              theme="light"
              size="md"
              aria-label="Light theme calendar"
            />
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className={`text-xs font-semibold uppercase tracking-wide ${labelClass}`}>Navy</p>
            <Calendar
              defaultValue={new Date(2024, 9, 14)}
              theme="navy"
              size="md"
              aria-label="Navy theme calendar"
            />
          </div>
        </div>
      </ShowcaseSection>
    </div>
  );
}
