'use client';

import React from 'react';
import Tooltip from '@/components/Tooltip';
import Button from '@/components/Button';
import Badge from '@/components/Badge';
import ShowcaseSection from '../ShowcaseSection';
import SectionHeader from '../SectionHeader';
import VariantControls, { useVariantControls } from '../VariantControls';
import {
  QuestionMarkCircleIcon as HelpCircle,
  DocumentDuplicateIcon as Copy,
  TrashIcon as Trash2,
  PencilIcon as Edit,
  Cog6ToothIcon as Settings,
} from '@heroicons/react/24/outline';

export default function TooltipSection() {
  const [ctrl, setCtrl] = useVariantControls({ extras: { placement: 'top' } });

  return (
    <div>
      <SectionHeader
        title="Tooltip"
        description="Contextual hover label with configurable placement, delay, and custom content. Keyboard accessible — triggers on focus as well as hover."
        importPath={`import Tooltip from "@shubh/ui/Tooltip"
;`}
      />

      {/* ── Interactive Playground ── */}
      <ShowcaseSection
        title="Interactive Playground"
        description="Use the live controls to switch tooltip placement in real time. Hover the button to see the tooltip."
        props={[
          { name: 'content', type: 'ReactNode', required: true, description: 'Tooltip content' },
          {
            name: 'placement',
            type: "'top' | 'bottom' | 'left' | 'right'",
            default: "'top'",
            description: 'Position relative to trigger',
          },
          {
            name: 'delay',
            type: 'number',
            default: '200',
            description: 'Delay before showing (ms)',
          },
          { name: 'disabled', type: 'boolean', description: 'Prevents tooltip from showing' },
          {
            name: 'maxWidth',
            type: 'string',
            default: "'200px'",
            description: 'Max width of tooltip box',
          },
        ]}
      >
        <div className="w-full space-y-4">
          <VariantControls
            config={{
              showDisabled: true,
              extras: [
                {
                  key: 'placement',
                  label: 'Placement',
                  options: [
                    { value: 'top', label: 'Top' },
                    { value: 'bottom', label: 'Bottom' },
                    { value: 'left', label: 'Left' },
                    { value: 'right', label: 'Right' },
                  ],
                },
              ],
            }}
            state={ctrl}
            onChange={setCtrl}
          />
          <div className="flex items-center justify-center p-12 bg-gray-50 rounded-lg border border-[#d7d7d7]">
            <Tooltip
              content="This is a live tooltip preview"
              placement={(ctrl.extras.placement as any) || 'top'}
              disabled={ctrl.disabled}
            >
              <Button variant="outline">Hover me</Button>
            </Tooltip>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Placements"
        description="Four placement options — top, bottom, left, right."
        code={`<Tooltip content="Top tooltip" placement="top">
  <Button variant="outline">Top</Button>
</Tooltip>`}
      >
        <Tooltip content="Shown above trigger" placement="top">
          <Button variant="outline" size="sm">
            Top
          </Button>
        </Tooltip>
        <Tooltip content="Shown below trigger" placement="bottom">
          <Button variant="outline" size="sm">
            Bottom
          </Button>
        </Tooltip>
        <Tooltip content="Shown to the left" placement="left">
          <Button variant="outline" size="sm">
            Left
          </Button>
        </Tooltip>
        <Tooltip content="Shown to the right" placement="right">
          <Button variant="outline" size="sm">
            Right
          </Button>
        </Tooltip>
      </ShowcaseSection>

      <ShowcaseSection
        title="On Icon Buttons"
        description="Essential for icon-only buttons — provides accessible labels."
      >
        <Tooltip content="Copy to clipboard" placement="bottom">
          <Button size="icon" variant="outline" aria-label="Copy">
            <Copy className="h-4 w-4" />
          </Button>
        </Tooltip>
        <Tooltip content="Edit component" placement="bottom">
          <Button size="icon" variant="ghost" aria-label="Edit">
            <Edit className="h-4 w-4" />
          </Button>
        </Tooltip>
        <Tooltip content="Component settings" placement="bottom">
          <Button size="icon" variant="ghost" aria-label="Settings">
            <Settings className="h-4 w-4" />
          </Button>
        </Tooltip>
        <Tooltip content="Delete component — this cannot be undone" placement="bottom">
          <Button
            size="icon"
            variant="ghost"
            aria-label="Delete"
            className="text-red-500 hover:text-red-700 hover:bg-red-50"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </Tooltip>
      </ShowcaseSection>

      <ShowcaseSection
        title="On Badges and Inline Text"
        description="Tooltips work on any focusable or hoverable element."
      >
        <Tooltip content="Released 14 March 2026 — includes breaking changes" placement="top">
          <Badge variant="warning" dot>
            v2.0.0-beta
          </Badge>
        </Tooltip>
        <Tooltip content="Component is fully accessible per WCAG 2.1 AA" placement="top">
          <Badge variant="success" dot>
            WCAG AA
          </Badge>
        </Tooltip>
        <Tooltip content="Hover me to see tooltip on an info icon" placement="right">
          <span className="inline-flex items-center gap-1 text-sm text-[#808080] cursor-help">
            <HelpCircle className="h-4 w-4" />
            What is CVA?
          </span>
        </Tooltip>
      </ShowcaseSection>

      <ShowcaseSection
        title="Disabled Tooltip"
        description="disabled prop prevents the tooltip from showing — useful for conditional hints."
      >
        <Tooltip content="This tooltip is disabled" disabled>
          <Button variant="outline" size="sm">
            Hover me (no tooltip)
          </Button>
        </Tooltip>
        <Tooltip content="This tooltip is active" placement="top">
          <Button variant="outline" size="sm">
            Hover me (tooltip shows)
          </Button>
        </Tooltip>
      </ShowcaseSection>
    </div>
  );
}
