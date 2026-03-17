'use client';

import React, { useState } from 'react';
import Tag from '@/components/Tag';
import Button from '@/components/Button';
import ShowcaseSection from '../ShowcaseSection';
import SectionHeader from '../SectionHeader';
import VariantControls, { useVariantControls } from '../VariantControls';
import {
  HashtagIcon as Hash,
  BoltIcon as Zap,
  CodeBracketIcon as Code2,
} from '@heroicons/react/24/outline';

const INITIAL_TAGS = ['Next.js', 'TypeScript', 'Tailwind CSS', 'React', 'CVA', 'Accessible'];

export default function TagSection() {
  const [tags, setTags] = useState(INITIAL_TAGS);
  const [ctrl, setCtrl] = useVariantControls({ size: 'md', variant: 'blue' });

  const removeTag = (tag: string) => setTags((prev) => prev.filter((t) => t !== tag));
  const reset = () => setTags(INITIAL_TAGS);

  return (
    <div>
      <SectionHeader
        title="Tag"
        description="Categorical label chip with seven color variants, three sizes, icon support, and removable mode."
        importPath={`import Tag from "@shubh/ui/Tag"
;`}
      />

      {/* ── Interactive Playground ── */}
      <ShowcaseSection
        title="Interactive Playground"
        description="Use the live controls to switch size and color in real time."
        props={[
          {
            name: 'color',
            type: "'default' | 'blue' | 'green' | 'red' | 'amber' | 'purple' | 'pink'",
            default: "'default'",
            description: 'Tag color scheme',
          },
          {
            name: 'size',
            type: "'sm' | 'md' | 'lg'",
            default: "'md'",
            description: 'Height and padding',
          },
          { name: 'icon', type: 'ReactNode', description: 'Icon rendered before label' },
          { name: 'removable', type: 'boolean', description: 'Show × remove button' },
          { name: 'onRemove', type: '() => void', description: 'Called when × is clicked' },
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
              variants: [
                { value: 'default', label: 'Default' },
                { value: 'blue', label: 'Blue' },
                { value: 'green', label: 'Green' },
                { value: 'red', label: 'Red' },
                { value: 'amber', label: 'Amber' },
                { value: 'purple', label: 'Purple' },
                { value: 'pink', label: 'Pink' },
              ],
              showDisabled: false,
            }}
            state={ctrl}
            onChange={setCtrl}
          />
          <div className="flex items-center justify-center gap-3 p-6 bg-gray-50 rounded-lg border border-[#d7d7d7] flex-wrap">
            <Tag color={(ctrl.variant as any) || 'blue'} size={(ctrl.size as any) || 'md'}>
              Label
            </Tag>
            <Tag
              color={(ctrl.variant as any) || 'blue'}
              size={(ctrl.size as any) || 'md'}
              icon={<Hash className="h-3 w-3" />}
            >
              With icon
            </Tag>
            <Tag
              color={(ctrl.variant as any) || 'blue'}
              size={(ctrl.size as any) || 'md'}
              removable
            >
              Removable
            </Tag>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Color Variants"
        description="Seven semantic color options for categorization."
        code={`<Tag color="default">Default</Tag>
<Tag color="blue">Blue</Tag>
<Tag color="green">Green</Tag>
<Tag color="red">Red</Tag>
<Tag color="amber">Amber</Tag>
<Tag color="purple">Purple</Tag>
<Tag color="pink">Pink</Tag>`}
      >
        <Tag color="default">Default</Tag>
        <Tag color="blue">Blue</Tag>
        <Tag color="green">Green</Tag>
        <Tag color="red">Red</Tag>
        <Tag color="amber">Amber</Tag>
        <Tag color="purple">Purple</Tag>
        <Tag color="pink">Pink</Tag>
      </ShowcaseSection>

      <ShowcaseSection title="Sizes" description="Three sizes for different density contexts.">
        <Tag color="blue" size="sm">
          Small
        </Tag>
        <Tag color="blue" size="md">
          Medium
        </Tag>
        <Tag color="blue" size="lg">
          Large
        </Tag>
      </ShowcaseSection>

      <ShowcaseSection
        title="With Icons"
        description="icon prop renders a lucide-react icon before the label."
      >
        <Tag color="blue" icon={<Hash className="h-3 w-3" />}>
          Next.js
        </Tag>
        <Tag color="green" icon={<Code2 className="h-3 w-3" />}>
          TypeScript
        </Tag>
        <Tag color="amber" icon={<Zap className="h-3 w-3" />}>
          Tailwind
        </Tag>
        <Tag color="purple" icon={<Hash className="h-3 w-3" />}>
          React
        </Tag>
      </ShowcaseSection>

      <ShowcaseSection
        title="Removable Tags"
        description="removable mode adds a × button. Click tags to remove them from the list."
        previewBg="white"
      >
        <div className="w-full max-w-sm space-y-3">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Tag key={tag} color="blue" removable onRemove={() => removeTag(tag)}>
                {tag}
              </Tag>
            ))}
            {tags.length === 0 && <span className="text-sm text-[#808080]">All tags removed.</span>}
          </div>
          {tags.length < INITIAL_TAGS.length && (
            <Button size="sm" variant="ghost" onClick={reset}>
              Restore all tags
            </Button>
          )}
        </div>
      </ShowcaseSection>
    </div>
  );
}
