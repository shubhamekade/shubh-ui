'use client';

import React, { useState } from 'react';
import Modal from '@/components/Modal';
import Button from '@/components/Button';
import Input from '@/components/Input';
import ShowcaseSection from '../ShowcaseSection';
import SectionHeader from '../SectionHeader';
import VariantControls, { useVariantControls } from '../VariantControls';
import { TrashIcon as Trash2, ExclamationTriangleIcon as AlertTriangle } from '@heroicons/react/24/outline';

export default function ModalSection() {
  const [basicOpen,   setBasicOpen]   = useState(false);
  const [formOpen,    setFormOpen]    = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [lgOpen,      setLgOpen]      = useState(false);
  const [playOpen,    setPlayOpen]    = useState(false);
  const [ctrl, setCtrl] = useVariantControls({ extras: { size: 'md' } });

  return (
    <div>
      <SectionHeader
        title="Modal"
        description="Focused dialog overlay with fade-scale entrance animation, Escape key dismissal, overlay click dismiss, focus trap, and scroll lock. Five size variants."
        importPath={`import Modal from "@shubh/ui/Modal"
;`}
      />

      {/* ── Interactive Playground ── */}
      <ShowcaseSection
        title="Interactive Playground"
        description="Use the live controls to switch modal size, then open it."
        previewBg="white"
        props={[
          { name: 'open', type: 'boolean', required: true, description: 'Controls visibility' },
          { name: 'onClose', type: '() => void', required: true, description: 'Called when modal should close' },
          { name: 'title', type: 'string', description: 'Modal heading' },
          { name: 'description', type: 'string', description: 'Subtitle below heading' },
          { name: 'footer', type: 'ReactNode', description: 'Footer content — typically action buttons' },
          { name: 'size', type: "'sm' | 'md' | 'lg' | 'xl' | 'full'", default: "'md'", description: 'Max-width of the panel' },
          { name: 'closeOnOverlay', type: 'boolean', default: 'true', description: 'Close when clicking backdrop' },
          { name: 'closeOnEsc', type: 'boolean', default: 'true', description: 'Close on Escape key' },
        ]}
      >
        <div className="w-full space-y-4">
          <VariantControls
            config={{
              showDisabled: false,
              extras: [
                {
                  key: 'size',
                  label: 'Size',
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
          <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg border border-[#d7d7d7]">
            <Button onClick={() => setPlayOpen(true)}>
              Open modal (size: {ctrl.extras.size})
            </Button>
          </div>
          <Modal
            open={playOpen}
            onClose={() => setPlayOpen(false)}
            title="Modal preview"
            description={`Size: ${ctrl.extras.size} — resize the modal using the controls above.`}
            size={ctrl.extras.size as any || 'md'}
            footer={
              <>
                <Button variant="outline" onClick={() => setPlayOpen(false)}>Cancel</Button>
                <Button onClick={() => setPlayOpen(false)}>Confirm</Button>
              </>
            }
          >
            <p className="text-sm text-[#808080] leading-relaxed">
              This modal is rendered with <strong>size="{ctrl.extras.size}"</strong>. Change the size control above and reopen to see the difference in max-width.
            </p>
          </Modal>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Basic Modal"
        description="Click the button to open a basic modal with title, description, and footer actions."
        previewBg="white"
        code={`const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Open modal</Button>

<Modal
  open={open}
  onClose={() => setOpen(false)}
  title="Publish component"
  description="This will make the component available to all team members."
  footer={
    <>
      <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
      <Button onClick={() => setOpen(false)}>Publish</Button>
    </>
  }
>
  <p className="text-sm text-[#808080]">Modal body content goes here.</p>
</Modal>`}
      >
        <Button onClick={() => setBasicOpen(true)}>Open modal</Button>
        <Modal
          open={basicOpen}
          onClose={() => setBasicOpen(false)}
          title="Publish component"
          description="This will make the component available to all team members."
          footer={
            <>
              <Button variant="outline" onClick={() => setBasicOpen(false)}>Cancel</Button>
              <Button onClick={() => setBasicOpen(false)}>Publish now</Button>
            </>
          }
        >
          <p className="text-sm text-[#808080] leading-relaxed">
            Once published, team members can import this component using the central package export.
            Versioning will be incremented automatically.
          </p>
        </Modal>
      </ShowcaseSection>

      <ShowcaseSection
        title="Form Modal"
        description="Modal containing a form — common for create/edit workflows."
        previewBg="white"
      >
        <Button variant="secondary" onClick={() => setFormOpen(true)}>New component</Button>
        <Modal
          open={formOpen}
          onClose={() => setFormOpen(false)}
          title="Create component"
          description="Add a new component to the design system."
          size="md"
          footer={
            <>
              <Button variant="outline" onClick={() => setFormOpen(false)}>Cancel</Button>
              <Button onClick={() => setFormOpen(false)}>Create component</Button>
            </>
          }
        >
          <div className="space-y-4">
            <Input label="Component name" placeholder="e.g. DatePicker" required />
            <Input label="Category" placeholder="e.g. Form, Navigation" />
            <Input label="Import path" placeholder="@shubh/ui/DatePicker" />
          </div>
        </Modal>
      </ShowcaseSection>

      <ShowcaseSection
        title="Confirmation / Destructive Modal"
        description="Red-tinted destructive confirmation pattern."
        previewBg="white"
      >
        <Button variant="destructive" leftIcon={<Trash2 className="h-4 w-4" />} onClick={() => setConfirmOpen(true)}>
          Delete component
        </Button>
        <Modal
          open={confirmOpen}
          onClose={() => setConfirmOpen(false)}
          size="sm"
          footer={
            <>
              <Button variant="outline" onClick={() => setConfirmOpen(false)}>Cancel</Button>
              <Button variant="destructive" onClick={() => setConfirmOpen(false)}>Delete permanently</Button>
            </>
          }
        >
          <div className="flex gap-4">
            <div className="shrink-0 h-10 w-10 rounded-full bg-red-100 flex items-center justify-center">
              <AlertTriangle className="h-5 w-5 text-red-600" />
            </div>
            <div>
              <p className="font-semibold text-[#1e1e1e] mb-1">Delete Button component?</p>
              <p className="text-sm text-[#808080] leading-relaxed">
                This action cannot be undone. All 14 consumers of this component will need to be updated manually.
              </p>
            </div>
          </div>
        </Modal>
      </ShowcaseSection>

      <ShowcaseSection
        title="Large Modal"
        description="XL size for content-heavy dialogs like code viewers or data tables."
        previewBg="white"
      >
        <Button variant="outline" onClick={() => setLgOpen(true)}>Open large modal</Button>
        <Modal
          open={lgOpen}
          onClose={() => setLgOpen(false)}
          title="Component prop reference"
          description="Complete TypeScript interface for the Button component."
          size="xl"
          footer={<Button variant="outline" onClick={() => setLgOpen(false)}>Close</Button>}
        >
          <div className="code-block text-xs">
            <pre>{`export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?:   boolean;
  leftIcon?:  React.ReactNode;
  rightIcon?:  React.ReactNode;
  fullWidth?: boolean;
  'aria-label'?: string;
}`}</pre>
          </div>
        </Modal>
      </ShowcaseSection>
    </div>
  );
}