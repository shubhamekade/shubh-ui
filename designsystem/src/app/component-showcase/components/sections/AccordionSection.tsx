'use client';

import React from 'react';
import Accordion from '@/components/Accordion';
import Badge from '@/components/Badge';
import ShowcaseSection from '../ShowcaseSection';
import SectionHeader from '../SectionHeader';
import VariantControls, { useVariantControls } from '../VariantControls';
import { ArchiveBoxIcon as Package } from '@heroicons/react/24/outline';

const faqItems = [
  {
    id: 'q1',
    title: 'How do I install the component library?',
    content:
      'Run npm install @shubh/ui in your project. All components are tree-shakeable — only the components you import will be included in your bundle.',
  },
  {
    id: 'q2',
    title: 'Can I use custom Tailwind classes alongside the component props?',
    content:
      'Yes. Every component accepts a className prop that is merged using tailwind-merge, so your custom classes safely override defaults without conflicts.',
  },
  {
    id: 'q3',
    title: 'Are all components accessible?',
    content:
      'Yes. All interactive components implement ARIA roles, keyboard navigation, focus management, and screen reader labels per WCAG 2.1 AA guidelines.',
  },
  {
    id: 'q4',
    title: 'How are variants managed?',
    content:
      'Variants use class-variance-authority (CVA). Each component exports a variants object you can import to compose custom variant logic.',
  },
  {
    id: 'q5',
    title: 'Is dark mode supported?',
    content:
      'Dark mode support is on the roadmap for v2.0. Currently all components are optimized for the light theme with the Navy brand palette.',
    icon: (
      <Badge variant="warning" size="sm">
        Planned
      </Badge>
    ),
  },
];

const multipleItems = [
  {
    id: 'layout',
    title: 'Layout components',
    icon: <Package className="h-4 w-4 text-[#000080]" />,
    content: 'Container, Grid, Stack, Divider — structural layout primitives.',
  },
  {
    id: 'form',
    title: 'Form components',
    icon: <Package className="h-4 w-4 text-green-600" />,
    content:
      'Button, Input, Textarea, Select, Checkbox, Radio, Switch, Label, FormField, FormError.',
  },
  {
    id: 'feedback',
    title: 'Feedback components',
    icon: <Package className="h-4 w-4 text-amber-500" />,
    content: 'Alert, Toast, Progress, Spinner, Skeleton — state and notification indicators.',
  },
];

export default function AccordionSection() {
  const [ctrl, setCtrl] = useVariantControls({ variant: 'default' });

  return (
    <div>
      <SectionHeader
        title="Accordion"
        description="Collapsible content sections with animated height transitions. Supports single and multiple open modes, icons, badges, four variants, and disabled items."
        importPath={`import Accordion from "@shubh/ui/Accordion"
;`}
      />

      {/* ── Interactive Playground ── */}
      <ShowcaseSection
        title="Interactive Playground"
        description="Use the live controls to switch accordion variant in real time."
        previewBg="white"
        props={[
          {
            name: 'items',
            type: 'AccordionItem[]',
            required: true,
            description: 'Array of accordion items',
          },
          { name: 'defaultOpen', type: 'string[]', description: 'IDs of initially open items' },
          {
            name: 'multiple',
            type: 'boolean',
            default: 'false',
            description: 'Allow multiple items open simultaneously',
          },
          {
            name: 'variant',
            type: "'default' | 'bordered' | 'flush' | 'filled'",
            default: "'default'",
            description: 'Visual style variant',
          },
        ]}
      >
        <div className="w-full space-y-4">
          <VariantControls
            config={{
              variants: [
                { value: 'default', label: 'Default' },
                { value: 'bordered', label: 'Bordered' },
                { value: 'flush', label: 'Flush' },
                { value: 'filled', label: 'Filled' },
              ],
              showDisabled: false,
            }}
            state={ctrl}
            onChange={setCtrl}
          />
          <div className="p-6 bg-gray-50 rounded-lg border border-[#d7d7d7]">
            <div className="w-full max-w-lg">
              <Accordion
                items={faqItems.slice(0, 3)}
                variant={(ctrl.variant as any) || 'default'}
                defaultOpen={['q1']}
                key={ctrl.variant}
              />
            </div>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Default (single open)"
        description="Only one item can be open at a time."
        previewBg="white"
        code={`<Accordion
  items={faqItems}
  defaultOpen={['q1']}
/>`}
      >
        <div className="w-full max-w-lg">
          <Accordion items={faqItems} defaultOpen={['q1']} />
        </div>
      </ShowcaseSection>
      <ShowcaseSection
        title="Multiple open"
        description="multiple: true allows several items to be open simultaneously."
        previewBg="white"
      >
        <div className="w-full max-w-lg">
          <Accordion items={multipleItems} multiple defaultOpen={['layout', 'form']} />
        </div>
      </ShowcaseSection>
      <ShowcaseSection
        title="Bordered variant"
        description="Contained in a border with dividers between items."
        previewBg="white"
      >
        <div className="w-full max-w-lg">
          <Accordion items={faqItems?.slice(0, 3)} variant="bordered" defaultOpen={['q1']} />
        </div>
      </ShowcaseSection>
      <ShowcaseSection
        title="Filled variant"
        description="Each item is an individual card with gray background."
        previewBg="dots"
      >
        <div className="w-full max-w-lg">
          <Accordion items={faqItems?.slice(0, 3)} variant="filled" />
        </div>
      </ShowcaseSection>
    </div>
  );
}
