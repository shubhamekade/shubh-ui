'use client';

import React from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import ShowcaseSection from '../ShowcaseSection';
import SectionHeader from '../SectionHeader';
import VariantControls, { useVariantControls } from '../VariantControls';
import { SlashIcon as Slash } from '@heroicons/react/24/outline';

export default function BreadcrumbSection() {
  const [ctrl, setCtrl] = useVariantControls({ size: 'md' });

  return (
    <div>
      <SectionHeader
        title="Breadcrumb"
        description="Hierarchical page location indicator with custom separators, home icon, ellipsis compression for deep paths, and three size variants."
        importPath={`import Breadcrumb from "@shubh/ui/Breadcrumb"
;`}
      />

      {/* ── Interactive Playground ── */}
      <ShowcaseSection
        title="Interactive Playground"
        description="Use the live controls to switch size in real time."
        previewBg="white"
        props={[
          { name: 'items', type: 'BreadcrumbItem[]', required: true, description: 'Array of breadcrumb items with label and optional href' },
          { name: 'separator', type: 'ReactNode', description: 'Custom separator element' },
          { name: 'showHome', type: 'boolean', description: 'Prepend a Home icon item' },
          { name: 'maxItems', type: 'number', description: 'Collapse middle items with ellipsis beyond this count' },
          { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Font size variant' },
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
              showDisabled: false,
            }}
            state={ctrl}
            onChange={setCtrl}
          />
          <div className="flex items-center p-6 bg-gray-50 rounded-lg border border-[#d7d7d7]">
            <Breadcrumb
              showHome
              size={ctrl.size as any || 'md'}
              items={[
                { label: 'Components', href: '/components' },
                { label: 'Form', href: '/components/form' },
                { label: 'Button' },
              ]}
            />
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Basic"
        description="Standard breadcrumb trail with links."
        previewBg="white"
        code={`<Breadcrumb
  items={[
    { label: 'DesignSystem', href: '/' },
    { label: 'Components', href: '/components' },
    { label: 'Form', href: '/components/form' },
    { label: 'Button' },
  ]}
/>`}
      >
        <div className="space-y-4 w-full">
          <Breadcrumb
            items={[
              { label: 'DesignSystem', href: '/' },
              { label: 'Components', href: '/components' },
              { label: 'Form', href: '/components/form' },
              { label: 'Button' },
            ]}
          />
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="With Home Icon"
        description="showHome prepends a Home icon as the first item."
        previewBg="white"
      >
        <Breadcrumb
          showHome
          items={[
            { label: 'Components', href: '/components' },
            { label: 'Navigation', href: '/components/navigation' },
            { label: 'Breadcrumb' },
          ]}
        />
      </ShowcaseSection>

      <ShowcaseSection
        title="Custom Separator"
        description="Any ReactNode can be used as the separator."
        previewBg="white"
      >
        <div className="space-y-4">
          <Breadcrumb
            separator={<Slash className="h-3 w-3 text-[#d7d7d7]" />}
            items={[
              { label: 'DesignSystem', href: '/' },
              { label: 'Components', href: '/components' },
              { label: 'Button' },
            ]}
          />
          <Breadcrumb
            separator={<span className="text-[#d7d7d7] text-xs">›</span>}
            items={[
              { label: 'DesignSystem', href: '/' },
              { label: 'Components', href: '/components' },
              { label: 'Button' },
            ]}
          />
          <Breadcrumb
            separator={<span className="text-[#d7d7d7] text-xs font-light">·</span>}
            items={[
              { label: 'DesignSystem', href: '/' },
              { label: 'Components', href: '/components' },
              { label: 'Button' },
            ]}
          />
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Ellipsis Compression"
        description="maxItems collapses middle items with an ellipsis for deep navigation paths."
        previewBg="white"
      >
        <Breadcrumb
          maxItems={4}
          items={[
            { label: 'DesignSystem', href: '/' },
            { label: 'Components', href: '/components' },
            { label: 'Form', href: '/components/form' },
            { label: 'Input', href: '/components/form/input' },
            { label: 'Variants', href: '/components/form/input/variants' },
            { label: 'Error state' },
          ]}
        />
      </ShowcaseSection>

      <ShowcaseSection
        title="Sizes"
        description="Three font size variants."
        previewBg="white"
      >
        <div className="space-y-3">
          {(['sm', 'md', 'lg'] as const).map(s => (
            <Breadcrumb
              key={s}
              size={s}
              items={[
                { label: 'Components', href: '/components' },
                { label: 'Form', href: '/components/form' },
                { label: 'Button' },
              ]}
            />
          ))}
        </div>
      </ShowcaseSection>
    </div>
  );
}