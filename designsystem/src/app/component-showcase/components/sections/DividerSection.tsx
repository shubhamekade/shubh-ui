'use client';

import React from 'react';
import Divider from '@/components/Divider';
import ShowcaseSection from '../ShowcaseSection';
import SectionHeader from '../SectionHeader';
import VariantControls, { useVariantControls } from '../VariantControls';

export default function DividerSection() {
  const [ctrl, setCtrl] = useVariantControls({
    variant: 'solid',
    extras: { thickness: 'thin', orientation: 'horizontal' },
  });

  return (
    <div>
      <SectionHeader
        title="Divider"
        description="Visual content separator supporting horizontal and vertical orientations, optional text labels with alignment, three line styles, and three thickness options."
        importPath={`import Divider from "@shubh/ui/Divider"
;`}
      />

      {/* ── Interactive Playground ── */}
      <ShowcaseSection
        title="Interactive Playground"
        description="Use the live controls to switch variant, thickness, and orientation in real time."
        previewBg="white"
        props={[
          {
            name: 'orientation',
            type: "'horizontal' | 'vertical'",
            default: "'horizontal'",
            description: 'Direction of the divider',
          },
          { name: 'label', type: 'ReactNode', description: 'Text label centered on the divider' },
          {
            name: 'labelAlign',
            type: "'left' | 'center' | 'right'",
            default: "'center'",
            description: 'Label alignment',
          },
          {
            name: 'variant',
            type: "'solid' | 'dashed' | 'dotted'",
            default: "'solid'",
            description: 'Line style',
          },
          {
            name: 'thickness',
            type: "'thin' | 'medium' | 'thick'",
            default: "'thin'",
            description: 'Line weight',
          },
        ]}
      >
        <div className="w-full space-y-4">
          <VariantControls
            config={{
              variants: [
                { value: 'solid', label: 'Solid' },
                { value: 'dashed', label: 'Dashed' },
                { value: 'dotted', label: 'Dotted' },
              ],
              showDisabled: false,
              extras: [
                {
                  key: 'thickness',
                  label: 'Thickness',
                  options: [
                    { value: 'thin', label: 'Thin' },
                    { value: 'medium', label: 'Medium' },
                    { value: 'thick', label: 'Thick' },
                  ],
                },
              ],
            }}
            state={ctrl}
            onChange={setCtrl}
          />
          <div className="p-6 bg-gray-50 rounded-lg border border-[#d7d7d7]">
            <div className="w-full max-w-sm">
              <Divider
                variant={(ctrl.variant as any) || 'solid'}
                thickness={(ctrl.extras.thickness as any) || 'thin'}
                label="Section divider"
              />
            </div>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Horizontal"
        description="Default horizontal divider with solid, dashed, and dotted styles."
        previewBg="white"
        code={`<Divider />
<Divider variant="dashed" />
<Divider variant="dotted" />`}
      >
        <div className="w-full max-w-sm space-y-4">
          <div>
            <p className="text-xs text-[#808080] mb-2">Solid</p>
            <Divider />
          </div>
          <div>
            <p className="text-xs text-[#808080] mb-2">Dashed</p>
            <Divider variant="dashed" />
          </div>
          <div>
            <p className="text-xs text-[#808080] mb-2">Dotted</p>
            <Divider variant="dotted" />
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="With Label"
        description="Text label with left, center, and right alignment."
        previewBg="white"
      >
        <div className="w-full max-w-sm space-y-4">
          <Divider label="OR" />
          <Divider label="Form components" labelAlign="left" />
          <Divider label="v2.0.0" labelAlign="right" />
          <Divider label="Continue with" variant="dashed" />
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Thickness Variants"
        description="Three line weight options."
        previewBg="white"
      >
        <div className="w-full max-w-sm space-y-4">
          <div>
            <p className="text-xs text-[#808080] mb-2">Thin (default)</p>
            <Divider thickness="thin" />
          </div>
          <div>
            <p className="text-xs text-[#808080] mb-2">Medium</p>
            <Divider thickness="medium" />
          </div>
          <div>
            <p className="text-xs text-[#808080] mb-2">Thick</p>
            <Divider thickness="thick" />
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Vertical Divider"
        description="Vertical orientation for inline content separation."
        previewBg="white"
      >
        <div className="flex items-center gap-3 h-8">
          <span className="text-sm text-[#808080]">Components</span>
          <Divider orientation="vertical" />
          <span className="text-sm text-[#808080]">Tokens</span>
          <Divider orientation="vertical" />
          <span className="text-sm text-[#808080]">Patterns</span>
          <Divider orientation="vertical" />
          <span className="text-sm text-[#808080]">Changelog</span>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="In Context — Form Section"
        description="Divider with label separating form sections."
        previewBg="white"
      >
        <div className="w-full max-w-sm space-y-4">
          <div>
            <p className="text-sm font-medium text-[#1e1e1e] mb-3">Component metadata</p>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-[#808080]">Name</span>
                <span className="font-medium">Button</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#808080]">Category</span>
                <span className="font-medium">Form</span>
              </div>
            </div>
          </div>
          <Divider label="Version info" labelAlign="left" variant="dashed" />
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-[#808080]">Version</span>
              <span className="font-mono text-xs font-medium">1.4.2</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#808080]">Last updated</span>
              <span className="font-medium">12 Mar 2026</span>
            </div>
          </div>
        </div>
      </ShowcaseSection>
    </div>
  );
}
