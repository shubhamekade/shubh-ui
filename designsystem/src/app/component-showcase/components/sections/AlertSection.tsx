'use client';

import React, { useState } from 'react';
import Alert from '@/components/Alert';
import Button from '@/components/Button';
import ShowcaseSection from '../ShowcaseSection';
import SectionHeader from '../SectionHeader';
import VariantControls, { useVariantControls } from '../VariantControls';

export default function AlertSection() {
  const [dismissed, setDismissed] = useState<string[]>([]);
  const [ctrl, setCtrl] = useVariantControls({ variant: 'info' });
  const dismiss = (id: string) => setDismissed((prev) => [...prev, id]);

  const alertMessages: Record<string, { title: string; body: string }> = {
    info: {
      title: 'Update available',
      body: 'Version 2.1.0 is now available with 4 new components and 12 bug fixes.',
    },
    success: {
      title: 'Component published',
      body: 'Button v1.4.2 has been published to npm. 847 packages updated automatically.',
    },
    warning: {
      title: 'Breaking change',
      body: 'The size prop API has changed in v2.0. Review the migration guide before upgrading.',
    },
    destructive: {
      title: 'Build failed',
      body: '3 TypeScript errors detected in Button.tsx. Fix required before publishing.',
    },
    navy: {
      title: 'Design system v2.0',
      body: '40+ components, improved TypeScript support, and a brand new token system.',
    },
    neutral: {
      title: 'Maintenance window',
      body: 'Scheduled maintenance on 18 March 2026, 02:00–04:00 UTC.',
    },
  };

  const current = alertMessages[ctrl.variant] ?? alertMessages['info'];

  return (
    <div>
      <SectionHeader
        title="Alert"
        description="Inline status messages for informational, success, warning, and error states. Supports titles, dismiss buttons, and action links."
        importPath={`import Alert from "@shubh/ui/Alert"
;`}
      />

      {/* ── Interactive Playground ── */}
      <ShowcaseSection
        title="Interactive Playground"
        description="Use the live controls to switch variant in real time."
        previewBg="white"
        props={[
          {
            name: 'variant',
            type: "'info' | 'success' | 'warning' | 'destructive' | 'navy' | 'neutral'",
            default: "'info'",
            description: 'Semantic color variant',
          },
          { name: 'title', type: 'string', description: 'Bold heading above the message' },
          { name: 'dismissible', type: 'boolean', description: 'Show × dismiss button' },
          { name: 'onDismiss', type: '() => void', description: 'Called when × is clicked' },
          { name: 'icon', type: 'ReactNode', description: 'Custom icon — overrides the default' },
          { name: 'action', type: 'ReactNode', description: 'Action element below message text' },
        ]}
      >
        <div className="w-full space-y-4">
          <VariantControls
            config={{
              variants: [
                { value: 'info', label: 'Info' },
                { value: 'success', label: 'Success' },
                { value: 'warning', label: 'Warning' },
                { value: 'destructive', label: 'Error' },
                { value: 'navy', label: 'Navy' },
                { value: 'neutral', label: 'Neutral' },
              ],
              showDisabled: false,
            }}
            state={ctrl}
            onChange={setCtrl}
          />
          <div className="p-6 bg-gray-50 rounded-lg border border-[#d7d7d7]">
            <Alert variant={(ctrl.variant as any) || 'info'} title={current.title}>
              {current.body}
            </Alert>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Variants"
        description="Six semantic variants for different message contexts."
        previewBg="white"
        code={`<Alert variant="info" title="Update available">Version 2.1.0 is now available.</Alert>
<Alert variant="success" title="Component published">Button v1.4.2 is live.</Alert>
<Alert variant="warning" title="Breaking change">The size prop API has changed in v2.0.</Alert>
<Alert variant="destructive" title="Build failed">3 TypeScript errors in Button.tsx.</Alert>`}
      >
        <div className="w-full max-w-lg space-y-3">
          <Alert variant="info" title="Update available">
            Version 2.1.0 is now available with 4 new components and 12 bug fixes.
          </Alert>
          <Alert variant="success" title="Component published">
            Button v1.4.2 has been published to npm. 847 packages updated automatically.
          </Alert>
          <Alert variant="warning" title="Breaking change in v2.0">
            The <code className="font-mono text-xs bg-amber-100 px-1 rounded">size</code> prop API
            has changed. Review the migration guide before upgrading.
          </Alert>
          <Alert variant="destructive" title="Build failed">
            3 TypeScript errors detected in Button.tsx. Fix required before publishing.
          </Alert>
          <Alert variant="neutral" title="Maintenance window">
            Scheduled maintenance on 18 March 2026, 02:00–04:00 UTC.
          </Alert>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Dismissible"
        description="dismissible prop adds a × button. onDismiss callback handles removal."
        previewBg="white"
      >
        <div className="w-full max-w-lg space-y-3">
          {!dismissed.includes('d1') && (
            <Alert
              variant="info"
              title="New component available"
              dismissible
              onDismiss={() => dismiss('d1')}
            >
              DatePicker has been added to the library. Check the Form category.
            </Alert>
          )}
          {!dismissed.includes('d2') && (
            <Alert
              variant="warning"
              title="Peer dependency warning"
              dismissible
              onDismiss={() => dismiss('d2')}
            >
              react 19 peer dependency requires updating your project config.
            </Alert>
          )}
          {dismissed.length > 0 && (
            <Button variant="ghost" size="sm" onClick={() => setDismissed([])}>
              Restore dismissed alerts
            </Button>
          )}
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="With Action"
        description="action prop renders an element below the message — typically a link or button."
        previewBg="white"
      >
        <div className="w-full max-w-lg space-y-3">
          <Alert
            variant="warning"
            title="API deprecation notice"
            action={
              <Button size="sm" variant="outline">
                View migration guide
              </Button>
            }
          >
            The <code className="font-mono text-xs bg-amber-100 px-1 rounded">onPress</code> prop
            will be removed in v3.0. Use{' '}
            <code className="font-mono text-xs bg-amber-100 px-1 rounded">onClick</code> instead.
          </Alert>
          <Alert
            variant="navy"
            title="Design system v2.0 is here"
            action={
              <div className="flex gap-2">
                <Button size="sm" variant="secondary">
                  Read changelog
                </Button>
                <Button size="sm" variant="ghost" className="text-white hover:bg-white/10">
                  Dismiss
                </Button>
              </div>
            }
          >
            40+ components, improved TypeScript support, and a brand new token system.
          </Alert>
        </div>
      </ShowcaseSection>
    </div>
  );
}
