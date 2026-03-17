'use client';

import React from 'react';
import Tabs from '@/components/Tabs';
import ShowcaseSection from '../ShowcaseSection';
import SectionHeader from '../SectionHeader';
import VariantControls, { useVariantControls } from '../VariantControls';
import { CodeBracketIcon as Code2, EyeIcon as Eye, DocumentTextIcon as FileText } from '@heroicons/react/24/outline';

const demoItems = [
  { id: 'overview', label: 'Overview', content: <p className="text-sm text-[#808080] leading-relaxed">Overview content — general information about this component, its purpose, and usage guidelines.</p> },
  { id: 'props',    label: 'Props',    content: <p className="text-sm text-[#808080] leading-relaxed">Props reference table — all accepted TypeScript props, their types, defaults, and descriptions.</p> },
  { id: 'examples', label: 'Examples', badge: 3, content: <p className="text-sm text-[#808080] leading-relaxed">Code examples — copy-paste snippets for common use cases and patterns.</p> },
  { id: 'changelog',label: 'Changelog', content: <p className="text-sm text-[#808080] leading-relaxed">Version history — breaking changes, new features, and bug fixes per release.</p> },
  { id: 'disabled', label: 'Disabled tab', disabled: true, content: null },
];

const iconItems = [
  { id: 'preview', label: 'Preview', icon: <Eye className="h-3.5 w-3.5" />,    content: <p className="text-sm text-[#808080]">Live component preview.</p> },
  { id: 'code',    label: 'Code',    icon: <Code2 className="h-3.5 w-3.5" />,  content: <p className="text-sm text-[#808080]">Source code snippet.</p> },
  { id: 'props',   label: 'Props',   icon: <FileText className="h-3.5 w-3.5" />, content: <p className="text-sm text-[#808080]">Props reference.</p> },
];

export default function TabsSection() {
  const [ctrl, setCtrl] = useVariantControls({ variant: 'line' });

  return (
    <div>
      <SectionHeader
        title="Tabs"
        description="Tabbed content navigation with four visual variants, badge counts, icon support, disabled tabs, and full keyboard navigation."
        importPath={`import Tabs from "@shubh/ui/Tabs"
;`}
      />

      {/* ── Interactive Playground ── */}
      <ShowcaseSection
        title="Interactive Playground"
        description="Use the live controls to switch tab variant in real time."
        previewBg="white"
        props={[
          { name: 'items', type: 'TabItem[]', required: true, description: 'Array of tab items with id, label, content' },
          { name: 'variant', type: "'line' | 'pill' | 'enclosed' | 'soft'", default: "'line'", description: 'Visual tab style' },
          { name: 'defaultTab', type: 'string', description: 'Initially active tab id (uncontrolled)' },
          { name: 'activeTab', type: 'string', description: 'Controlled active tab id' },
          { name: 'onChange', type: '(id: string) => void', description: 'Callback on tab change' },
          { name: 'fullWidth', type: 'boolean', description: 'Tabs stretch to fill container' },
        ]}
      >
        <div className="w-full space-y-4">
          <VariantControls
            config={{
              variants: [
                { value: 'line', label: 'Line' },
                { value: 'pill', label: 'Pill' },
                { value: 'soft', label: 'Soft' },
                { value: 'enclosed', label: 'Enclosed' },
              ],
              showDisabled: false,
            }}
            state={ctrl}
            onChange={setCtrl}
          />
          <div className="p-6 bg-gray-50 rounded-lg border border-[#d7d7d7]">
            <div className="w-full max-w-lg">
              <Tabs variant={ctrl.variant as any || 'line'} items={demoItems} key={ctrl.variant} />
            </div>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Line variant (default)"
        description="Underline-style tabs — the standard documentation pattern."
        previewBg="white"
        code={`<Tabs
  variant="line"
  items={[
    { id: 'overview', label: 'Overview', content: <p>Overview content</p> },
    { id: 'props',    label: 'Props',    content: <p>Props content</p> },
    { id: 'examples', label: 'Examples', badge: 3, content: <p>Examples</p> },
  ]}
/>`}
      >
        <div className="w-full max-w-lg">
          <Tabs variant="line" items={demoItems} />
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Pill variant"
        description="Rounded pill tabs on a gray background — common for filter-style navigation."
        previewBg="white"
      >
        <div className="w-full max-w-lg">
          <Tabs variant="pill" items={demoItems} />
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Soft variant"
        description="Filled background on active tab — the sidebar-style navigation pattern."
        previewBg="white"
      >
        <div className="w-full max-w-lg">
          <Tabs variant="soft" items={demoItems} />
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Enclosed variant"
        description="Box-style tabs with a border — common for settings panels."
        previewBg="white"
      >
        <div className="w-full max-w-lg">
          <Tabs variant="enclosed" items={demoItems} />
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="With Icons"
        description="Icon prop adds a lucide-react icon before the tab label."
        previewBg="white"
      >
        <div className="w-full max-w-lg">
          <Tabs variant="soft" items={iconItems} />
        </div>
      </ShowcaseSection>
    </div>
  );
}