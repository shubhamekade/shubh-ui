'use client';

import React from 'react';
import Spinner from '@/components/Spinner';
import Button from '@/components/Button';
import ShowcaseSection from '../ShowcaseSection';
import SectionHeader from '../SectionHeader';
import VariantControls, { useVariantControls } from '../VariantControls';

export default function SpinnerSection() {
  const [ctrl, setCtrl] = useVariantControls({ size: 'md', variant: 'primary' });

  return (
    <div>
      <SectionHeader
        title="Spinner"
        description="Circular loading indicator with five sizes and six color variants. Use for inline loading states — prefer Skeleton for page-level loading."
        importPath={`import Spinner from "@shubh/ui/Spinner"
;`}
      />

      {/* ── Interactive Playground ── */}
      <ShowcaseSection
        title="Interactive Playground"
        description="Use the live controls to switch size and color in real time."
        props={[
          { name: 'size', type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'", default: "'md'", description: 'Dimensions of the spinner' },
          { name: 'color', type: "'primary' | 'white' | 'muted' | 'success' | 'warning' | 'danger'", default: "'primary'", description: 'Spinner color' },
          { name: 'label', type: 'string', default: "'Loading…'", description: 'Screen reader accessible label' },
        ]}
      >
        <div className="w-full space-y-4">
          <VariantControls
            config={{
              sizes: [
                { value: 'xs', label: 'XS' },
                { value: 'sm', label: 'SM' },
                { value: 'md', label: 'MD' },
                { value: 'lg', label: 'LG' },
                { value: 'xl', label: 'XL' },
              ],
              variants: [
                { value: 'primary', label: 'Primary' },
                { value: 'muted', label: 'Muted' },
                { value: 'success', label: 'Success' },
                { value: 'warning', label: 'Warning' },
                { value: 'danger', label: 'Danger' },
                { value: 'white', label: 'White' },
              ],
              showDisabled: false,
            }}
            state={ctrl}
            onChange={setCtrl}
          />
          <div
            className="flex items-center justify-center p-8 rounded-lg border border-[#d7d7d7]"
            style={{ background: ctrl.variant === 'white' ? '#000080' : '#f9fafb' }}
          >
            <Spinner
              size={ctrl.size as any || 'md'}
              color={ctrl.variant as any || 'primary'}
            />
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Sizes"
        description="Five sizes from xs to xl."
        code={`<Spinner size="xs" />
<Spinner size="sm" />
<Spinner size="md" />
<Spinner size="lg" />
<Spinner size="xl" />`}
      >
        <Spinner size="xs" />
        <Spinner size="sm" />
        <Spinner size="md" />
        <Spinner size="lg" />
        <Spinner size="xl" />
      </ShowcaseSection>

      <ShowcaseSection
        title="Color Variants"
        description="Six color options for different background contexts."
      >
        <Spinner color="primary" size="md" />
        <Spinner color="muted"   size="md" />
        <Spinner color="success" size="md" />
        <Spinner color="warning" size="md" />
        <Spinner color="danger"  size="md" />
        <div className="bg-[#000080] p-2 rounded-md">
          <Spinner color="white" size="md" />
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="In Context"
        description="Spinners in buttons, cards, and inline text."
        previewBg="white"
      >
        <div className="space-y-4 w-full max-w-xs">
          <Button loading>Processing…</Button>
          <div className="flex items-center gap-3 p-4 border border-[#d7d7d7] rounded-lg">
            <Spinner size="sm" />
            <div>
              <p className="text-sm font-medium text-[#1e1e1e]">Publishing component</p>
              <p className="text-xs text-[#808080]">Uploading to npm registry…</p>
            </div>
          </div>
          <span className="flex items-center gap-2 text-sm text-[#808080]">
            <Spinner size="xs" />
            Loading component list…
          </span>
        </div>
      </ShowcaseSection>
    </div>
  );
}