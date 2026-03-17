'use client';

import React, { useState } from 'react';
import {
  PlusIcon as Plus,
  ArrowDownTrayIcon as Download,
  TrashIcon as Trash2,
  ArrowRightIcon as ArrowRight,
  EnvelopeIcon as Mail,
  Cog6ToothIcon as Settings,
} from '@heroicons/react/24/outline';
import Button from '@/components/Button';
import ShowcaseSection from '../ShowcaseSection';
import SectionHeader from '../SectionHeader';
import VariantControls, { useVariantControls } from '../VariantControls';

export default function ButtonSection() {
  const [loading, setLoading] = useState(false);
  const [ctrl, setCtrl] = useVariantControls({ size: 'md', variant: 'primary' });

  const simulateLoad = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div>
      <SectionHeader
        title="Button"
        description="Triggers actions and events. Supports 9 visual variants, 6 size options, loading states, icon slots, and full keyboard/ARIA accessibility."
        importPath={`import Button from "@shubh/ui/Button"
;`}
      />

      {/* ── Interactive Playground ── */}
      <ShowcaseSection
        title="Interactive Playground"
        description="Use the live controls below to switch size, variant, and disabled state in real time."
        previewBg="white"
        props={[
          {
            name: 'variant',
            type: "'primary' | 'secondary' | 'ghost' | 'outline' | 'destructive' | 'navy' | 'success' | 'warning' | 'link'",
            default: "'primary'",
            description: 'Visual style variant',
          },
          {
            name: 'size',
            type: "'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'icon' | 'icon-sm' | 'icon-lg'",
            default: "'md'",
            description: 'Size of the button',
          },
          {
            name: 'loading',
            type: 'boolean',
            default: 'false',
            description: 'Shows spinner and disables interaction',
          },
          {
            name: 'disabled',
            type: 'boolean',
            default: 'false',
            description: 'Disables the button',
          },
          {
            name: 'fullWidth',
            type: 'boolean',
            default: 'false',
            description: 'Stretches button to fill container',
          },
          { name: 'leftIcon', type: 'ReactNode', description: 'Icon rendered before label' },
          { name: 'rightIcon', type: 'ReactNode', description: 'Icon rendered after label' },
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
                { value: 'secondary', label: 'Secondary' },
                { value: 'ghost', label: 'Ghost' },
                { value: 'outline', label: 'Outline' },
                { value: 'destructive', label: 'Destructive' },
                { value: 'navy', label: 'Navy' },
                { value: 'success', label: 'Success' },
                { value: 'warning', label: 'Warning' },
              ],
              showDisabled: true,
            }}
            state={ctrl}
            onChange={setCtrl}
          />
          <div className="flex items-center justify-center gap-4 p-6 bg-gray-50 rounded-lg border border-[#d7d7d7]">
            <Button
              variant={(ctrl.variant as any) || 'primary'}
              size={(ctrl.size as any) || 'md'}
              disabled={ctrl.disabled}
              leftIcon={<Plus className="h-4 w-4" />}
            >
              Click me
            </Button>
            <Button
              variant={(ctrl.variant as any) || 'primary'}
              size={(ctrl.size as any) || 'md'}
              disabled={ctrl.disabled}
            >
              Label only
            </Button>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Variants"
        description="Nine semantic variants covering primary actions, secondary actions, destructive operations, and utility states."
        code={`<Button variant="primary">Save changes</Button>
<Button variant="secondary">Cancel</Button>
<Button variant="ghost">View details</Button>
<Button variant="outline">Export</Button>
<Button variant="destructive">Delete account</Button>
<Button variant="navy">Deploy</Button>
<Button variant="success">Approve</Button>
<Button variant="warning">Archive</Button>
<Button variant="link">Learn more →</Button>`}
      >
        <Button variant="primary">Save changes</Button>
        <Button variant="secondary">Cancel</Button>
        <Button variant="ghost">View details</Button>
        <Button variant="outline">Export</Button>
        <Button variant="destructive">Delete account</Button>
        <Button variant="navy">Deploy</Button>
        <Button variant="success">Approve</Button>
        <Button variant="warning">Archive</Button>
        <Button variant="link">Learn more →</Button>
      </ShowcaseSection>

      <ShowcaseSection
        title="Sizes"
        description="Six size options from extra-small to extra-large, plus dedicated icon-only sizes."
        code={`<Button size="xs">Extra small</Button>
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra large</Button>`}
      >
        <Button size="xs">Extra small</Button>
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
        <Button size="xl">Extra large</Button>
      </ShowcaseSection>

      <ShowcaseSection
        title="With Icons"
        description="Left and right icon slots accept any ReactNode — typically lucide-react icons."
        code={`<Button leftIcon={<Plus className="h-4 w-4" />}>New component</Button>
<Button rightIcon={<ArrowRight className="h-4 w-4" />} variant="secondary">Continue</Button>
<Button leftIcon={<Download className="h-4 w-4" />} variant="outline">Download</Button>
<Button leftIcon={<Trash2 className="h-4 w-4" />} variant="destructive">Delete</Button>
<Button leftIcon={<Mail className="h-4 w-4" />} variant="ghost">Send email</Button>`}
      >
        <Button leftIcon={<Plus className="h-4 w-4" />}>New component</Button>
        <Button rightIcon={<ArrowRight className="h-4 w-4" />} variant="secondary">
          Continue
        </Button>
        <Button leftIcon={<Download className="h-4 w-4" />} variant="outline">
          Download
        </Button>
        <Button leftIcon={<Trash2 className="h-4 w-4" />} variant="destructive">
          Delete
        </Button>
        <Button leftIcon={<Mail className="h-4 w-4" />} variant="ghost">
          Send email
        </Button>
      </ShowcaseSection>

      <ShowcaseSection
        title="Icon-only Buttons"
        description="Icon-only variants using size='icon'. Always pair with aria-label for accessibility."
        code={`<Button size="icon-sm" variant="ghost" aria-label="Settings"><Settings className="h-4 w-4" /></Button>
<Button size="icon" variant="outline" aria-label="Add item"><Plus className="h-4 w-4" /></Button>
<Button size="icon" aria-label="Download"><Download className="h-4 w-4" /></Button>
<Button size="icon-lg" variant="destructive" aria-label="Delete"><Trash2 className="h-5 w-5" /></Button>`}
      >
        <Button size="icon-sm" variant="ghost" aria-label="Settings">
          <Settings className="h-4 w-4" />
        </Button>
        <Button size="icon" variant="outline" aria-label="Add item">
          <Plus className="h-4 w-4" />
        </Button>
        <Button size="icon" aria-label="Download">
          <Download className="h-4 w-4" />
        </Button>
        <Button size="icon-lg" variant="destructive" aria-label="Delete">
          <Trash2 className="h-5 w-5" />
        </Button>
      </ShowcaseSection>

      <ShowcaseSection
        title="States"
        description="Loading, disabled, and full-width states. Loading locks button width to prevent layout shift."
        code={`<Button loading>Saving changes…</Button>
<Button disabled>Disabled</Button>
<Button variant="secondary" disabled>Unavailable</Button>
<Button fullWidth>Full width button</Button>`}
      >
        <Button loading>Saving changes…</Button>
        <Button disabled>Disabled</Button>
        <Button variant="secondary" disabled>
          Unavailable
        </Button>
        <div className="w-full max-w-xs">
          <Button fullWidth>Full width button</Button>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Interactive Loading Demo"
        description="Click the button to trigger a 2-second loading simulation."
        previewBg="white"
      >
        <Button
          loading={loading}
          onClick={simulateLoad}
          leftIcon={!loading ? <Settings className="h-4 w-4" /> : undefined}
        >
          {loading ? 'Deploying…' : 'Deploy to production'}
        </Button>
      </ShowcaseSection>
    </div>
  );
}
