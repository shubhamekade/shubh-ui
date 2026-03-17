'use client';

import React, { useState, useEffect } from 'react';
import Progress from '@/components/Progress';
import Button from '@/components/Button';
import ShowcaseSection from '../ShowcaseSection';
import SectionHeader from '../SectionHeader';
import VariantControls, { useVariantControls } from '../VariantControls';

export default function ProgressSection() {
  const [value, setValue] = useState(0);
  const [running, setRunning] = useState(false);
  const [playValue, setPlayValue] = useState(65);
  const [ctrl, setCtrl] = useVariantControls({ size: 'md', variant: 'primary' });

  useEffect(() => {
    if (!running) return;
    if (value >= 100) { setRunning(false); return; }
    const t = setTimeout(() => setValue(v => Math.min(v + Math.floor(Math.random() * 8) + 3, 100)), 120);
    return () => clearTimeout(t);
  }, [running, value]);

  const reset = () => { setValue(0); setRunning(false); };

  return (
    <div>
      <SectionHeader
        title="Progress"
        description="Completion indicator bar with five color variants, five size options, optional label, animated and striped modes."
        importPath={`import Progress from "@shubh/ui/Progress"
;`}
      />

      {/* ── Interactive Playground ── */}
      <ShowcaseSection
        title="Interactive Playground"
        description="Use the live controls to switch size and color, and drag the slider to change the progress value."
        previewBg="white"
        props={[
          { name: 'value', type: 'number', required: true, description: 'Current progress value' },
          { name: 'max', type: 'number', default: '100', description: 'Maximum value' },
          { name: 'color', type: "'primary' | 'success' | 'warning' | 'destructive' | 'navy'", default: "'primary'", description: 'Fill color' },
          { name: 'size', type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'", default: "'md'", description: 'Track height' },
          { name: 'showLabel', type: 'boolean', description: 'Show percentage label on right' },
          { name: 'label', type: 'string', description: 'Left-side label text' },
          { name: 'animated', type: 'boolean', description: 'Pulse animation on fill' },
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
                { value: 'success', label: 'Success' },
                { value: 'warning', label: 'Warning' },
                { value: 'destructive', label: 'Error' },
                { value: 'navy', label: 'Navy' },
              ],
              showDisabled: false,
            }}
            state={ctrl}
            onChange={setCtrl}
          />
          <div className="p-6 bg-gray-50 rounded-lg border border-[#d7d7d7] space-y-4">
            <Progress
              value={playValue}
              color={ctrl.variant as any || 'primary'}
              size={ctrl.size as any || 'md'}
              label="Progress"
              showLabel
            />
            <div className="flex items-center gap-3">
              <span className="text-xs text-[#808080] w-10">Value</span>
              <input
                type="range"
                min={0}
                max={100}
                value={playValue}
                onChange={e => setPlayValue(Number(e.target.value))}
                className="flex-1 accent-[#000080]"
              />
              <span className="text-xs font-mono text-[#1e1e1e] w-8 text-right">{playValue}%</span>
            </div>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Color Variants"
        description="Five semantic colors for different progress contexts."
        previewBg="white"
        code={`<Progress value={72} color="primary" label="Build progress" showLabel />
<Progress value={91} color="success" label="Tests passing" showLabel />
<Progress value={43} color="warning" label="Bundle size" showLabel />
<Progress value={18} color="destructive" label="Error rate" showLabel />
<Progress value={65} color="navy" label="Coverage" showLabel />`}
      >
        <div className="w-full max-w-sm space-y-4">
          <Progress value={72} color="primary"     label="Build progress"  showLabel />
          <Progress value={91} color="success"     label="Tests passing"   showLabel />
          <Progress value={43} color="warning"     label="Bundle size"     showLabel />
          <Progress value={18} color="destructive" label="Error rate"      showLabel />
          <Progress value={65} color="navy"        label="Code coverage"   showLabel />
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Size Variants"
        description="Five height options from xs (4px) to xl (24px)."
        previewBg="white"
      >
        <div className="w-full max-w-sm space-y-3">
          {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map(s => (
            <div key={s} className="flex items-center gap-3">
              <span className="text-xs font-mono text-[#808080] w-6">{s}</span>
              <Progress value={68} size={s} className="flex-1" />
            </div>
          ))}
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Animated Progress Demo"
        description="Click Start to watch a simulated build progress."
        previewBg="white"
      >
        <div className="w-full max-w-sm space-y-4">
          <Progress
            value={value}
            color={value === 100 ? 'success' : 'primary'}
            label={value === 100 ? '✓ Build complete' : 'Building…'}
            showLabel
            size="lg"
          />
          <div className="flex gap-2">
            <Button
              size="sm"
              onClick={() => setRunning(true)}
              disabled={running || value === 100}
            >
              {value === 100 ? 'Complete' : running ? 'Running…' : 'Start build'}
            </Button>
            <Button size="sm" variant="outline" onClick={reset}>
              Reset
            </Button>
          </div>
        </div>
      </ShowcaseSection>
    </div>
  );
}