'use client';

import React, { useState } from 'react';

import Select from '@/components/Select';
import ShowcaseSection from '../ShowcaseSection';
import SectionHeader from '../SectionHeader';
import VariantControls, { useVariantControls } from '../VariantControls';

const frameworkOptions = [
  { value: 'nextjs',   label: 'Next.js',   description: 'React framework by Vercel' },
  { value: 'remix',    label: 'Remix',     description: 'Full-stack web framework' },
  { value: 'astro',    label: 'Astro',     description: 'Content-first framework' },
  { value: 'nuxt',     label: 'Nuxt',      description: 'Vue.js meta-framework', disabled: true },
  { value: 'sveltekit',label: 'SvelteKit', description: 'Svelte application framework' },
];

const colorOptions = [
  { value: 'navy',    label: 'Navy',   icon: <span className="h-3 w-3 rounded-full bg-[#000040] inline-block" /> },
  { value: 'blue',    label: 'Blue',   icon: <span className="h-3 w-3 rounded-full bg-blue-500 inline-block" /> },
  { value: 'green',   label: 'Green',  icon: <span className="h-3 w-3 rounded-full bg-green-500 inline-block" /> },
  { value: 'red',     label: 'Red',    icon: <span className="h-3 w-3 rounded-full bg-red-500 inline-block" /> },
  { value: 'amber',   label: 'Amber',  icon: <span className="h-3 w-3 rounded-full bg-amber-400 inline-block" /> },
  { value: 'purple',  label: 'Purple', icon: <span className="h-3 w-3 rounded-full bg-purple-500 inline-block" /> },
];

const featureOptions = [
  { value: 'keyboard',     label: 'Keyboard navigation' },
  { value: 'aria',         label: 'ARIA roles' },
  { value: 'focus',        label: 'Focus management' },
  { value: 'rtl',          label: 'RTL support' },
  { value: 'animation',    label: 'Smooth animations' },
  { value: 'dark',         label: 'Dark mode' },
];

export default function SelectSection() {
  const [framework, setFramework] = useState('');
  const [color, setColor]         = useState('');
  const [features, setFeatures]   = useState<string[]>([]);
  const [playVal, setPlayVal]     = useState('');
  const [ctrl, setCtrl] = useVariantControls({ size: 'md' });

  return (
    <div>
      <SectionHeader
        title="Select"
        description="Accessible dropdown picker with single and multi-select modes, option descriptions, icon decorators, clearable state, and keyboard navigation."
        importPath={`import Select from "@shubh/ui/Select"
;`}
      />

      {/* ── Interactive Playground ── */}
      <ShowcaseSection
        title="Interactive Playground"
        description="Use the live controls to switch size and disabled state in real time."
        previewBg="white"
        props={[
          { name: 'options', type: 'SelectOption[]', required: true, description: 'Array of options with value, label, optional description/icon/disabled' },
          { name: 'value', type: 'string | string[]', description: 'Controlled selected value(s)' },
          { name: 'onChange', type: '(value: string | string[]) => void', description: 'Callback on selection change' },
          { name: 'placeholder', type: 'string', default: "'Select an option'", description: 'Placeholder text when no value selected' },
          { name: 'multiple', type: 'boolean', default: 'false', description: 'Enable multi-select mode' },
          { name: 'clearable', type: 'boolean', default: 'false', description: 'Show clear button when value is selected' },
          { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Height variant' },
          { name: 'error', type: 'string', description: 'Error message below select' },
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
            <div className="w-full max-w-xs">
              <Select
                label="Framework"
                options={frameworkOptions}
                value={playVal}
                onChange={v => setPlayVal(v as string)}
                placeholder="Choose a framework"
                size={ctrl.size as any || 'md'}
                disabled={ctrl.disabled}
                clearable
              />
            </div>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Single Select"
        description="Standard single-option picker with option descriptions."
        previewBg="white"
        code={`<Select
  label="Framework"
  options={frameworkOptions}
  value={framework}
  onChange={setFramework}
  placeholder="Choose a framework"
  clearable
/>`}
      >
        <div className="w-full max-w-xs">
          <Select
            label="Framework"
            options={frameworkOptions}
            value={framework}
            onChange={v => setFramework(v as string)}
            placeholder="Choose a framework"
            clearable
          />
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="With Icons"
        description="Options can include icon decorators using the icon property."
        previewBg="white"
      >
        <div className="w-full max-w-xs">
          <Select
            label="Brand color"
            options={colorOptions}
            value={color}
            onChange={v => setColor(v as string)}
            placeholder="Pick a color"
            clearable
          />
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Multi-Select"
        description="Enable multiple: true to allow selecting multiple options simultaneously."
        previewBg="white"
        code={`<Select
  label="Accessibility features"
  options={featureOptions}
  value={features}
  onChange={setFeatures}
  multiple
  placeholder="Select features…"
  clearable
/>`}
      >
        <div className="w-full max-w-xs">
          <Select
            label="Accessibility features"
            options={featureOptions}
            value={features}
            onChange={v => setFeatures(v as string[])}
            multiple
            placeholder="Select features…"
            clearable
          />
          {features.length > 0 && (
            <p className="mt-2 text-xs text-[#808080]">Selected: {features.join(', ')}</p>
          )}
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Sizes &amp; States"
        description="Three height variants and error/disabled states."
        previewBg="white"
      >
        <div className="w-full max-w-xs space-y-3">
          <Select options={frameworkOptions} size="sm" placeholder="Small select" />
          <Select options={frameworkOptions} size="md" placeholder="Medium select (default)" />
          <Select options={frameworkOptions} size="lg" placeholder="Large select" />
          <Select options={frameworkOptions} error="Please select a framework" placeholder="Error state" />
          <Select options={frameworkOptions} disabled placeholder="Disabled" />
        </div>
      </ShowcaseSection>
    </div>
  );
}