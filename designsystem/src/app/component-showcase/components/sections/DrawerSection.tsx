'use client';

import React, { useState } from 'react';
import Drawer from '@/components/Drawer';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Switch from '@/components/Switch';
import ShowcaseSection from '../ShowcaseSection';
import SectionHeader from '../SectionHeader';
import VariantControls, { useVariantControls } from '../VariantControls';
import { Cog6ToothIcon as Settings, FunnelIcon as Filter } from '@heroicons/react/24/outline';

export default function DrawerSection() {
  const [rightOpen,  setRightOpen]  = useState(false);
  const [leftOpen,   setLeftOpen]   = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [playOpen,   setPlayOpen]   = useState(false);
  const [ctrl, setCtrl] = useVariantControls({
    extras: { placement: 'right', size: 'md' },
  });

  return (
    <div>
      <SectionHeader
        title="Drawer"
        description="Side-panel slide-in overlay for settings, filters, and detail views. Supports all four placement directions with smooth animations."
        importPath={`import Drawer from "@shubh/ui/Drawer"
;`}
      />

      {/* ── Interactive Playground ── */}
      <ShowcaseSection
        title="Interactive Playground"
        description="Use the live controls to switch placement and size, then open the drawer."
        previewBg="white"
        props={[
          { name: 'open', type: 'boolean', required: true, description: 'Controls visibility' },
          { name: 'onClose', type: '() => void', required: true, description: 'Called when drawer should close' },
          { name: 'placement', type: "'left' | 'right' | 'top' | 'bottom'", default: "'right'", description: 'Which edge the drawer slides from' },
          { name: 'size', type: "'sm' | 'md' | 'lg' | 'full'", default: "'md'", description: 'Width (horizontal) or height (vertical)' },
          { name: 'title', type: 'string', description: 'Drawer heading' },
          { name: 'footer', type: 'ReactNode', description: 'Sticky footer content' },
        ]}
      >
        <div className="w-full space-y-4">
          <VariantControls
            config={{
              showDisabled: false,
              extras: [
                {
                  key: 'placement',
                  label: 'Placement',
                  options: [
                    { value: 'right', label: 'Right' },
                    { value: 'left', label: 'Left' },
                    { value: 'top', label: 'Top' },
                    { value: 'bottom', label: 'Bottom' },
                  ],
                },
                {
                  key: 'size',
                  label: 'Size',
                  options: [
                    { value: 'sm', label: 'SM' },
                    { value: 'md', label: 'MD' },
                    { value: 'lg', label: 'LG' },
                  ],
                },
              ],
            }}
            state={ctrl}
            onChange={setCtrl}
          />
          <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg border border-[#d7d7d7]">
            <Button onClick={() => setPlayOpen(true)}>
              Open drawer ({ctrl.extras.placement})
            </Button>
          </div>
          <Drawer
            open={playOpen}
            onClose={() => setPlayOpen(false)}
            title="Drawer preview"
            description={`Placement: ${ctrl.extras.placement} · Size: ${ctrl.extras.size}`}
            placement={ctrl.extras.placement as any || 'right'}
            size={ctrl.extras.size as any || 'md'}
            footer={
              <Button onClick={() => setPlayOpen(false)}>Close</Button>
            }
          >
            <p className="text-sm text-[#808080] leading-relaxed">
              This drawer is rendered with <strong>placement="{ctrl.extras.placement}"</strong> and <strong>size="{ctrl.extras.size}"</strong>. Change the controls above and reopen to see the difference.
            </p>
          </Drawer>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Right Drawer (default)"
        description="Standard right-side panel — common for detail views and settings."
        previewBg="white"
        code={`<Drawer
  open={open}
  onClose={() => setOpen(false)}
  title="Component settings"
  placement="right"
>
  {/* content */}
</Drawer>`}
      >
        <Button leftIcon={<Settings className="h-4 w-4" />} onClick={() => setRightOpen(true)}>
          Open settings
        </Button>
        <Drawer
          open={rightOpen}
          onClose={() => setRightOpen(false)}
          title="Component settings"
          description="Configure display and behavior options."
          footer={
            <>
              <Button variant="outline" onClick={() => setRightOpen(false)}>Discard</Button>
              <Button onClick={() => setRightOpen(false)}>Save settings</Button>
            </>
          }
        >
          <div className="space-y-4">
            <Input label="Display name" defaultValue="Button" />
            <Input label="Export path" defaultValue="@shubh/ui/Button" />
            <div className="space-y-3 pt-2">
              <p className="text-sm font-medium text-[#1e1e1e]">Options</p>
              <Switch label="Auto-generate stories" description="Create Storybook stories automatically" defaultChecked />
              <Switch label="Include in bundle" description="Include in the main package export" defaultChecked />
              <Switch label="Mark as deprecated" description="Warn consumers this component is deprecated" />
            </div>
          </div>
        </Drawer>
      </ShowcaseSection>
      <ShowcaseSection
        title="Left Drawer"
        description="Left-side panel — useful for navigation or secondary menus."
        previewBg="white"
      >
        <Button variant="secondary" onClick={() => setLeftOpen(true)}>Open left drawer</Button>
        <Drawer
          open={leftOpen}
          onClose={() => setLeftOpen(false)}
          title="Navigation"
          placement="left"
          size="sm"
        >
          <nav className="space-y-1">
            {['Components', 'Tokens', 'Patterns', 'Changelog', 'Contributing']?.map(item => (
              <button
                key={item}
                type="button"
                onClick={() => setLeftOpen(false)}
                className="w-full text-left px-3 py-2 text-sm text-[#1e1e1e] rounded-md hover:bg-[#dae8ff] hover:text-[#000080] transition-colors"
              >
                {item}
              </button>
            ))}
          </nav>
        </Drawer>
      </ShowcaseSection>
      <ShowcaseSection
        title="Filter Drawer"
        description="Complex filter panel — a common use case for data tables."
        previewBg="white"
      >
        <Button variant="outline" leftIcon={<Filter className="h-4 w-4" />} onClick={() => setFilterOpen(true)}>
          Filters
        </Button>
        <Drawer
          open={filterOpen}
          onClose={() => setFilterOpen(false)}
          title="Filter components"
          description="Narrow down the component list."
          footer={
            <>
              <Button variant="ghost" onClick={() => setFilterOpen(false)}>Clear all</Button>
              <Button onClick={() => setFilterOpen(false)}>Apply filters</Button>
            </>
          }
        >
          <div className="space-y-5">
            <div>
              <p className="text-sm font-medium text-[#1e1e1e] mb-2">Category</p>
              <div className="space-y-2">
                {['Form', 'Navigation', 'Overlay', 'Feedback', 'Data Display', 'Utilities']?.map(cat => (
                  <label key={cat} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded" defaultChecked={cat === 'Form'} />
                    <span className="text-sm text-[#1e1e1e]">{cat}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-[#1e1e1e] mb-2">Status</p>
              <div className="space-y-2">
                {['Stable', 'Beta', 'Deprecated']?.map(s => (
                  <label key={s} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded" defaultChecked={s === 'Stable'} />
                    <span className="text-sm text-[#1e1e1e]">{s}</span>
                  </label>
                ))}
              </div>
            </div>
            <Input label="Search by name" placeholder="e.g. Button, Input…" leftElement={<span className="text-xs">🔍</span>} />
          </div>
        </Drawer>
      </ShowcaseSection>
    </div>
  );
}