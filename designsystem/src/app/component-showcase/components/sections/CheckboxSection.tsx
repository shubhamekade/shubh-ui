'use client';

import React, { useState } from 'react';
import Checkbox from '@/components/Checkbox';
import ShowcaseSection from '../ShowcaseSection';
import SectionHeader from '../SectionHeader';
import VariantControls, { useVariantControls } from '../VariantControls';

export default function CheckboxSection() {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(true);
  const [items, setItems] = useState({ a: true, b: false, c: true, d: false });
  const [ctrl, setCtrl] = useVariantControls({ size: 'md' });

  const allChecked = Object.values(items).every(Boolean);
  const someChecked = Object.values(items).some(Boolean) && !allChecked;

  const toggleAll = () => {
    const next = !allChecked;
    setItems({ a: next, b: next, c: next, d: next });
  };

  return (
    <div>
      <SectionHeader
        title="Checkbox"
        description="Boolean toggle with label, description, indeterminate state, three sizes, and full ARIA compliance."
        importPath={`import Checkbox from "@shubh/ui/Checkbox"
;`}
      />

      {/* ── Interactive Playground ── */}
      <ShowcaseSection
        title="Interactive Playground"
        description="Use the live controls to switch size and disabled state in real time."
        previewBg="white"
        props={[
          { name: 'label', type: 'string', description: 'Label text beside the checkbox' },
          { name: 'description', type: 'string', description: 'Secondary description text' },
          {
            name: 'size',
            type: "'sm' | 'md' | 'lg'",
            default: "'md'",
            description: 'Size of the checkbox and label',
          },
          {
            name: 'indeterminate',
            type: 'boolean',
            default: 'false',
            description: 'Shows dash icon — for select-all patterns',
          },
          { name: 'error', type: 'string', description: 'Error message below checkbox' },
          { name: 'disabled', type: 'boolean', description: 'Prevents interaction' },
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
              <Checkbox
                label="Accept terms of service"
                size={(ctrl.size as any) || 'md'}
                disabled={ctrl.disabled}
                defaultChecked
              />
              <Checkbox
                label="Subscribe to release updates"
                description="You'll receive an email when new versions are published."
                size={(ctrl.size as any) || 'md'}
                disabled={ctrl.disabled}
              />
            </div>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Basic"
        description="Uncontrolled and controlled checkbox examples."
        previewBg="white"
        code={`<Checkbox label="Accept terms of service" />
<Checkbox label="Subscribe to updates" defaultChecked />`}
      >
        <div className="space-y-3">
          <Checkbox
            label="Accept terms of service"
            checked={checked1}
            onChange={(e) => setChecked1(e.target.checked)}
          />
          <Checkbox
            label="Subscribe to release updates"
            description="You'll receive an email when new versions are published."
            checked={checked2}
            onChange={(e) => setChecked2(e.target.checked)}
          />
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Indeterminate (Select All)"
        description="Use indeterminate when some but not all children are selected."
        previewBg="white"
      >
        <div className="space-y-3">
          <Checkbox
            label="Select all components"
            checked={allChecked}
            indeterminate={someChecked}
            onChange={toggleAll}
          />
          <div className="ml-6 space-y-2 border-l-2 border-[#d7d7d7] pl-4">
            {(['a', 'b', 'c', 'd'] as const).map((k) => (
              <Checkbox
                key={k}
                label={`Component ${k.toUpperCase()}`}
                checked={items[k]}
                onChange={(e) => setItems((prev) => ({ ...prev, [k]: e.target.checked }))}
              />
            ))}
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Sizes"
        description="Three sizes — sm, md (default), lg."
        previewBg="white"
      >
        <div className="space-y-3">
          <Checkbox size="sm" label="Small checkbox" defaultChecked />
          <Checkbox size="md" label="Medium checkbox (default)" defaultChecked />
          <Checkbox size="lg" label="Large checkbox" defaultChecked />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="States" description="Disabled and error states." previewBg="white">
        <div className="space-y-3">
          <Checkbox label="Disabled unchecked" disabled />
          <Checkbox label="Disabled checked" disabled checked readOnly />
          <Checkbox label="With error" error="You must accept the terms to continue." />
        </div>
      </ShowcaseSection>
    </div>
  );
}
