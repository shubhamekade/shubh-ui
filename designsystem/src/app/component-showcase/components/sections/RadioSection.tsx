'use client';

import React, { useState } from 'react';
import Radio from '@/components/Radio';
import ShowcaseSection from '../ShowcaseSection';
import SectionHeader from '../SectionHeader';
import VariantControls, { useVariantControls } from '../VariantControls';

export default function RadioSection() {
  const [plan, setPlan] = useState('pro');
  const [size, setSize] = useState('md');
  const [playVal, setPlayVal] = useState('option1');
  const [ctrl, setCtrl] = useVariantControls({ size: 'md' });

  const plans = [
    { value: 'free', label: 'Free', description: 'Up to 3 projects, community support' },
    { value: 'pro', label: 'Pro', description: '$12/mo — Unlimited projects, priority support' },
    {
      value: 'enterprise',
      label: 'Enterprise',
      description: 'Custom pricing — SSO, SLA, dedicated account manager',
    },
  ];

  return (
    <div>
      <SectionHeader
        title="Radio"
        description="Single selection from a group of mutually exclusive options. Supports descriptions, three sizes, and disabled state."
        importPath={`import Radio from "@shubh/ui/Radio"
;`}
      />

      {/* ── Interactive Playground ── */}
      <ShowcaseSection
        title="Interactive Playground"
        description="Use the live controls to switch size and disabled state in real time."
        previewBg="white"
        props={[
          { name: 'label', type: 'string', description: 'Label text beside the radio' },
          { name: 'description', type: 'string', description: 'Secondary description text' },
          {
            name: 'size',
            type: "'sm' | 'md' | 'lg'",
            default: "'md'",
            description: 'Size of radio and label',
          },
          {
            name: 'name',
            type: 'string',
            description: 'Group name — required for native radio groups',
          },
          { name: 'disabled', type: 'boolean', description: 'Prevents interaction' },
          { name: 'error', type: 'string', description: 'Error message' },
        ]}
      >
        <div className="w-full space-y-4">
          <VariantControls
            config={{
              sizes: [
                { value: 'sm', label: 'SM' },
                { value: 'md', label: 'MD' },
                { value: 'lg', label: 'LG' },
              ],
              showDisabled: true,
            }}
            state={ctrl}
            onChange={setCtrl}
          />
          <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg border border-[#d7d7d7]">
            <div className="space-y-3">
              {[
                { value: 'option1', label: 'Option one' },
                { value: 'option2', label: 'Option two' },
                { value: 'option3', label: 'Option three' },
              ].map((opt) => (
                <Radio
                  key={opt.value}
                  name="playground-radio"
                  value={opt.value}
                  label={opt.label}
                  size={(ctrl.size as any) || 'md'}
                  disabled={ctrl.disabled}
                  checked={playVal === opt.value}
                  onChange={() => !ctrl.disabled && setPlayVal(opt.value)}
                />
              ))}
            </div>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Radio Group"
        description="Controlled radio group for plan selection."
        previewBg="white"
        code={`const [plan, setPlan] = useState('pro');

{plans.map(p => (
  <Radio
    key={p.value}
    name="plan"
    value={p.value}
    label={p.label}
    description={p.description}
    checked={plan === p.value}
    onChange={() => setPlan(p.value)}
  />
))}`}
      >
        <div className="space-y-3 w-full max-w-sm">
          {plans.map((p) => (
            <Radio
              key={p.value}
              name="plan-demo"
              value={p.value}
              label={p.label}
              description={p.description}
              checked={plan === p.value}
              onChange={() => setPlan(p.value)}
            />
          ))}
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Sizes"
        description="Three size options for different density contexts."
        previewBg="white"
      >
        <div className="space-y-3">
          {(['sm', 'md', 'lg'] as const).map((s) => (
            <Radio
              key={s}
              name="size-demo"
              value={s}
              label={`${s.toUpperCase()} size radio`}
              size={s}
              checked={size === s}
              onChange={() => setSize(s)}
            />
          ))}
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="States"
        description="Disabled and checked-disabled states."
        previewBg="white"
      >
        <div className="space-y-3">
          <Radio name="state" value="a" label="Disabled unchecked" disabled />
          <Radio name="state" value="b" label="Disabled checked" disabled checked readOnly />
        </div>
      </ShowcaseSection>
    </div>
  );
}
