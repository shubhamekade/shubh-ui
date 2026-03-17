'use client';

import React, { useState, useCallback } from 'react';
import {
  PencilSquareIcon as FormInput,
  ArrowsRightLeftIcon as Navigation,
  EyeIcon as Eye,
  BellIcon as Bell,
  ChartBarIcon as BarChart2,
  WrenchIcon as Wrench,
  ArchiveBoxIcon as Package,
} from '@heroicons/react/24/outline';

import { useDebounce } from '@/hooks/useDebounce';
import ShowcaseSidebar from './ShowcaseSidebar';
import ShowcaseTopbar from './ShowcaseTopbar';
import { ShowcaseThemeProvider, useShowcaseTheme } from '../context/ThemeContext';
import ButtonSection from './sections/ButtonSection';
import InputSection from './sections/InputSection';
import BadgeSection from './sections/BadgeSection';
import AvatarSection from './sections/AvatarSection';
import CardSection from './sections/CardSection';
import SwitchSection from './sections/SwitchSection';
import CheckboxSection from './sections/CheckboxSection';
import RadioSection from './sections/RadioSection';
import SelectSection from './sections/SelectSection';
import ModalSection from './sections/ModalSection';
import DrawerSection from './sections/DrawerSection';
import TooltipSection from './sections/TooltipSection';
import TabsSection from './sections/TabsSection';
import AccordionSection from './sections/AccordionSection';
import AlertSection from './sections/AlertSection';
import ProgressSection from './sections/ProgressSection';
import SpinnerSection from './sections/SpinnerSection';
import SkeletonSection from './sections/SkeletonSection';
import TableSection from './sections/TableSection';
import PaginationSection from './sections/PaginationSection';
import BreadcrumbSection from './sections/BreadcrumbSection';
import DropdownSection from './sections/DropdownSection';
import TextareaSection from './sections/TextareaSection';
import TagSection from './sections/TagSection';
import DividerSection from './sections/DividerSection';
import DataTableSection from './sections/DataTableSection';
import CalendarSection from './sections/CalendarSection';

export type ComponentCategory = {
  id: string;
  label: string;
  icon: React.ReactNode;
  components: ComponentEntry[];
};

export type ComponentEntry = {
  id: string;
  label: string;
  status: 'stable' | 'beta' | 'deprecated';
  description: string;
};

export const CATEGORIES: ComponentCategory[] = [
  {
    id: 'form',
    label: 'Form',
    icon: <FormInput className="h-4 w-4" />,
    components: [
      {
        id: 'button',
        label: 'Button',
        status: 'stable',
        description: 'Trigger actions and events',
      },
      { id: 'input', label: 'Input', status: 'stable', description: 'Single-line text entry' },
      { id: 'textarea', label: 'Textarea', status: 'stable', description: 'Multi-line text entry' },
      { id: 'select', label: 'Select', status: 'stable', description: 'Dropdown option picker' },
      {
        id: 'checkbox',
        label: 'Checkbox',
        status: 'stable',
        description: 'Boolean toggle with label',
      },
      { id: 'radio', label: 'Radio', status: 'stable', description: 'Single selection from group' },
      { id: 'switch', label: 'Switch', status: 'stable', description: 'Toggle boolean state' },
    ],
  },
  {
    id: 'pickers',
    label: 'Pickers',
    icon: <Package className="h-4 w-4" />,
    components: [
      {
        id: 'calendar',
        label: 'Calendar',
        status: 'stable',
        description: 'Date picker with day/month/year views',
      },
    ],
  },
  {
    id: 'navigation',
    label: 'Navigation',
    icon: <Navigation className="h4 w-4" />,
    components: [
      { id: 'tabs', label: 'Tabs', status: 'stable', description: 'Tabbed content navigation' },
      {
        id: 'breadcrumb',
        label: 'Breadcrumb',
        status: 'stable',
        description: 'Hierarchical page location',
      },
      {
        id: 'pagination',
        label: 'Pagination',
        status: 'stable',
        description: 'Page-based data navigation',
      },
      {
        id: 'dropdown',
        label: 'Dropdown',
        status: 'stable',
        description: 'Contextual action menu',
      },
    ],
  },
  {
    id: 'overlay',
    label: 'Overlay',
    icon: <Eye className="h-4 w-4" />,
    components: [
      { id: 'modal', label: 'Modal', status: 'stable', description: 'Focused dialog overlay' },
      {
        id: 'drawer',
        label: 'Drawer',
        status: 'stable',
        description: 'Side-panel slide-in overlay',
      },
      { id: 'tooltip', label: 'Tooltip', status: 'stable', description: 'Contextual hover label' },
    ],
  },
  {
    id: 'feedback',
    label: 'Feedback',
    icon: <Bell className="h-4 w-4" />,
    components: [
      { id: 'alert', label: 'Alert', status: 'stable', description: 'Inline status messages' },
      {
        id: 'progress',
        label: 'Progress',
        status: 'stable',
        description: 'Completion indicator bar',
      },
      { id: 'spinner', label: 'Spinner', status: 'stable', description: 'Loading state indicator' },
      {
        id: 'skeleton',
        label: 'Skeleton',
        status: 'stable',
        description: 'Content placeholder shimmer',
      },
    ],
  },
  {
    id: 'data-display',
    label: 'Data Display',
    icon: <BarChart2 className="h-4 w-4" />,
    components: [
      { id: 'card', label: 'Card', status: 'stable', description: 'Content container surface' },
      { id: 'table', label: 'Table', status: 'stable', description: 'Structured data grid' },
      { id: 'badge', label: 'Badge', status: 'stable', description: 'Status and count labels' },
      { id: 'avatar', label: 'Avatar', status: 'stable', description: 'User identity visual' },
      { id: 'tag', label: 'Tag', status: 'stable', description: 'Categorical label chip' },
    ],
  },
  {
    id: 'utilities',
    label: 'Utilities',
    icon: <Wrench className="h-4 w-4" />,
    components: [
      {
        id: 'accordion',
        label: 'Accordion',
        status: 'stable',
        description: 'Collapsible content sections',
      },
      {
        id: 'divider',
        label: 'Divider',
        status: 'stable',
        description: 'Visual content separator',
      },
    ],
  },
  {
    id: 'advanced',
    label: 'Advanced',
    icon: <Package className="h-4 w-4" />,
    components: [
      {
        id: 'server-data-table',
        label: 'Server Data Table',
        status: 'stable',
        description: 'Expandable rows, server-side pagination & search',
      },
    ],
  },
];

