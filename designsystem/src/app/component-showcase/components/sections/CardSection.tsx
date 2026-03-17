'use client';

import React from 'react';
import Card, {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/Card';
import Badge from '@/components/Badge';
import Button from '@/components/Button';
import Avatar from '@/components/Avatar';
import ShowcaseSection from '../ShowcaseSection';
import SectionHeader from '../SectionHeader';
import VariantControls, { useVariantControls } from '../VariantControls';
import {
  StarIcon as Star,
  CodeBracketIcon as GitBranch,
  ArchiveBoxIcon as Package,
} from '@heroicons/react/24/outline';

export default function CardSection() {
  const [ctrl, setCtrl] = useVariantControls({ variant: 'default', extras: { padding: 'md' } });

  return (
    <div>
      <SectionHeader
        title="Card"
        description="Content container surface with seven visual variants, five padding options, and optional hover elevation. Composed via CardHeader, CardTitle, CardContent, and CardFooter sub-components."
        importPath={`import Card, { CardHeader, CardTitle, CardContent, CardFooter } from "@shubh/ui/Card"
;`}
      />

      {/* ── Interactive Playground ── */}
      <ShowcaseSection
        title="Interactive Playground"
        description="Use the live controls to switch card variant and padding in real time."
        props={[
          {
            name: 'variant',
            type: "'default' | 'elevated' | 'outlined' | 'filled' | 'navy' | 'primary' | 'accent' | 'ghost'",
            default: "'default'",
            description: 'Visual surface style',
          },
          {
            name: 'padding',
            type: "'none' | 'sm' | 'md' | 'lg' | 'xl'",
            default: "'md'",
            description: 'Internal padding',
          },
          {
            name: 'hoverable',
            type: 'boolean',
            description: 'Adds hover lift + shadow transition',
          },
          {
            name: 'as',
            type: 'keyof JSX.IntrinsicElements',
            default: "'div'",
            description: 'HTML element to render as',
          },
        ]}
      >
        <div className="w-full space-y-4">
          <VariantControls
            config={{
              variants: [
                { value: 'default', label: 'Default' },
                { value: 'elevated', label: 'Elevated' },
                { value: 'outlined', label: 'Outlined' },
                { value: 'filled', label: 'Filled' },
                { value: 'accent', label: 'Accent' },
                { value: 'navy', label: 'Navy' },
                { value: 'ghost', label: 'Ghost' },
              ],
              showDisabled: false,
              extras: [
                {
                  key: 'padding',
                  label: 'Padding',
                  options: [
                    { value: 'sm', label: 'SM' },
                    { value: 'md', label: 'MD' },
                    { value: 'lg', label: 'LG' },
                    { value: 'xl', label: 'XL' },
                  ],
                },
              ],
            }}
            state={ctrl}
            onChange={setCtrl}
          />
          <div className="flex items-center justify-center p-8 bg-gray-100 rounded-lg border border-[#d7d7d7]">
            <Card
              variant={(ctrl.variant as any) || 'default'}
              padding={(ctrl.extras.padding as any) || 'md'}
              className="w-64"
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Component library</CardTitle>
                  <Badge variant="success" size="sm" dot>
                    Stable
                  </Badge>
                </div>
                <CardDescription>A collection of 25+ accessible UI components.</CardDescription>
              </CardHeader>
              <CardContent>
                <p
                  className={`text-sm leading-relaxed ${ctrl.variant === 'navy' ? 'text-white/70' : 'text-[#808080]'}`}
                >
                  Built with TypeScript, Tailwind CSS, and CVA.
                </p>
              </CardContent>
              <CardFooter>
                <Button size="sm" variant={ctrl.variant === 'navy' ? 'secondary' : 'primary'}>
                  View docs
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Variants"
        description="Seven card variants for different surface contexts."
        code={`<Card variant="default">Default</Card>
<Card variant="elevated">Elevated</Card>
<Card variant="outlined">Outlined</Card>
<Card variant="filled">Filled</Card>
<Card variant="accent">Accent</Card>
<Card variant="navy">Navy</Card>
<Card variant="ghost">Ghost</Card>`}
      >
        {(['default', 'elevated', 'outlined', 'filled', 'accent'] as const).map((v) => (
          <Card key={v} variant={v} className="w-36 h-20 flex items-center justify-center">
            <p className="text-xs font-medium capitalize text-center">{v}</p>
          </Card>
        ))}
        <Card variant="navy" className="w-36 h-20 flex items-center justify-center">
          <p className="text-xs font-medium text-white">Navy</p>
        </Card>
      </ShowcaseSection>

      <ShowcaseSection
        title="Composed Card"
        description="Using CardHeader, CardTitle, CardDescription, CardContent, and CardFooter sub-components."
        previewBg="white"
        code={`<Card>
  <CardHeader>
    <CardTitle>Component library</CardTitle>
    <CardDescription>A collection of 25+ accessible UI components.</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-sm text-[#808080]">Built with TypeScript, Tailwind CSS, and CVA.</p>
  </CardContent>
  <CardFooter>
    <Button size="sm">View docs</Button>
    <Button size="sm" variant="ghost">Source</Button>
  </CardFooter>
</Card>`}
      >
        <Card className="w-72">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Component library</CardTitle>
              <Badge variant="success" size="sm" dot>
                Stable
              </Badge>
            </div>
            <CardDescription>A collection of 25+ accessible UI components.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-[#808080] leading-relaxed">
              Built with TypeScript, Tailwind CSS, and class-variance-authority for variant
              management.
            </p>
            <div className="flex gap-4 mt-3">
              <span className="flex items-center gap-1 text-xs text-[#808080]">
                <Star className="h-3.5 w-3.5" /> 2.4k
              </span>
              <span className="flex items-center gap-1 text-xs text-[#808080]">
                <GitBranch className="h-3.5 w-3.5" /> 48 forks
              </span>
            </div>
          </CardContent>
          <CardFooter className="justify-between">
            <div className="flex items-center gap-2">
              <Avatar initials="DS" size="xs" />
              <span className="text-xs text-[#808080]">DesignSystem</span>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="ghost">
                Source
              </Button>
              <Button size="sm">View docs</Button>
            </div>
          </CardFooter>
        </Card>
      </ShowcaseSection>

      <ShowcaseSection
        title="Hoverable Cards"
        description="hoverable prop adds lift + shadow transition on hover — ideal for clickable cards."
        previewBg="dots"
      >
        {[
          {
            title: 'Button',
            count: '9 variants',
            icon: <Package className="h-5 w-5 text-[#000080]" />,
          },
          {
            title: 'Input',
            count: '4 variants',
            icon: <Package className="h-5 w-5 text-green-600" />,
          },
          {
            title: 'Modal',
            count: '5 sizes',
            icon: <Package className="h-5 w-5 text-amber-500" />,
          },
        ].map(({ title, count, icon }) => (
          <Card key={title} hoverable className="w-44 cursor-pointer">
            <div className="flex items-start justify-between mb-3">
              <div className="p-2 bg-gray-50 rounded-md">{icon}</div>
              <Badge variant="default" size="sm">
                stable
              </Badge>
            </div>
            <p className="font-semibold text-sm text-[#1e1e1e]">{title}</p>
            <p className="text-xs text-[#808080] mt-0.5">{count}</p>
          </Card>
        ))}
      </ShowcaseSection>

      <ShowcaseSection
        title="Padding Variants"
        description="Five padding options for different density contexts."
        previewBg="dots"
      >
        {(['sm', 'md', 'lg', 'xl'] as const).map((p) => (
          <Card key={p} padding={p} className="w-28 text-center">
            <p className="text-xs font-mono text-[#808080]">padding=&quot;{p}&quot;</p>
          </Card>
        ))}
      </ShowcaseSection>
    </div>
  );
}
