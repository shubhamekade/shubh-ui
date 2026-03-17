'use client';

import React, { useState } from 'react';
import Skeleton, { SkeletonCard } from '@/components/Skeleton';
import Button from '@/components/Button';
import ShowcaseSection from '../ShowcaseSection';
import SectionHeader from '../SectionHeader';
import VariantControls, { useVariantControls } from '../VariantControls';

export default function SkeletonSection() {
  const [loading, setLoading] = useState(true);
  const [ctrl, setCtrl] = useVariantControls({ variant: 'rect', extras: { animated: 'true' } });

  return (
    <div>
      <SectionHeader
        title="Skeleton"
        description="Content placeholder shimmer for loading states. Prefer skeleton screens over spinners for page-level and content-level loading."
        importPath={`import Skeleton, { SkeletonCard } from "@shubh/ui/Skeleton"
;`}
      />
      {/* ── Interactive Playground ── */}
      <ShowcaseSection
        title="Interactive Playground"
        description="Use the live controls to switch variant and animation in real time."
        previewBg="white"
        props={[
          { name: 'variant', type: "'text' | 'circle' | 'rect' | 'card'", default: "'rect'", description: 'Shape of the skeleton' },
          { name: 'width', type: 'string | number', description: 'Width — number treated as px' },
          { name: 'height', type: 'string | number', description: 'Height — number treated as px' },
          { name: 'lines', type: 'number', default: '1', description: 'Number of text lines (text variant only)' },
          { name: 'animated', type: 'boolean', default: 'true', description: 'Enable pulse animation' },
        ]}
      >
        <div className="w-full space-y-4">
          <VariantControls
            config={{
              variants: [
                { value: 'rect', label: 'Rect' },
                { value: 'circle', label: 'Circle' },
                { value: 'text', label: 'Text' },
              ],
              showDisabled: false,
              extras: [
                {
                  key: 'animated',
                  label: 'Animation',
                  options: [
                    { value: 'true', label: 'Animated' },
                    { value: 'false', label: 'Static' },
                  ],
                },
              ],
            }}
            state={ctrl}
            onChange={setCtrl}
          />
          <div className="flex items-center justify-center p-8 bg-gray-50 rounded-lg border border-[#d7d7d7]">
            {ctrl?.variant === 'circle' && (
              <Skeleton variant="circle" width={64} height={64} animated={ctrl?.extras?.animated === 'true'} />
            )}
            {ctrl?.variant === 'rect' && (
              <Skeleton variant="rect" width={200} height={100} animated={ctrl?.extras?.animated === 'true'} />
            )}
            {ctrl?.variant === 'text' && (
              <div className="w-48">
                <Skeleton variant="text" lines={3} animated={ctrl?.extras?.animated === 'true'} />
              </div>
            )}
          </div>
        </div>
      </ShowcaseSection>
      <ShowcaseSection
        title="Variants"
        description="Rect (default), text, and circle shapes."
        previewBg="white"
        code={`<Skeleton variant="rect" width={200} height={120} />
<Skeleton variant="circle" width={48} height={48} />
<Skeleton variant="text" lines={3} />`}
      >
        <div className="flex items-start gap-6 flex-wrap">
          <div className="space-y-2">
            <p className="text-xs text-[#808080] font-medium">rect</p>
            <Skeleton variant="rect" width={120} height={80} />
          </div>
          <div className="space-y-2">
            <p className="text-xs text-[#808080] font-medium">circle</p>
            <Skeleton variant="circle" width={48} height={48} />
          </div>
          <div className="space-y-2 w-40">
            <p className="text-xs text-[#808080] font-medium">text (3 lines)</p>
            <Skeleton variant="text" lines={3} />
          </div>
        </div>
      </ShowcaseSection>
      <ShowcaseSection
        title="SkeletonCard"
        description="Pre-composed skeleton that matches the Card component structure."
        previewBg="dots"
      >
        <SkeletonCard className="w-64" />
        <SkeletonCard className="w-64" />
      </ShowcaseSection>
      <ShowcaseSection
        title="Component List Skeleton"
        description="Skeleton for a table or list row pattern."
        previewBg="white"
      >
        <div className="w-full max-w-lg space-y-3">
          {Array.from({ length: 4 })?.map((_, i) => (
            <div key={i} className="flex items-center gap-3 p-3 border border-[#d7d7d7] rounded-lg">
              <Skeleton variant="circle" width={32} height={32} />
              <div className="flex-1 space-y-1.5">
                <Skeleton variant="text" width="50%" height={14} />
                <Skeleton variant="text" width="30%" height={12} />
              </div>
              <Skeleton width={60} height={24} />
            </div>
          ))}
        </div>
      </ShowcaseSection>
      <ShowcaseSection
        title="Toggle Demo"
        description="Click the button to toggle between skeleton and loaded content."
        previewBg="white"
      >
        <div className="w-full max-w-sm space-y-4">
          <Button size="sm" variant="outline" onClick={() => setLoading(v => !v)}>
            {loading ? 'Show content' : 'Show skeleton'}
          </Button>
          {loading ? (
            <SkeletonCard />
          ) : (
            <div className="p-4 border border-[#d7d7d7] rounded-lg space-y-3">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-[#dae8ff] flex items-center justify-center text-sm font-bold text-[#000080]">
                  DS
                </div>
                <div>
                  <p className="text-sm font-medium text-[#1e1e1e]">DesignSystem v1.0</p>
                  <p className="text-xs text-[#808080]">25 components · MIT License</p>
                </div>
              </div>
              <p className="text-sm text-[#808080] leading-relaxed">
                Production-ready UI component library built with Next.js, TypeScript, and Tailwind CSS.
              </p>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 text-xs font-medium bg-[#000080] text-white rounded-md hover:bg-[#0000a0] transition-colors">
                  View docs
                </button>
                <button className="px-3 py-1.5 text-xs font-medium border border-[#d7d7d7] rounded-md hover:bg-gray-50 transition-colors">
                  Source
                </button>
              </div>
            </div>
          )}
        </div>
      </ShowcaseSection>
    </div>
  );
}