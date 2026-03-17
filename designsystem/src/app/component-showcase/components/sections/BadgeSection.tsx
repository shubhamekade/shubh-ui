'use client';

import React from 'react';
import Badge from '@/components/Badge';
import ShowcaseSection from '../ShowcaseSection';
import SectionHeader from '../SectionHeader';
import VariantControls, { useVariantControls } from '../VariantControls';

export default function BadgeSection() {
  const [ctrl, setCtrl] = useVariantControls({ size: 'md', variant: 'primary' });

  return (
    <div>
      <SectionHeader
        title="Badge"
        description="Compact status labels, count indicators, and category tags. Nine semantic variants with dot and removable modes."
        importPath={`import Badge from "@shubh/ui/Badge"
;`}
      />

      {/* ── Interactive Playground ── */}
      <ShowcaseSection
        title="Interactive Playground"
        description="Use the live controls to switch size, variant, and disabled state in real time."
        props={[
          {
            name: 'variant',
            type: "'default' | 'primary' | 'navy' | 'secondary' | 'success' | 'warning' | 'destructive' | 'info' | 'outline' | 'ghost'",
            default: "'default'",
            description: 'Visual color variant',
          },
          {
            name: 'size',
            type: "'sm' | 'md' | 'lg'",
            default: "'md'",
            description: 'Padding and font size',
          },
          { name: 'dot', type: 'boolean', description: 'Show a colored dot before label' },
          { name: 'removable', type: 'boolean', description: 'Show × remove button' },
          { name: 'onRemove', type: '() => void', description: 'Called when × is clicked' },
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
              variants: [
                { value: 'default', label: 'Default' },
                { value: 'primary', label: 'Primary' },
                { value: 'navy', label: 'Navy' },
                { value: 'secondary', label: 'Secondary' },
                { value: 'success', label: 'Success' },
                { value: 'warning', label: 'Warning' },
                { value: 'destructive', label: 'Error' },
                { value: 'info', label: 'Info' },
                { value: 'outline', label: 'Outline' },
              ],
              showDisabled: false,
            }}
            state={ctrl}
            onChange={setCtrl}
          />
          <div className="flex items-center justify-center gap-3 p-6 bg-gray-50 rounded-lg border border-[#d7d7d7] flex-wrap">
            <Badge variant={(ctrl.variant as any) || 'primary'} size={(ctrl.size as any) || 'md'}>
              Badge label
            </Badge>
            <Badge
              variant={(ctrl.variant as any) || 'primary'}
              size={(ctrl.size as any) || 'md'}
              dot
            >
              With dot
            </Badge>
            <Badge
              variant={(ctrl.variant as any) || 'primary'}
              size={(ctrl.size as any) || 'md'}
              removable
            >
              Removable
            </Badge>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Variants"
        description="Nine color variants with semantic meaning."
        code={`<Badge variant="default">Default</Badge>
<Badge variant="primary">Primary</Badge>
<Badge variant="navy">Navy</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="destructive">Error</Badge>
<Badge variant="info">Info</Badge>
<Badge variant="outline">Outline</Badge>`}
      >
        <Badge variant="default">Default</Badge>
        <Badge variant="primary">Primary</Badge>
        <Badge variant="navy">Navy</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="destructive">Error</Badge>
        <Badge variant="info">Info</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="ghost">Ghost</Badge>
      </ShowcaseSection>

      <ShowcaseSection title="Sizes" description="Three size options: sm, md (default), lg.">
        <Badge variant="primary" size="sm">
          Small
        </Badge>
        <Badge variant="primary" size="md">
          Medium
        </Badge>
        <Badge variant="primary" size="lg">
          Large
        </Badge>
      </ShowcaseSection>

      <ShowcaseSection
        title="With Dot Indicator"
        description="Dot prop adds a colored indicator — useful for live status badges."
      >
        <Badge variant="success" dot>
          Online
        </Badge>
        <Badge variant="destructive" dot>
          Offline
        </Badge>
        <Badge variant="warning" dot>
          Degraded
        </Badge>
        <Badge variant="info" dot>
          Syncing
        </Badge>
        <Badge variant="secondary" dot>
          Idle
        </Badge>
      </ShowcaseSection>

      <ShowcaseSection
        title="Removable Tags"
        description="Removable mode adds a × button — ideal for filter tag lists."
      >
        <Badge variant="default" removable>
          Next.js
        </Badge>
        <Badge variant="default" removable>
          TypeScript
        </Badge>
        <Badge variant="default" removable>
          Tailwind CSS
        </Badge>
        <Badge variant="default" removable>
          React
        </Badge>
        <Badge variant="info" removable>
          Accessible
        </Badge>
      </ShowcaseSection>

      <ShowcaseSection
        title="Status Lifecycle Example"
        description="Consistent status badges for component lifecycle states."
        previewBg="white"
      >
        <div className="flex flex-col gap-2 w-full max-w-xs">
          {[
            { status: 'stable', variant: 'success' as const, label: 'Stable — production ready' },
            { status: 'beta', variant: 'warning' as const, label: 'Beta — API may change' },
            {
              status: 'deprecated',
              variant: 'destructive' as const,
              label: 'Deprecated — will be removed',
            },
            { status: 'new', variant: 'info' as const, label: 'New — recently added' },
          ].map(({ status, variant, label }) => (
            <div key={status} className="flex items-center gap-3">
              <Badge variant={variant} dot size="md">
                {status}
              </Badge>
              <span className="text-xs text-[#808080]">{label}</span>
            </div>
          ))}
        </div>
      </ShowcaseSection>
    </div>
  );
}
