'use client';

import React from 'react';
import Dropdown from '@/components/Dropdown';
import Button from '@/components/Button';
import Avatar from '@/components/Avatar';
import ShowcaseSection from '../ShowcaseSection';
import SectionHeader from '../SectionHeader';
import VariantControls, { useVariantControls } from '../VariantControls';
import {
  ChevronDownIcon as ChevronDown,
  PencilIcon as Edit,
  DocumentDuplicateIcon as Copy,
  TrashIcon as Trash2,
  ArrowDownTrayIcon as Download,
  ShareIcon as Share2,
  Cog6ToothIcon as Settings,
  ArrowRightOnRectangleIcon as LogOut,
  UserIcon as User,
  CreditCardIcon as CreditCard,
  BellIcon as Bell,
  QuestionMarkCircleIcon as HelpCircle,
  EllipsisHorizontalIcon as MoreHorizontal,
  ArrowTopRightOnSquareIcon as ExternalLink,
  ArchiveBoxIcon as Archive,
  StarIcon as Star,
} from '@heroicons/react/24/outline';

export default function DropdownSection() {
  const [ctrl, setCtrl] = useVariantControls({ extras: { align: 'left' } });

  return (
    <div>
      <SectionHeader
        title="Dropdown"
        description="Contextual action menu with icon support, keyboard shortcuts, separators with group labels, danger items, checked state, and click-outside dismissal."
        importPath={`import Dropdown from "@shubh/ui/Dropdown"
;`}
      />

      {/* ── Interactive Playground ── */}
      <ShowcaseSection
        title="Interactive Playground"
        description="Use the live controls to switch menu alignment and disabled state in real time."
        previewBg="white"
        props={[
          { name: 'trigger', type: 'ReactNode', required: true, description: 'Element that opens the menu on click' },
          { name: 'items', type: 'DropdownMenuItem[]', required: true, description: 'Menu items and separators' },
          { name: 'align', type: "'left' | 'right'", default: "'left'", description: 'Menu alignment relative to trigger' },
        ]}
      >
        <div className="w-full space-y-4">
          <VariantControls
            config={{
              showDisabled: true,
              extras: [
                {
                  key: 'align',
                  label: 'Align',
                  options: [
                    { value: 'left', label: 'Left' },
                    { value: 'right', label: 'Right' },
                  ],
                },
              ],
            }}
            state={ctrl}
            onChange={setCtrl}
          />
          <div className="flex items-center justify-center p-8 bg-gray-50 rounded-lg border border-[#d7d7d7]">
            <Dropdown
              align={ctrl.extras.align as any || 'left'}
              trigger={
                <Button
                  rightIcon={<ChevronDown className="h-4 w-4" />}
                  disabled={ctrl.disabled}
                >
                  Actions
                </Button>
              }
              items={[
                { id: 'edit',    label: 'Edit component',  icon: <Edit className="h-4 w-4" />,     onClick: () => {} },
                { id: 'copy',    label: 'Duplicate',        icon: <Copy className="h-4 w-4" />,     onClick: () => {} },
                { id: 'export',  label: 'Export as JSON',   icon: <Download className="h-4 w-4" />, onClick: () => {} },
                { id: 'sep1',    separator: true },
                { id: 'delete',  label: 'Delete component', icon: <Trash2 className="h-4 w-4" />,   danger: true, onClick: () => {} },
              ]}
            />
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Basic Dropdown"
        description="Simple action menu with icons and a separator."
        previewBg="white"
        code={`<Dropdown
  trigger={<Button rightIcon={<ChevronDown />}>Actions</Button>}
  items={[
    { id: 'edit', label: 'Edit component', icon: <Edit /> },
    { id: 'copy', label: 'Duplicate', icon: <Copy /> },
    { id: 'sep', separator: true },
    { id: 'delete', label: 'Delete', icon: <Trash2 />, danger: true },
  ]}
/>`}
      >
        <Dropdown
          trigger={
            <Button rightIcon={<ChevronDown className="h-4 w-4" />}>
              Component actions
            </Button>
          }
          items={[
            { id: 'edit',    label: 'Edit component',  icon: <Edit className="h-4 w-4" />,     onClick: () => {} },
            { id: 'copy',    label: 'Duplicate',        icon: <Copy className="h-4 w-4" />,     onClick: () => {} },
            { id: 'export',  label: 'Export as JSON',   icon: <Download className="h-4 w-4" />, onClick: () => {} },
            { id: 'share',   label: 'Share link',       icon: <Share2 className="h-4 w-4" />,   onClick: () => {} },
            { id: 'sep1',    separator: true },
            { id: 'archive', label: 'Archive',          icon: <Archive className="h-4 w-4" />,  onClick: () => {} },
            { id: 'delete',  label: 'Delete component', icon: <Trash2 className="h-4 w-4" />,   danger: true, onClick: () => {} },
          ]}
        />
      </ShowcaseSection>
      <ShowcaseSection
        title="With Keyboard Shortcuts"
        description="shortcut property renders a keyboard hint on the right side of the item."
        previewBg="white"
      >
        <Dropdown
          trigger={
            <Button variant="outline" rightIcon={<ChevronDown className="h-4 w-4" />}>
              Edit
            </Button>
          }
          items={[
            { id: 'undo',  label: 'Undo',  icon: <Edit className="h-4 w-4" />,  shortcut: '⌘Z',   onClick: () => {} },
            { id: 'redo',  label: 'Redo',  icon: <Edit className="h-4 w-4" />,  shortcut: '⌘⇧Z',  onClick: () => {} },
            { id: 'sep',   separator: true },
            { id: 'cut',   label: 'Cut',   icon: <Copy className="h-4 w-4" />,  shortcut: '⌘X',   onClick: () => {} },
            { id: 'copy',  label: 'Copy',  icon: <Copy className="h-4 w-4" />,  shortcut: '⌘C',   onClick: () => {} },
            { id: 'paste', label: 'Paste', icon: <Copy className="h-4 w-4" />,  shortcut: '⌘V',   onClick: () => {} },
          ]}
        />
      </ShowcaseSection>
      <ShowcaseSection
        title="User Profile Menu"
        description="Right-aligned menu with avatar trigger — common for app topbars."
        previewBg="white"
      >
        <div className="flex justify-end w-full">
          <Dropdown
            align="right"
            trigger={
              <div className="flex items-center gap-2 cursor-pointer p-1.5 rounded-lg hover:bg-gray-100 transition-colors">
                <Avatar initials="MK" size="sm" status="online" />
                <span className="text-sm font-medium text-[#1e1e1e] hidden sm:block">Mia Kowalski</span>
                <ChevronDown className="h-4 w-4 text-[#808080]" />
              </div>
            }
            items={[
              { id: 'header', separator: true, label: 'mia@designsystem.io' },
              { id: 'profile',  label: 'Your profile',    icon: <User className="h-4 w-4" />,       onClick: () => {} },
              { id: 'billing',  label: 'Billing',          icon: <CreditCard className="h-4 w-4" />, onClick: () => {} },
              { id: 'notifs',   label: 'Notifications',    icon: <Bell className="h-4 w-4" />,       onClick: () => {} },
              { id: 'settings', label: 'Settings',         icon: <Settings className="h-4 w-4" />,   shortcut: '⌘,', onClick: () => {} },
              { id: 'help',     label: 'Help & docs',      icon: <HelpCircle className="h-4 w-4" />, onClick: () => {} },
              { id: 'sep2',     separator: true },
              { id: 'logout',   label: 'Sign out',         icon: <LogOut className="h-4 w-4" />,     danger: true, onClick: () => {} },
            ]}
          />
        </div>
      </ShowcaseSection>
      <ShowcaseSection
        title="Row Actions (icon trigger)"
        description="Three-dot icon trigger — common for table row action menus."
        previewBg="white"
      >
        <div className="w-full max-w-sm border border-[#d7d7d7] rounded-lg overflow-hidden">
          {['Button', 'Input', 'Modal']?.map(comp => (
            <div
              key={comp}
              className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 border-b border-[#d7d7d7] last:border-b-0 transition-colors"
            >
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-medium text-[#000080]">{comp}</span>
                <span className="text-xs text-[#808080]">stable</span>
              </div>
              <Dropdown
                align="right"
                trigger={
                  <Button size="icon-sm" variant="ghost" aria-label={`${comp} actions`}>
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                }
                items={[
                  { id: 'view',   label: 'View docs',  icon: <ExternalLink className="h-4 w-4" />, onClick: () => {} },
                  { id: 'edit',   label: 'Edit',        icon: <Edit className="h-4 w-4" />,         onClick: () => {} },
                  { id: 'star',   label: 'Star',         icon: <Star className="h-4 w-4" />,         onClick: () => {} },
                  { id: 'sep',    separator: true },
                  { id: 'delete', label: 'Delete',       icon: <Trash2 className="h-4 w-4" />,       danger: true, onClick: () => {} },
                ]}
              />
            </div>
          ))}
        </div>
      </ShowcaseSection>
    </div>
  );
}