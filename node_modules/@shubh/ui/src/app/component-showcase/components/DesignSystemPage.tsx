'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  MagnifyingGlassIcon,
  XMarkIcon,
  Bars3Icon,
  ChevronUpIcon,
  PencilSquareIcon,
  ArrowsRightLeftIcon,
  EyeIcon,
  BellIcon,
  ChartBarIcon,
  WrenchIcon,
  CheckCircleIcon,
  RectangleGroupIcon,
  ArrowTopRightOnSquareIcon,
} from '@heroicons/react/24/outline';
import { cn } from '@/utils/cn';
import ButtonSection from './sections/ButtonSection';
import InputSection from './sections/InputSection';
import TextareaSection from './sections/TextareaSection';
import SelectSection from './sections/SelectSection';
import CheckboxSection from './sections/CheckboxSection';
import RadioSection from './sections/RadioSection';
import SwitchSection from './sections/SwitchSection';
import TabsSection from './sections/TabsSection';
import BreadcrumbSection from './sections/BreadcrumbSection';
import PaginationSection from './sections/PaginationSection';
import DropdownSection from './sections/DropdownSection';
import ModalSection from './sections/ModalSection';
import DrawerSection from './sections/DrawerSection';
import TooltipSection from './sections/TooltipSection';
import AlertSection from './sections/AlertSection';
import ProgressSection from './sections/ProgressSection';
import SpinnerSection from './sections/SpinnerSection';
import SkeletonSection from './sections/SkeletonSection';
import CardSection from './sections/CardSection';
import TableSection from './sections/TableSection';
import BadgeSection from './sections/BadgeSection';
import AvatarSection from './sections/AvatarSection';
import TagSection from './sections/TagSection';
import AccordionSection from './sections/AccordionSection';
import DividerSection from './sections/DividerSection';

interface NavCategory {
  id: string;
  label: string;
  icon: React.ReactNode;
  color: string;
  components: { id: string; label: string }[];
}

const NAV_CATEGORIES: NavCategory[] = [
  {
    id: 'form',
    label: 'Form',
    icon: <PencilSquareIcon className="h-4 w-4" />,
    color: 'text-blue-400',
    components: [
      { id: 'button',   label: 'Button' },
      { id: 'input',    label: 'Input' },
      { id: 'textarea', label: 'Textarea' },
      { id: 'select',   label: 'Select' },
      { id: 'checkbox', label: 'Checkbox' },
      { id: 'radio',    label: 'Radio' },
      { id: 'switch',   label: 'Switch' },
    ],
  },
  {
    id: 'navigation',
    label: 'Navigation',
    icon: <ArrowsRightLeftIcon className="h-4 w-4" />,
    color: 'text-purple-400',
    components: [
      { id: 'tabs',       label: 'Tabs' },
      { id: 'breadcrumb', label: 'Breadcrumb' },
      { id: 'pagination', label: 'Pagination' },
      { id: 'dropdown',   label: 'Dropdown' },
    ],
  },
  {
    id: 'overlay',
    label: 'Overlay',
    icon: <EyeIcon className="h-4 w-4" />,
    color: 'text-indigo-400',
    components: [
      { id: 'modal',   label: 'Modal' },
      { id: 'drawer',  label: 'Drawer' },
      { id: 'tooltip', label: 'Tooltip' },
    ],
  },
  {
    id: 'feedback',
    label: 'Feedback',
    icon: <BellIcon className="h-4 w-4" />,
    color: 'text-amber-400',
    components: [
      { id: 'alert',    label: 'Alert' },
      { id: 'progress', label: 'Progress' },
      { id: 'spinner',  label: 'Spinner' },
      { id: 'skeleton', label: 'Skeleton' },
    ],
  },
  {
    id: 'data-display',
    label: 'Data Display',
    icon: <ChartBarIcon className="h-4 w-4" />,
    color: 'text-green-400',
    components: [
      { id: 'card',   label: 'Card' },
      { id: 'table',  label: 'Table' },
      { id: 'badge',  label: 'Badge' },
      { id: 'avatar', label: 'Avatar' },
      { id: 'tag',    label: 'Tag' },
    ],
  },
  {
    id: 'utilities',
    label: 'Utilities',
    icon: <WrenchIcon className="h-4 w-4" />,
    color: 'text-rose-400',
    components: [
      { id: 'accordion', label: 'Accordion' },
      { id: 'divider',   label: 'Divider' },
    ],
  },
];

