'use client';

import React, { useState } from 'react';
import DatePicker from '@/components/DatePicker';
import type { DatePickerSize } from '@/components/DatePicker';
import type { CalendarTheme } from '@/components/Calendar';
import ShowcaseSection from '../ShowcaseSection';
import SectionHeader from '../SectionHeader';
import { useShowcaseTheme } from '../../context/ThemeContext';

export default function DatePickerSection() {
  const { theme } = useShowcaseTheme();
  const calendarTheme: CalendarTheme = theme === 'light' ? 'light' : 'navy';
  const isNavy = theme === 'navy';
  const labelClass = isNavy ? 'text-gray-300' : 'text-gray-600';

  // Interactive playground
  const [date, setDate] = useState<Date | null>(null);
  const [size, setSize] = useState<DatePickerSize>('md');
  const sizes: DatePickerSize[] = ['sm', 'md', 'lg'];

  const activePill = 'bg-[#000080] text-white';
  const inactivePill = isNavy
    ? 'bg-[#000040] text-gray-300 hover:bg-[#000060]'
    : 'bg-gray-100 text-gray-600 hover:bg-[#dae8ff]';

  // Form demo
  const [formDate, setFormDate] = useState<Date | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // States demo
  const [stateDate, setStateDate] = useState<Date | null>(new Date(2024, 9, 14));

  return (
    <div>
      <SectionHeader
        title="DatePicker"
        description="An input field that opens a Calendar popover when clicked. Supports controlled and uncontrolled usage, size variants, theming, validation states, clear button, and full keyboard accessibility."
        importPath={`import DatePicker from "@shubh/ui/DatePicker";`}
      />

      {/* ── Basic Usage ── */}
      <ShowcaseSection
        title="Basic Usage"
        description="Click the input to open the calendar. Click a date to select it. Click × to clear."
      >
        <div className="w-72">
          <DatePicker
            theme={calendarTheme}
            placeholder="Select a date"
            aria-label="Basic date picker"
          />
        </div>
      </ShowcaseSection>

      {/* ── With Label ── */}
      <ShowcaseSection
        title="With Label & Helper Text"
        description="Supports label, hint, required indicator, and error messages."
      >
        <div className="flex flex-wrap gap-6 items-start w-full max-w-2xl">
          <div className="w-64">
            <DatePicker
              label="Start date"
              hint="Select the project start date"
              theme={calendarTheme}
              placeholder="e.g. Jan 1, 2026"
            />
          </div>
          <div className="w-64">
            <DatePicker
              label="Due date"
              required
              theme={calendarTheme}
              placeholder="Select due date"
            />
          </div>
          <div className="w-64">
            <DatePicker
              label="Appointment"
              error="A date is required"
              theme={calendarTheme}
              placeholder="Select appointment"
            />
          </div>
        </div>
      </ShowcaseSection>

      {/* ── Size Variants ── */}
      <ShowcaseSection
        title="Size Variants"
        description="Three sizes — sm, md, lg — matching the Input component."
      >
        <div className="flex flex-wrap gap-6 items-end w-full max-w-2xl">
          {sizes.map((s) => (
            <div key={s} className="w-56 flex flex-col gap-1">
              <p className={`text-xs font-semibold uppercase tracking-wide ${labelClass}`}>{s}</p>
              <DatePicker size={s} theme={calendarTheme} placeholder={`${s.toUpperCase()} picker`} />
            </div>
          ))}
        </div>
      </ShowcaseSection>

      {/* ── Disabled ── */}
      <ShowcaseSection
        title="Disabled State"
        description="When disabled, the picker cannot be opened and shows reduced opacity."
      >
        <div className="w-72">
          <DatePicker
            label="Locked date"
            defaultValue={new Date(2024, 9, 14)}
            theme={calendarTheme}
            disabled
          />
        </div>
      </ShowcaseSection>

      {/* ── Interactive Playground ── */}
      <ShowcaseSection
        title="Interactive Playground"
        description="Try different sizes. The selected date is reflected below."
        previewBg="white"
        props={[
          { name: 'value', type: 'Date | null', description: 'Controlled selected date' },
          { name: 'defaultValue', type: 'Date | null', description: 'Default value (uncontrolled)' },
          { name: 'onChange', type: '(date: Date | null) => void', description: 'Called on select or clear' },
          { name: 'placeholder', type: 'string', default: '"Select a date"', description: 'Input placeholder' },
          { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Size variant' },
          { name: 'theme', type: "'navy' | 'light'", default: "'light'", description: 'Calendar theme' },
          { name: 'label', type: 'string', description: 'Label above the input' },
          { name: 'required', type: 'boolean', description: 'Required indicator' },
          { name: 'error', type: 'string | boolean', description: 'Error state and message' },
          { name: 'hint', type: 'string', description: 'Helper text below input' },
          { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the picker' },
          { name: 'minDate', type: 'Date', description: 'Earliest selectable date' },
          { name: 'maxDate', type: 'Date', description: 'Latest selectable date' },
          { name: 'formatDate', type: '(date: Date) => string', description: 'Custom display formatter' },
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

          <div className="flex justify-center py-4">
            <div className="w-72">
              <DatePicker
                value={date}
                onChange={setDate}
                size={size}
                theme={calendarTheme}
                label="Pick a date"
                placeholder="Select a date…"
              />
            </div>
          </div>

          <div className={`text-center text-sm ${labelClass}`}>
            {date
              ? `Selected: ${date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}`
              : 'No date selected'}
          </div>
        </div>
      </ShowcaseSection>

      {/* ── Min / Max Date ── */}
      <ShowcaseSection
        title="Min / Max Date Constraints"
        description="Dates outside the allowed range are greyed out and unselectable."
      >
        <div className="flex flex-wrap gap-6 items-start w-full max-w-2xl">
          <div className="w-64">
            <DatePicker
              label="Min: today"
              hint="Cannot select past dates"
              minDate={new Date()}
              theme={calendarTheme}
              placeholder="Future dates only"
            />
          </div>
          <div className="w-64">
            <DatePicker
              label="Max: today"
              hint="Cannot select future dates"
              maxDate={new Date()}
              theme={calendarTheme}
              placeholder="Past dates only"
            />
          </div>
        </div>
      </ShowcaseSection>

      {/* ── Theme Variants ── */}
      <ShowcaseSection
        title="Theme Variants"
        description="Light theme (default) and Navy dark theme."
      >
        <div className="flex flex-wrap gap-8 items-start w-full">
          <div className="flex flex-col gap-2 items-start">
            <p className={`text-xs font-semibold uppercase tracking-wide ${labelClass}`}>Light</p>
            <div className="w-64">
              <DatePicker
                theme="light"
                defaultValue={new Date(2024, 9, 14)}
                label="Event date"
                hint="Light theme"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <p className={`text-xs font-semibold uppercase tracking-wide ${labelClass}`}>Navy</p>
            <div className="w-64">
              <DatePicker
                theme="navy"
                defaultValue={new Date(2024, 9, 14)}
                label="Event date"
                hint="Navy theme"
              />
            </div>
          </div>
        </div>
      </ShowcaseSection>
    </div>
  );
}
