'use client';

import React from 'react';
import { cn } from '@/utils/cn';

/* ─── Types ─────────────────────────────────────────────────────────────── */

export interface ControlOption {
  value: string;
  label: string;
}

export interface VariantControlsConfig {
  /** Size options — omit to hide size control */
  sizes?: ControlOption[];
  /** Color / variant options — omit to hide variant control */
  variants?: ControlOption[];
  /** Whether to show the disabled toggle */
  showDisabled?: boolean;
  /** Extra custom controls */
  extras?: ExtraControl[];
}

export interface ExtraControl {
  key: string;
  label: string;
  options: ControlOption[];
}

export interface VariantControlsState {
  size: string;
  variant: string;
  disabled: boolean;
  extras: Record<string, string>;
}

interface VariantControlsProps {
  config: VariantControlsConfig;
  state: VariantControlsState;
  onChange: (next: VariantControlsState) => void;
  className?: string;
}

/* ─── Sub-components ─────────────────────────────────────────────────────── */

function ControlGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-xs font-medium text-[#808080] w-16 shrink-0">{label}</span>
      <div className="flex items-center gap-1.5 flex-wrap">{children}</div>
    </div>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'px-2.5 py-1 rounded-md text-xs font-medium transition-all duration-100 border',
        active
          ? 'bg-[#000080] text-white border-[#000080] shadow-sm'
          : 'bg-white text-[#1e1e1e] border-[#d7d7d7] hover:border-[#000080] hover:text-[#000080]'
      )}
    >
      {children}
    </button>
  );
}

/* ─── Main Component ─────────────────────────────────────────────────────── */

export default function VariantControls({
  config,
  state,
  onChange,
  className,
}: VariantControlsProps) {
  const { sizes, variants, showDisabled = true, extras = [] } = config;

  const set = (patch: Partial<VariantControlsState>) => onChange({ ...state, ...patch });

  const setExtra = (key: string, value: string) =>
    onChange({ ...state, extras: { ...state.extras, [key]: value } });

  return (
    <div
      className={cn(
        'flex flex-col gap-2.5 px-4 py-3 bg-gray-50 border border-[#d7d7d7] rounded-lg',
        className
      )}
    >
      <p className="text-xs font-semibold text-[#1e1e1e] uppercase tracking-wide">Live controls</p>

      {sizes && sizes.length > 0 && (
        <ControlGroup label="Size">
          {sizes.map((opt) => (
            <Chip
              key={opt.value}
              active={state.size === opt.value}
              onClick={() => set({ size: opt.value })}
            >
              {opt.label}
            </Chip>
          ))}
        </ControlGroup>
      )}

      {variants && variants.length > 0 && (
        <ControlGroup label="Variant">
          {variants.map((opt) => (
            <Chip
              key={opt.value}
              active={state.variant === opt.value}
              onClick={() => set({ variant: opt.value })}
            >
              {opt.label}
            </Chip>
          ))}
        </ControlGroup>
      )}

      {extras.map((extra) => (
        <ControlGroup key={extra.key} label={extra.label}>
          {extra.options.map((opt) => (
            <Chip
              key={opt.value}
              active={state.extras[extra.key] === opt.value}
              onClick={() => setExtra(extra.key, opt.value)}
            >
              {opt.label}
            </Chip>
          ))}
        </ControlGroup>
      ))}

      {showDisabled && (
        <ControlGroup label="State">
          <button
            type="button"
            onClick={() => set({ disabled: !state.disabled })}
            className={cn(
              'flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-all duration-100 border',
              state.disabled
                ? 'bg-[#000080] text-white border-[#000080]'
                : 'bg-white text-[#1e1e1e] border-[#d7d7d7] hover:border-[#000080] hover:text-[#000080]'
            )}
          >
            <span
              className={cn(
                'inline-block w-3 h-3 rounded-full border transition-colors',
                state.disabled ? 'bg-white border-white' : 'bg-transparent border-current'
              )}
            />
            Disabled
          </button>
        </ControlGroup>
      )}
    </div>
  );
}

/* ─── Hook ───────────────────────────────────────────────────────────────── */

export function useVariantControls(
  defaults: Partial<VariantControlsState> = {}
): [VariantControlsState, (next: VariantControlsState) => void] {
  const [state, setState] = React.useState<VariantControlsState>({
    size: defaults.size ?? 'md',
    variant: defaults.variant ?? '',
    disabled: defaults.disabled ?? false,
    extras: defaults.extras ?? {},
  });
  return [state, setState];
}
