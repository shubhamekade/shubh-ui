'use client';

import React from 'react';
import Avatar from '@/components/Avatar';
import ShowcaseSection from '../ShowcaseSection';
import SectionHeader from '../SectionHeader';
import VariantControls, { useVariantControls } from '../VariantControls';

export default function AvatarSection() {
  const [ctrl, setCtrl] = useVariantControls({
    size: 'md',
    variant: 'default',
    extras: { shape: 'circle', status: 'none' },
  });

  return (
    <div>
      <SectionHeader
        title="Avatar"
        description="User identity visuals supporting image, initials, and icon fallbacks. Six sizes, two shapes, four status indicators."
        importPath={`import Avatar from "@shubh/ui/Avatar"
;`}
      />

      {/* ── Interactive Playground ── */}
      <ShowcaseSection
        title="Interactive Playground"
        description="Use the live controls to switch size, shape, status, and disabled state in real time."
        props={[
          { name: 'src', type: 'string', description: 'Image URL — renders an img element' },
          {
            name: 'alt',
            type: 'string',
            default: "'Avatar'",
            description: 'Accessible alt text for image',
          },
          { name: 'initials', type: 'string', description: 'Fallback initials when no src' },
          {
            name: 'size',
            type: "'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",
            default: "'md'",
            description: 'Dimensions of the avatar',
          },
          {
            name: 'shape',
            type: "'circle' | 'square'",
            default: "'circle'",
            description: 'Border radius shape',
          },
          {
            name: 'status',
            type: "'online' | 'offline' | 'busy' | 'away'",
            description: 'Status dot indicator',
          },
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
                { value: '2xl', label: '2XL' },
              ],
              variants: [
                { value: 'default', label: 'Default' },
                { value: 'primary', label: 'Primary' },
                { value: 'navy', label: 'Navy' },
              ],
              showDisabled: false,
              extras: [
                {
                  key: 'shape',
                  label: 'Shape',
                  options: [
                    { value: 'circle', label: 'Circle' },
                    { value: 'square', label: 'Square' },
                  ],
                },
                {
                  key: 'status',
                  label: 'Status',
                  options: [
                    { value: 'none', label: 'None' },
                    { value: 'online', label: 'Online' },
                    { value: 'offline', label: 'Offline' },
                    { value: 'busy', label: 'Busy' },
                    { value: 'away', label: 'Away' },
                  ],
                },
              ],
            }}
            state={ctrl}
            onChange={setCtrl}
          />
          <div className="flex items-center justify-center gap-4 p-6 bg-gray-50 rounded-lg border border-[#d7d7d7]">
            <Avatar
              initials="MK"
              size={(ctrl.size as any) || 'md'}
              variant={(ctrl.variant as any) || 'default'}
              shape={(ctrl.extras.shape as any) || 'circle'}
              status={ctrl.extras.status !== 'none' ? (ctrl.extras.status as any) : undefined}
            />
            <Avatar
              initials="RS"
              size={(ctrl.size as any) || 'md'}
              variant={(ctrl.variant as any) || 'default'}
              shape={(ctrl.extras.shape as any) || 'circle'}
              status={ctrl.extras.status !== 'none' ? (ctrl.extras.status as any) : undefined}
            />
            <Avatar
              initials="JL"
              size={(ctrl.size as any) || 'md'}
              variant={(ctrl.variant as any) || 'default'}
              shape={(ctrl.extras.shape as any) || 'circle'}
              status={ctrl.extras.status !== 'none' ? (ctrl.extras.status as any) : undefined}
            />
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="With Initials"
        description="Renders initials when no src is provided. Background uses the brand sky-light palette."
        code={`<Avatar initials="MK" />
<Avatar initials="RS" />
<Avatar initials="JL" variant="primary" />
<Avatar initials="AT" variant="navy" />`}
      >
        <Avatar initials="MK" />
        <Avatar initials="RS" />
        <Avatar initials="JL" variant="primary" />
        <Avatar initials="AT" variant="navy" />
        <Avatar initials="PW" />
        <Avatar initials="EL" />
      </ShowcaseSection>
      <ShowcaseSection title="Sizes" description="Six size options from xs (24px) to 2xl (80px).">
        <Avatar initials="DS" size="xs" />
        <Avatar initials="DS" size="sm" />
        <Avatar initials="DS" size="md" />
        <Avatar initials="DS" size="lg" />
        <Avatar initials="DS" size="xl" />
        <Avatar initials="DS" size="2xl" />
      </ShowcaseSection>
      <ShowcaseSection title="Shapes" description="Circle (default) and square variants.">
        <Avatar initials="MK" shape="circle" size="lg" />
        <Avatar initials="MK" shape="square" size="lg" />
        <Avatar initials="RS" shape="circle" size="lg" variant="primary" />
        <Avatar initials="RS" shape="square" size="lg" variant="navy" />
      </ShowcaseSection>
      <ShowcaseSection
        title="Status Indicators"
        description="Status dot overlays for presence indication."
      >
        <Avatar initials="MK" status="online" size="lg" />
        <Avatar initials="RS" status="offline" size="lg" variant="primary" />
        <Avatar initials="JL" status="busy" size="lg" variant="navy" />
        <Avatar initials="AT" status="away" size="lg" />
      </ShowcaseSection>
      <ShowcaseSection
        title="Avatar Group"
        description="Overlapping avatar stack — common for team member displays."
        previewBg="white"
      >
        <div className="flex items-center">
          {['MK', 'RS', 'JL', 'AT', 'PW']?.map((init, i) => (
            <div
              key={init}
              className="ring-2 ring-white rounded-full"
              style={{ marginLeft: i === 0 ? 0 : '-8px', zIndex: 5 - i }}
            >
              <Avatar initials={init} size="sm" />
            </div>
          ))}
          <div className="ring-2 ring-white rounded-full" style={{ marginLeft: '-8px', zIndex: 0 }}>
            <Avatar initials="+3" size="sm" variant="navy" />
          </div>
        </div>
      </ShowcaseSection>
    </div>
  );
}
