'use client';

import React, { useState } from 'react';
import {
  MagnifyingGlassIcon as Search,
  EnvelopeIcon as Mail,
  LockClosedIcon as Lock,
  UserIcon as User,
  CurrencyDollarIcon as DollarSign,
  AtSymbolIcon as AtSign,
} from '@heroicons/react/24/outline';
import Input from '@/components/Input';
import ShowcaseSection from '../ShowcaseSection';
import SectionHeader from '../SectionHeader';
import VariantControls, { useVariantControls } from '../VariantControls';

export default function InputSection() {
  const [searchVal, setSearchVal] = useState('');
  const [passVal, setPassVal] = useState('');
  const [ctrl, setCtrl] = useVariantControls({ size: 'md', variant: 'default' });

  return (
    <div>
      <SectionHeader
        title="Input"
        description="Single-line text entry with full support for labels, helper text, icons, validation states, password visibility toggle, and clear button."
        importPath={`import Input from "@shubh/ui/Input"
;`}
      />

      {/* ── Interactive Playground ── */}
      <ShowcaseSection
        title="Interactive Playground"
        description="Use the live controls to switch size, variant, and disabled state in real time."
        previewBg="white"
        props={[
          { name: 'label', type: 'string', description: 'Label text rendered above the input' },
          { name: 'hint', type: 'string', description: 'Helper text rendered below the input' },
          {
            name: 'error',
            type: 'string',
            description: 'Error message — triggers error variant automatically',
          },
          {
            name: 'success',
            type: 'string',
            description: 'Success message — triggers success variant',
          },
          {
            name: 'size',
            type: "'sm' | 'md' | 'lg'",
            default: "'md'",
            description: 'Height and font size',
          },
          {
            name: 'leftElement',
            type: 'ReactNode',
            description: 'Icon or element on the left side',
          },
          {
            name: 'rightElement',
            type: 'ReactNode',
            description: 'Icon or element on the right side',
          },
          {
            name: 'clearable',
            type: 'boolean',
            description: 'Show clear button when input has value',
          },
          {
            name: 'type',
            type: 'string',
            default: "'text'",
            description: "Includes 'password' with show/hide toggle",
          },
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
                { value: 'filled', label: 'Filled' },
                { value: 'error', label: 'Error' },
                { value: 'success', label: 'Success' },
              ],
              showDisabled: true,
            }}
            state={ctrl}
            onChange={setCtrl}
          />
          <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg border border-[#d7d7d7]">
            <div className="w-full max-w-xs">
              <Input
                label="Sample input"
                placeholder="Type something…"
                size={ctrl.size as any}
                variant={ctrl.variant as any}
                disabled={ctrl.disabled}
                error={ctrl.variant === 'error' ? 'This field is required' : undefined}
                success={ctrl.variant === 'success' ? 'Looks good!' : undefined}
                leftElement={<Search className="h-4 w-4" />}
              />
            </div>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Variants"
        description="Default, error, and success validation states."
        previewBg="white"
        code={`<Input placeholder="Default input" />
<Input variant="default" placeholder="Default variant" />
<Input variant="error" error="This field is required" placeholder="Error state" />
<Input variant="success" success="Looks good!" placeholder="Success state" />`}
      >
        <div className="w-full max-w-sm space-y-3">
          <Input placeholder="Default input" />
          <Input variant="default" placeholder="Default variant" />
          <Input
            variant="error"
            error="This field is required"
            placeholder="Error state"
            defaultValue="invalid-email"
          />
          <Input
            variant="success"
            success="Looks good!"
            placeholder="Success state"
            defaultValue="valid@example.com"
          />
        </div>
      </ShowcaseSection>
      <ShowcaseSection
        title="With Labels and Helper Text"
        description="Always use label + hint for accessible form fields."
        previewBg="white"
        code={`<Input
  label="Email address"
  hint="We'll never share your email with anyone."
  placeholder="you@company.com"
  type="email"
  required
/>
<Input
  label="Password"
  hint="Must be at least 8 characters."
  type="password"
  placeholder="Enter password"
/>`}
      >
        <div className="w-full max-w-sm space-y-4">
          <Input
            label="Email address"
            hint="We'll never share your email with anyone."
            placeholder="you@company.com"
            type="email"
            required
          />
          <Input
            label="Password"
            hint="Must be at least 8 characters."
            type="password"
            placeholder="Enter password"
          />
        </div>
      </ShowcaseSection>
      <ShowcaseSection
        title="With Icons"
        description="Left and right element slots for icons, currency symbols, and other decorators."
        previewBg="white"
        code={`<Input leftElement={<Search className="h-4 w-4" />} placeholder="Search components…" />
<Input leftElement={<Mail className="h-4 w-4" />} placeholder="Email address" type="email" />
<Input leftElement={<DollarSign className="h-4 w-4" />} placeholder="0.00" type="number" />
<Input leftElement={<AtSign className="h-4 w-4" />} placeholder="username" />`}
      >
        <div className="w-full max-w-sm space-y-3">
          <Input leftElement={<Search className="h-4 w-4" />} placeholder="Search components…" />
          <Input
            leftElement={<Mail className="h-4 w-4" />}
            placeholder="Email address"
            type="email"
          />
          <Input
            leftElement={<DollarSign className="h-4 w-4" />}
            placeholder="0.00"
            type="number"
          />
          <Input leftElement={<AtSign className="h-4 w-4" />} placeholder="username" />
        </div>
      </ShowcaseSection>
      <ShowcaseSection
        title="Sizes"
        description="Three height variants — sm (32px), md (36px), lg (40px)."
        previewBg="white"
      >
        <div className="w-full max-w-sm space-y-3">
          <Input
            size="sm"
            placeholder="Small input"
            leftElement={<User className="h-3.5 w-3.5" />}
          />
          <Input
            size="md"
            placeholder="Medium input (default)"
            leftElement={<User className="h-4 w-4" />}
          />
          <Input size="lg" placeholder="Large input" leftElement={<User className="h-4 w-4" />} />
        </div>
      </ShowcaseSection>
      <ShowcaseSection
        title="Clearable + Password Toggle"
        description="Interactive: type in the search field to show the clear button. Click the eye icon to reveal password."
        previewBg="white"
      >
        <div className="w-full max-w-sm space-y-3">
          <Input
            leftElement={<Search className="h-4 w-4" />}
            placeholder="Clearable input — type something"
            value={searchVal}
            onChange={(e) => setSearchVal(e?.target?.value)}
            clearable
            onClear={() => setSearchVal('')}
          />
          <Input
            label="Password with visibility toggle"
            type="password"
            placeholder="Enter your password"
            value={passVal}
            onChange={(e) => setPassVal(e?.target?.value)}
            leftElement={<Lock className="h-4 w-4" />}
          />
        </div>
      </ShowcaseSection>
      <ShowcaseSection
        title="Disabled &amp; Read-only"
        description="Disabled inputs prevent all interaction. Read-only allows focus but no editing."
        previewBg="white"
      >
        <div className="w-full max-w-sm space-y-3">
          <Input label="Disabled" placeholder="Cannot interact" disabled />
          <Input label="Read-only" value="Read-only value — selectable" readOnly />
        </div>
      </ShowcaseSection>
    </div>
  );
}
