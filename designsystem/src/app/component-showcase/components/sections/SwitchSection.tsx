'use client';

import React, { useState } from 'react';
import Switch from '@/components/Switch';
import ShowcaseSection from '../ShowcaseSection';
import SectionHeader from '../SectionHeader';
import VariantControls, { useVariantControls } from '../VariantControls';

export default function SwitchSection() {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    autoSave: true,
    analytics: false,
    beta: false,
  });
  const [playChecked, setPlayChecked] = useState(true);
  const [ctrl, setCtrl] = useVariantControls({ size: 'md' });

  const toggle = (key: keyof typeof settings) =>
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <div>
      <SectionHeader
        title="Switch"
        description="Toggle boolean state with a smooth animated track. Supports labels, descriptions, three sizes, and label placement."
        importPath={`import Switch from "@shubh/ui/Switch"
;`}
      />

      {/* ── Interactive Playground ── */}
      <ShowcaseSection
        title="Interactive Playground"
        description="Use the live controls to switch size and disabled state in real time."
        previewBg="white"
        props={[
          { name: 'label', type: 'string', description: 'Label text beside the switch' },
          {
            name: 'description',
            type: 'string',
            description: 'Secondary description text below label',
          },
          {
            name: 'size',
            type: "'sm' | 'md' | 'lg'",
            default: "'md'",
            description: 'Track and thumb size',
          },
          {
            name: 'labelPlacement',
            type: "'left' | 'right'",
            default: "'right'",
            description: 'Label position relative to track',
          },
          { name: 'disabled', type: 'boolean', description: 'Prevents interaction' },
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
              showDisabled: true,
            }}
            state={ctrl}
            onChange={setCtrl}
          />
          <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg border border-[#d7d7d7]">
            <Switch
              label="Enable feature"
              description="Toggle this switch to see live updates."
              size={(ctrl.size as any) || 'md'}
              disabled={ctrl.disabled}
              checked={ctrl.disabled ? true : playChecked}
              onChange={() => !ctrl.disabled && setPlayChecked((v) => !v)}
            />
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Basic"
        description="Simple on/off toggle."
        previewBg="white"
        code={`<Switch label="Enable notifications" checked={enabled} onChange={e => setEnabled(e.target.checked)} />`}
      >
        <div className="space-y-4 w-full max-w-xs">
          <Switch
            label="Enable notifications"
            checked={settings.notifications}
            onChange={() => toggle('notifications')}
          />
          <Switch
            label="Dark mode"
            description="Switch to a darker color scheme."
            checked={settings.darkMode}
            onChange={() => toggle('darkMode')}
          />
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Sizes"
        description="Three sizes — sm, md (default), lg."
        previewBg="white"
      >
        <div className="space-y-4">
          <Switch size="sm" label="Small switch" checked readOnly />
          <Switch size="md" label="Medium switch (default)" checked readOnly />
          <Switch size="lg" label="Large switch" checked readOnly />
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Settings Panel Demo"
        description="Live interactive settings panel using multiple switches."
        previewBg="white"
      >
        <div className="w-full max-w-sm border border-[#d7d7d7] rounded-lg overflow-hidden">
          <div className="px-4 py-3 bg-gray-50 border-b border-[#d7d7d7]">
            <p className="text-sm font-semibold text-[#1e1e1e]">Workspace settings</p>
          </div>
          <div className="divide-y divide-[#d7d7d7]">
            {[
              {
                key: 'notifications',
                label: 'Push notifications',
                desc: 'Receive alerts in real-time',
              },
              {
                key: 'autoSave',
                label: 'Auto-save drafts',
                desc: 'Save work automatically every 30s',
              },
              { key: 'analytics', label: 'Usage analytics', desc: 'Help improve the product' },
              { key: 'beta', label: 'Beta features', desc: 'Access experimental features early' },
            ].map(({ key, label, desc }) => (
              <div key={key} className="flex items-center justify-between px-4 py-3">
                <div>
                  <p className="text-sm font-medium text-[#1e1e1e]">{label}</p>
                  <p className="text-xs text-[#808080]">{desc}</p>
                </div>
                <Switch
                  checked={settings[key as keyof typeof settings]}
                  onChange={() => toggle(key as keyof typeof settings)}
                  aria-label={label}
                />
              </div>
            ))}
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Disabled"
        description="Disabled state for read-only settings."
        previewBg="white"
      >
        <div className="space-y-3">
          <Switch label="Disabled off" disabled readOnly />
          <Switch label="Disabled on" disabled checked readOnly />
        </div>
      </ShowcaseSection>
    </div>
  );
}
