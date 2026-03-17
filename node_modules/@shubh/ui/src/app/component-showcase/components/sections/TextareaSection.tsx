'use client';

import React, { useState } from 'react';
import Textarea from '@/components/Textarea';
import ShowcaseSection from '../ShowcaseSection';
import SectionHeader from '../SectionHeader';
import VariantControls, { useVariantControls } from '../VariantControls';

export default function TextareaSection() {
  const [val, setVal] = useState('');
  const [ctrl, setCtrl] = useVariantControls({ variant: 'default' });

  return (
    <div>
      <SectionHeader
        title="Textarea"
        description="Multi-line text entry with character count, resize control, validation states, and full label/hint support."
        importPath={`import Textarea from "@shubh/ui/Textarea"
;`}
      />
      {/* ── Interactive Playground ── */}
      <ShowcaseSection
        title="Interactive Playground"
        description="Use the live controls to switch variant and disabled state in real time."
        previewBg="white"
        props={[
          { name: 'label', type: 'string', description: 'Label text above textarea' },
          { name: 'hint', type: 'string', description: 'Helper text below textarea' },
          { name: 'error', type: 'string', description: 'Error message — red state' },
          { name: 'showCount', type: 'boolean', description: 'Show current character count' },
          { name: 'maxLength', type: 'number', description: 'Maximum character limit' },
          { name: 'resize', type: "'none' | 'both' | 'horizontal' | 'vertical'", default: "'vertical'", description: 'CSS resize behavior' },
        ]}
      >
        <div className="w-full space-y-4">
          <VariantControls
            config={{
              variants: [
                { value: 'default', label: 'Default' },
                { value: 'error', label: 'Error' },
                { value: 'success', label: 'Success' },
              ],
              showDisabled: true,
            }}
            state={ctrl}
            onChange={setCtrl}
          />
          <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg border border-[#d7d7d7]">
            <div className="w-full max-w-sm">
              <Textarea
                label="Component description"
                hint="Describe your component in detail."
                placeholder="Enter description…"
                rows={3}
                disabled={ctrl?.disabled}
                error={ctrl?.variant === 'error' ? 'Description must be at least 20 characters.' : undefined}
                success={ctrl?.variant === 'success' ? 'Description looks great!' : undefined}
              />
            </div>
          </div>
        </div>
      </ShowcaseSection>
      <ShowcaseSection
        title="Basic"
        description="Default textarea with label and hint."
        previewBg="white"
        code={`<Textarea label="Description" hint="Describe your component in detail." placeholder="Enter description…" />`}
      >
        <div className="w-full max-w-sm">
          <Textarea label="Description" hint="Describe your component in detail." placeholder="Enter description…" rows={3} />
        </div>
      </ShowcaseSection>
      <ShowcaseSection
        title="Character Count"
        description="Set showCount and maxLength to display a live character counter."
        previewBg="white"
        code={`<Textarea
  label="Release notes"
  showCount
  maxLength={280}
  placeholder="What changed in this release?"
  rows={4}
/>`}
      >
        <div className="w-full max-w-sm">
          <Textarea
            label="Release notes"
            showCount
            maxLength={280}
            placeholder="What changed in this release?"
            rows={4}
            value={val}
            onChange={e => setVal(e?.target?.value)}
          />
        </div>
      </ShowcaseSection>
      <ShowcaseSection
        title="Validation States"
        description="Error and success states mirror the Input component's validation pattern."
        previewBg="white"
      >
        <div className="w-full max-w-sm space-y-4">
          <Textarea
            label="Component description"
            error="Description must be at least 20 characters."
            defaultValue="Too short"
            rows={2}
          />
          <Textarea
            label="Component description"
            success="Description looks great!"
            defaultValue="A fully accessible, composable button component with 9 variants and 6 size options."
            rows={2}
          />
          <Textarea
            label="Notes (disabled)"
            placeholder="No editing allowed"
            disabled
            rows={2}
          />
        </div>
      </ShowcaseSection>
    </div>
  );
}