const ALL_COMPONENTS = NAV_CATEGORIES.flatMap(c => c.components);
const TOTAL = ALL_COMPONENTS.length;

const SECTION_MAP: Record<string, React.ComponentType> = {
  button:     ButtonSection,
  input:      InputSection,
  textarea:   TextareaSection,
  select:     SelectSection,
  checkbox:   CheckboxSection,
  radio:      RadioSection,
  switch:     SwitchSection,
  tabs:       TabsSection,
  breadcrumb: BreadcrumbSection,
  pagination: PaginationSection,
  dropdown:   DropdownSection,
  modal:      ModalSection,
  drawer:     DrawerSection,
  tooltip:    TooltipSection,
  alert:      AlertSection,
  progress:   ProgressSection,
  spinner:    SpinnerSection,
  skeleton:   SkeletonSection,
  card:       CardSection,
  table:      TableSection,
  badge:      BadgeSection,
  avatar:     AvatarSection,
  tag:        TagSection,
  accordion:  AccordionSection,
  divider:    DividerSection,
};

export default function DesignSystemPage() {
  const [activeSection, setActiveSection] = useState<string>('button');
  const [searchQuery, setSearchQuery] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  // Track scroll to highlight active section
  useEffect(() => {
    const main = mainRef.current;
    if (!main) return;

    const handleScroll = () => {
      setShowScrollTop(main.scrollTop > 400);

      // Find which section is currently in view
      const scrollPos = main.scrollTop + 120;
      let current = ALL_COMPONENTS[0].id;
      for (const comp of ALL_COMPONENTS) {
        const el = sectionRefs.current[comp.id];
        if (el && el.offsetTop <= scrollPos) {
          current = comp.id;
        }
      }
      setActiveSection(current);
    };

    main.addEventListener('scroll', handleScroll, { passive: true });
    return () => main.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = useCallback((id: string) => {
    const el = sectionRefs.current[id];
    if (el && mainRef.current) {
      const offset = el.offsetTop - 80;
      mainRef.current.scrollTo({ top: offset, behavior: 'smooth' });
    }
    setSidebarOpen(false);
  }, []);

  const scrollToTop = () => {
    mainRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredCategories = searchQuery
    ? NAV_CATEGORIES.map(cat => ({
        ...cat,
        components: cat.components.filter(c =>
          c.label.toLowerCase().includes(searchQuery.toLowerCase())
        ),
      })).filter(cat => cat.components.length > 0)
    : NAV_CATEGORIES;

  const SidebarContent = () => (
    <aside className="w-64 flex-col bg-[#000040] text-white flex-shrink-0 overflow-hidden flex h-full">
      {/* Logo */}
      <div className="px-4 pt-5 pb-4 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="h-7 w-7 rounded-md bg-white/10 text-white text-xs font-bold flex items-center justify-center shrink-0">DS</div>
          <div>
            <span className="font-semibold text-sm text-white block leading-tight">DesignSystem</span>
            <span className="text-xs text-white/40 leading-tight">v1.0.0 · {TOTAL} components</span>
          </div>
        </div>
        {sidebarOpen && (
          <button
            type="button"
            onClick={() => setSidebarOpen(false)}
            className="p-1 rounded-md text-white/50 hover:text-white hover:bg-white/10 transition-colors lg:hidden"
            aria-label="Close sidebar"
          >
            <XMarkIcon className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Stats */}
      <div className="px-4 py-3 flex items-center gap-4 border-b border-white/10">
        <div className="text-center">
          <span className="block text-lg font-bold text-white tabular-nums">{TOTAL}</span>
          <span className="text-xs text-white/40">Components</span>
        </div>
        <div className="w-px h-8 bg-white/10" />
        <div className="text-center">
          <span className="block text-lg font-bold text-green-400 tabular-nums">{NAV_CATEGORIES.length}</span>
          <span className="text-xs text-white/40">Categories</span>
        </div>
        <div className="w-px h-8 bg-white/10" />
        <div className="text-center">
          <span className="block text-lg font-bold text-blue-400 tabular-nums">100%</span>
          <span className="text-xs text-white/40">Stable</span>
        </div>
      </div>

      {/* Search */}
      <div className="px-3 py-3 border-b border-white/10">
        <div className="relative">
          <MagnifyingGlassIcon className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-white/40 pointer-events-none" />
          <input
            type="search"
            placeholder="Search components…"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full h-8 pl-8 pr-3 text-sm bg-white/10 border border-white/10 rounded-md text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 focus:bg-white/15 transition-all"
            aria-label="Search components"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
              aria-label="Clear search"
            >
              <XMarkIcon className="h-3 w-3" />
            </button>
          )}
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-3 navy-scrollbar" aria-label="Component sections">
        {filteredCategories.length === 0 ? (
          <div className="px-4 py-8 text-center">
            <p className="text-xs text-white/40">No components match &ldquo;{searchQuery}&rdquo;</p>
          </div>
        ) : (
          filteredCategories.map(cat => (
            <div key={cat.id} className="mb-4">
              <div className="flex items-center gap-2 px-4 mb-1">
                <span className={cn('shrink-0', cat.color)}>{cat.icon}</span>
                <span className="text-xs font-semibold text-white/40 uppercase tracking-wider">{cat.label}</span>
                <span className="ml-auto text-xs text-white/25 tabular-nums">{cat.components.length}</span>
              </div>
              {cat.components.map(comp => {
                const isActive = activeSection === comp.id;
                return (
                  <button
                    key={comp.id}
                    type="button"
                    onClick={() => scrollToSection(comp.id)}
                    className={cn(
                      'w-full flex items-center gap-2.5 px-4 py-2 text-sm transition-all duration-150 text-left group',
                      isActive
                        ? 'bg-white/15 text-white font-medium' :'text-white/60 hover:text-white hover:bg-white/8'
                    )}
                  >
                    <span
                      className={cn(
                        'w-1.5 h-1.5 rounded-full shrink-0 bg-green-400',
                        !isActive && 'opacity-50 group-hover:opacity-80'
                      )}
                    />
                    <span className="flex-1 truncate">{comp.label}</span>
                    {isActive && (
                      <CheckCircleIcon className="h-3 w-3 shrink-0 text-white/50" aria-hidden="true" />
                    )}
                  </button>
                );
              })}
            </div>
          ))
        )}
      </nav>

      {/* Footer */}
      <div className="px-4 py-3 border-t border-white/10">
        {/* Layout Patterns Links */}
        <div className="mb-3">
          <div className="flex items-center gap-2 mb-2">
            <RectangleGroupIcon className="h-3.5 w-3.5 text-white/40" />
            <span className="text-xs font-semibold text-white/40 uppercase tracking-wider">Layout Patterns</span>
          </div>
          {[
            { href: '/component-showcase/admin-dashboard', label: 'Admin Dashboard' },
            { href: '/component-showcase/profile-page', label: 'Profile Page' },
            { href: '/component-showcase/list-view', label: 'List View' },
          ].map(link => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center gap-2 px-2 py-1.5 text-xs text-white/60 hover:text-white hover:bg-white/8 rounded-md transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
              <span className="flex-1 truncate">{link.label}</span>
              <ArrowTopRightOnSquareIcon className="h-3 w-3 shrink-0 text-white/30" />
            </a>
          ))}
        </div>
        <p className="text-xs text-white/25 leading-relaxed">
          Built with Next.js + Tailwind CSS.<br />
          MIT License © 2026 DesignSystem.
        </p>
      </div>
    </aside>
  );

  return (
    <div className="flex h-screen overflow-hidden bg-white font-sans">
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex">
        <SidebarContent />
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full z-50 flex">
            <SidebarContent />
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Topbar */}
        <header className="h-14 flex items-center gap-3 px-4 sm:px-6 border-b border-[#d7d7d7] bg-white shrink-0 z-10">
          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-1.5 rounded-md text-[#808080] hover:text-[#1e1e1e] hover:bg-gray-100 transition-colors"
            aria-label="Open navigation"
          >
            <Bars3Icon className="h-5 w-5" />
          </button>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[#808080] text-sm">Design System</span>
              <span className="text-[#d7d7d7]">/</span>
              <span className="text-[#1e1e1e] font-semibold text-sm">All Components</span>
              <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700 border border-green-200">
                {TOTAL} components
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden md:flex items-center gap-1.5 text-xs text-[#808080]">
              <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
              All stable
            </span>
          </div>
        </header>

        {/* Scrollable content */}
        <main
          ref={mainRef}
          className="flex-1 overflow-y-auto scrollbar-thin"
          id="main-content"
        >
          {/* Hero banner */}
          <div className="bg-gradient-to-br from-[#000040] via-[#000060] to-[#000080] text-white px-6 sm:px-10 py-12">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-white/10 text-white/70 border border-white/10">v1.0.0</span>
                <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-green-500/20 text-green-300 border border-green-500/20">Stable</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold mb-3 leading-tight">
                Design System
              </h1>
              <p className="text-white/60 text-base leading-relaxed max-w-2xl">
                A complete library of {TOTAL} production-ready UI components built with TypeScript, Tailwind CSS, and class-variance-authority. Every component is fully accessible, keyboard navigable, and ships with multiple variants.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                {NAV_CATEGORIES.map(cat => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => scrollToSection(cat.components[0].id)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20 text-white/70 hover:text-white text-xs font-medium transition-all border border-white/10"
                  >
                    <span className={cat.color}>{cat.icon}</span>
                    {cat.label}
                    <span className="text-white/40">({cat.components.length})</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* All sections */}
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-8 space-y-0">
            {NAV_CATEGORIES.map((cat, catIdx) => (
              <div key={cat.id}>
                {/* Category divider */}
                <div className="flex items-center gap-4 py-8">
                  <div className={cn('flex items-center gap-2 shrink-0', cat.color)}>
                    {cat.icon}
                    <span className="text-xs font-bold uppercase tracking-widest text-[#808080]">{cat.label}</span>
                  </div>
                  <div className="flex-1 h-px bg-[#d7d7d7]" />
                  <span className="text-xs text-[#808080] shrink-0">{cat.components.length} components</span>
                </div>

                {/* Components in this category */}
                {cat.components.map((comp, compIdx) => {
                  const SectionComponent = SECTION_MAP[comp.id];
                  return (
                    <div
                      key={comp.id}
                      ref={el => { sectionRefs.current[comp.id] = el; }}
                      className={cn(
                        'scroll-mt-20',
                        compIdx < cat.components.length - 1 && 'mb-16 pb-16 border-b border-[#d7d7d7]'
                      )}
                    >
                      {SectionComponent ? (
                        <SectionComponent />
                      ) : (
                        <div className="py-12 text-center text-[#808080] text-sm">
                          Section for &ldquo;{comp.label}&rdquo; coming soon.
                        </div>
                      )}
                    </div>
                  );
                })}

                {catIdx < NAV_CATEGORIES.length - 1 && (
                  <div className="h-8" />
                )}
              </div>
            ))}

            {/* Footer */}
            <div className="border-t border-[#d7d7d7] mt-16 pt-10 pb-16 text-center">
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="h-6 w-6 rounded-md bg-[#000080] text-white text-[10px] font-bold flex items-center justify-center">DS</div>
                <span className="font-semibold text-[#1e1e1e]">DesignSystem</span>
                <span className="text-[#808080] text-sm">v1.0.0</span>
              </div>
              <p className="text-sm text-[#808080] max-w-md mx-auto leading-relaxed">
                {TOTAL} components · TypeScript · Tailwind CSS · WCAG 2.1 AA · MIT License
              </p>
              <p className="text-xs text-[#b0b0b0] mt-2">© 2026 DesignSystem. Built with Next.js.</p>
            </div>
          </div>
        </main>

        {/* Scroll to top */}
        {showScrollTop && (
          <button
            type="button"
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 h-10 w-10 rounded-full bg-[#000080] text-white shadow-lg hover:bg-[#0000a0] transition-all flex items-center justify-center"
            aria-label="Scroll to top"
          >
            <ChevronUpIcon className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  );
}