const SECTION_MAP: Record<string, React.ComponentType> = {
  button: ButtonSection,
  input: InputSection,
  textarea: TextareaSection,
  select: SelectSection,
  checkbox: CheckboxSection,
  radio: RadioSection,
  switch: SwitchSection,
  tabs: TabsSection,
  breadcrumb: BreadcrumbSection,
  pagination: PaginationSection,
  dropdown: DropdownSection,
  modal: ModalSection,
  drawer: DrawerSection,
  tooltip: TooltipSection,
  alert: AlertSection,
  progress: ProgressSection,
  spinner: SpinnerSection,
  skeleton: SkeletonSection,
  card: CardSection,
  table: TableSection,
  badge: BadgeSection,
  avatar: AvatarSection,
  tag: TagSection,
  accordion: AccordionSection,
  divider: DividerSection,
  'server-data-table': DataTableSection,
  calendar: CalendarSection,
};

export default function ComponentShowcaseClient() {
  return (
    <ShowcaseThemeProvider>
      <ComponentShowcaseInner />
    </ShowcaseThemeProvider>
  );
}

function ComponentShowcaseInner() {
  const [activeComponent, setActiveComponent] = useState<string>('button');
  const [searchQuery, setSearchQuery] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { theme } = useShowcaseTheme();
  const isNavy = theme === 'navy';
  const debouncedSearch = useDebounce(searchQuery, 200);

  const allComponents = CATEGORIES.flatMap((c) => c.components);
  const filteredCategories = debouncedSearch
    ? CATEGORIES.map((cat) => ({
        ...cat,
        components: cat.components.filter(
          (c) =>
            c.label.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
            c.description.toLowerCase().includes(debouncedSearch.toLowerCase())
        ),
      })).filter((cat) => cat.components.length > 0)
    : CATEGORIES;

  const activeEntry = allComponents.find((c) => c.id === activeComponent);
  const ActiveSection = SECTION_MAP[activeComponent];

  const handleSelect = useCallback((id: string) => {
    setActiveComponent(id);
    setSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const totalComponents = allComponents.length;
  const stableCount = allComponents.filter((c) => c.status === 'stable').length;

  return (
    <div
      className={`flex h-screen overflow-hidden font-sans transition-colors duration-200 ${
        isNavy ? 'bg-[#00003a]' : 'bg-white'
      }`}
    >
      {/* Desktop Sidebar */}
      <ShowcaseSidebar
        categories={filteredCategories}
        activeComponent={activeComponent}
        onSelect={handleSelect}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        totalComponents={totalComponents}
        stableCount={stableCount}
        className="hidden lg:flex"
      />

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setSidebarOpen(false)} />
          <ShowcaseSidebar
            categories={filteredCategories}
            activeComponent={activeComponent}
            onSelect={handleSelect}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            totalComponents={totalComponents}
            stableCount={stableCount}
            className="absolute left-0 top-0 h-full z-50 flex"
            mobile
            onClose={() => setSidebarOpen(false)}
          />
        </div>
      )}

      {/* Main content area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <ShowcaseTopbar activeEntry={activeEntry} onMenuClick={() => setSidebarOpen(true)} />

        {/* Scrollable content */}
        <main
          className={`flex-1 overflow-y-auto scrollbar-thin transition-colors duration-200 ${
            isNavy ? 'bg-[#00003a]' : 'bg-[#f9f9f9]'
          }`}
          id="main-content"
        >
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-16 py-8">
            {ActiveSection ? (
              <ActiveSection />
            ) : (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <Package className="h-12 w-12 text-[#d7d7d7] mb-4" />
                <p className="text-[#808080] text-sm">Select a component from the sidebar</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
