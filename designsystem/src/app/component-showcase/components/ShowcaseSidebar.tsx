'use client';

import React from 'react';
import {
  MagnifyingGlassIcon as Search,
  XMarkIcon as X,
  ArchiveBoxIcon as Package,
  ChevronRightIcon as ChevronRight,
} from '@heroicons/react/24/outline';
import { cn } from '@/utils/cn';
import { type ComponentCategory } from './ComponentShowcaseClient';
import { useShowcaseTheme } from '../context/ThemeContext';

interface ShowcaseSidebarProps {
  categories: ComponentCategory[];
  activeComponent: string;
  onSelect: (id: string) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  totalComponents: number;
  stableCount: number;
  className?: string;
  mobile?: boolean;
  onClose?: () => void;
}

const statusDot: Record<string, string> = {
  stable:     'bg-green-400',
  beta:       'bg-amber-400',
  deprecated: 'bg-red-400',
};

export default function ShowcaseSidebar({
  categories,
  activeComponent,
  onSelect,
  searchQuery,
  onSearchChange,
  totalComponents,
  stableCount,
  className,
  mobile,
  onClose,
}: ShowcaseSidebarProps) {
  const { theme } = useShowcaseTheme();
  const isNavy = theme === 'navy';

  return (
    <aside
      className={cn(
        'w-64 flex-col flex-shrink-0 overflow-hidden transition-colors duration-200',
        isNavy
          ? 'bg-[#000040] text-white'
          : 'bg-[#f5f5f5] text-[#1e1e1e] border-r border-[#e0e0e0]',
        className
      )}
    >
      {/* Logo / Header */}
      <div
        className={cn(
          'px-4 pt-5 pb-4 flex items-center justify-between border-b',
          isNavy ? 'border-white/10' : 'border-[#e0e0e0]'
        )}
      >
        <div className="flex items-center gap-2.5">
          <div className={cn('h-7 w-7 rounded-md text-xs font-bold flex items-center justify-center shrink-0', isNavy ? 'bg-white/10 text-white' : 'bg-[#000080] text-white')}>DS</div>
          <div>
            <span className={cn('font-semibold text-sm block leading-tight', isNavy ? 'text-white' : 'text-[#1e1e1e]')}>
              DesignSystem
            </span>
            <span className={cn('text-xs leading-tight', isNavy ? 'text-white/40' : 'text-[#808080]')}>
              v1.0.0
            </span>
          </div>
        </div>
        {mobile && onClose && (
          <button
            type="button"
            onClick={onClose}
            className={cn(
              'p-1 rounded-md transition-colors',
              isNavy
                ? 'text-white/50 hover:text-white hover:bg-white/10' :'text-[#808080] hover:text-[#1e1e1e] hover:bg-gray-200'
            )}
            aria-label="Close sidebar"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Stats row */}
      <div
        className={cn(
          'px-4 py-3 flex items-center gap-4 border-b',
          isNavy ? 'border-white/10' : 'border-[#e0e0e0]'
        )}
      >
        <div className="text-center">
          <span className={cn('block text-lg font-bold tabular-nums', isNavy ? 'text-white' : 'text-[#1e1e1e]')}>
            {totalComponents}
          </span>
          <span className={cn('text-xs', isNavy ? 'text-white/40' : 'text-[#808080]')}>Components</span>
        </div>
        <div className={cn('w-px h-8', isNavy ? 'bg-white/10' : 'bg-[#e0e0e0]')} />
        <div className="text-center">
          <span className="block text-lg font-bold text-green-500 tabular-nums">{stableCount}</span>
          <span className={cn('text-xs', isNavy ? 'text-white/40' : 'text-[#808080]')}>Stable</span>
        </div>
        <div className={cn('w-px h-8', isNavy ? 'bg-white/10' : 'bg-[#e0e0e0]')} />
        <div className="text-center">
          <span className="block text-lg font-bold text-amber-500 tabular-nums">
            {totalComponents - stableCount}
          </span>
          <span className={cn('text-xs', isNavy ? 'text-white/40' : 'text-[#808080]')}>Beta</span>
        </div>
      </div>

      {/* Search */}
      <div
        className={cn(
          'px-3 py-3 border-b',
          isNavy ? 'border-white/10' : 'border-[#e0e0e0]'
        )}
      >
        <div className="relative">
          <Search
            className={cn(
              'absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 pointer-events-none',
              isNavy ? 'text-white/40' : 'text-[#808080]'
            )}
          />
          <input
            type="search"
            placeholder="Search components…"
            value={searchQuery}
            onChange={e => onSearchChange(e.target.value)}
            className={cn(
              'w-full h-8 pl-8 pr-3 text-sm rounded-md focus:outline-none transition-all',
              isNavy
                ? 'bg-white/10 border border-white/10 text-white placeholder:text-white/30 focus:border-white/30 focus:bg-white/15' :'bg-white border border-[#d7d7d7] text-[#1e1e1e] placeholder:text-[#b0b0b0] focus:border-[#000080]'
            )}
            aria-label="Search components"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange('')}
              className={cn(
                'absolute right-2.5 top-1/2 -translate-y-1/2 transition-colors',
                isNavy ? 'text-white/40 hover:text-white' : 'text-[#808080] hover:text-[#1e1e1e]'
              )}
              aria-label="Clear search"
            >
              <X className="h-3 w-3" />
            </button>
          )}
        </div>
      </div>

      {/* Nav items */}
      <nav
        className={cn('flex-1 overflow-y-auto py-3', isNavy ? 'navy-scrollbar' : 'scrollbar-thin')}
        aria-label="Component categories"
      >
        {categories.length === 0 ? (
          <div className="px-4 py-8 text-center">
            <Package className={cn('h-8 w-8 mx-auto mb-2', isNavy ? 'text-white/20' : 'text-[#d7d7d7]')} />
            <p className={cn('text-xs', isNavy ? 'text-white/40' : 'text-[#808080]')}>
              No components match "{searchQuery}"
            </p>
          </div>
        ) : (
          categories.map(cat => (
            <div key={cat.id} className="mb-4">
              {/* Category header */}
              <div className="flex items-center gap-2 px-4 mb-1">
                <span className={cn(isNavy ? 'text-white/40' : 'text-[#808080]')}>{cat.icon}</span>
                <span
                  className={cn(
                    'text-xs font-semibold uppercase tracking-wider',
                    isNavy ? 'text-white/40' : 'text-[#808080]'
                  )}
                >
                  {cat.label}
                </span>
                <span
                  className={cn(
                    'ml-auto text-xs tabular-nums',
                    isNavy ? 'text-white/25' : 'text-[#b0b0b0]'
                  )}
                >
                  {cat.components.length}
                </span>
              </div>

              {/* Component items */}
              {cat.components.map(comp => {
                const isActive = activeComponent === comp.id;
                return (
                  <button
                    key={comp.id}
                    type="button"
                    onClick={() => onSelect(comp.id)}
                    className={cn(
                      'w-full flex items-center gap-2.5 px-4 py-2 text-sm transition-all duration-150 text-left group',
                      isNavy
                        ? isActive
                          ? 'bg-white/15 text-white font-medium' :'text-white/60 hover:text-white hover:bg-white/8'
                        : isActive
                          ? 'bg-[#000080]/10 text-[#000080] font-medium'
                          : 'text-[#555] hover:text-[#1e1e1e] hover:bg-black/5'
                    )}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span
                      className={cn(
                        'w-1.5 h-1.5 rounded-full shrink-0',
                        statusDot[comp.status],
                        !isActive && 'opacity-50 group-hover:opacity-80'
                      )}
                      title={`Status: ${comp.status}`}
                    />
                    <span className="flex-1 truncate">{comp.label}</span>
                    {isActive && (
                      <ChevronRight
                        className={cn(
                          'h-3 w-3 shrink-0',
                          isNavy ? 'text-white/50' : 'text-[#000080]/50'
                        )}
                        aria-hidden="true"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          ))
        )}
      </nav>

      {/* Footer */}
      <div
        className={cn(
          'px-4 py-3 border-t',
          isNavy ? 'border-white/10' : 'border-[#e0e0e0]'
        )}
      >
        <p className={cn('text-xs leading-relaxed', isNavy ? 'text-white/25' : 'text-[#b0b0b0]')}>
          Built with Next.js + Tailwind CSS.<br />
          MIT License © 2026 DesignSystem.
        </p>
      </div>
    </aside>
  );
}