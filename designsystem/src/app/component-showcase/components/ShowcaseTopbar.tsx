'use client';

import React, { useState } from 'react';
import {
  Bars3Icon as Menu,
  ClipboardDocumentIcon as Copy,
  ClipboardDocumentCheckIcon as Check,
  CodeBracketIcon as Github,
  BookOpenIcon as BookOpen,
  SunIcon,
  MoonIcon,
} from '@heroicons/react/24/outline';
import { cn } from '@/utils/cn';
import { type ComponentEntry } from './ComponentShowcaseClient';
import { useShowcaseTheme } from '../context/ThemeContext';

const statusColors: Record<string, string> = {
  stable: 'bg-green-100 text-green-700 border-green-200',
  beta: 'bg-amber-100 text-amber-700 border-amber-200',
  deprecated: 'bg-red-100 text-red-700 border-red-200',
};

interface ShowcaseTopbarProps {
  activeEntry?: ComponentEntry;
  onMenuClick: () => void;
}

export default function ShowcaseTopbar({ activeEntry, onMenuClick }: ShowcaseTopbarProps) {
  const [copied, setCopied] = useState(false);
  const { theme, toggleTheme } = useShowcaseTheme();
  const isNavy = theme === 'navy';

  const handleCopyImport = () => {
    if (!activeEntry) return;
    const importStr = `import { ${activeEntry.label} } from "@shubh/ui";`;
    navigator.clipboard.writeText(importStr).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <header
      className={cn(
        'h-14 flex items-center gap-3 px-4 sm:px-6 shrink-0 border-b transition-colors duration-200',
        isNavy ? 'bg-[#000060] border-white/10' : 'bg-white border-[#d7d7d7]'
      )}
    >
      {/* Mobile menu toggle */}
      <button
        type="button"
        onClick={onMenuClick}
        className={cn(
          'lg:hidden p-1.5 rounded-md transition-colors',
          isNavy
            ? 'text-white/60 hover:text-white hover:bg-white/10'
            : 'text-[#808080] hover:text-[#1e1e1e] hover:bg-gray-100'
        )}
        aria-label="Open navigation"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Breadcrumb */}
      <div className="flex-1 min-w-0">
        {activeEntry ? (
          <div className="flex items-center gap-2 flex-wrap">
            <span className={cn('text-sm', isNavy ? 'text-white/50' : 'text-[#808080]')}>
              Components
            </span>
            <span className={cn(isNavy ? 'text-white/20' : 'text-[#d7d7d7]')}>/</span>
            <span className={cn('font-semibold text-sm', isNavy ? 'text-white' : 'text-[#1e1e1e]')}>
              {activeEntry.label}
            </span>
            {activeEntry.status && (
              <span
                className={cn(
                  'inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border',
                  statusColors[activeEntry.status]
                )}
              >
                {activeEntry.status}
              </span>
            )}
          </div>
        ) : (
          <span className={cn('font-semibold text-sm', isNavy ? 'text-white' : 'text-[#1e1e1e]')}>
            Component Library
          </span>
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2">
        {activeEntry && (
          <button
            type="button"
            onClick={handleCopyImport}
            title={`Copy import statement for ${activeEntry.label}`}
            className={cn(
              'hidden sm:flex items-center gap-1.5 h-8 px-3 rounded-md text-xs font-medium border transition-all duration-150',
              copied
                ? 'bg-green-50 text-green-700 border-green-200'
                : isNavy
                  ? 'bg-white/10 text-white/60 border-white/10 hover:text-white hover:border-white/30 hover:bg-white/15'
                  : 'bg-gray-50 text-[#808080] border-[#d7d7d7] hover:text-[#1e1e1e] hover:border-[#b0b0b0] hover:bg-white'
            )}
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                Copy import
              </>
            )}
          </button>
        )}

        {/* Theme toggle */}
        <button
          type="button"
          onClick={toggleTheme}
          title={isNavy ? 'Switch to light theme' : 'Switch to navy theme'}
          aria-label={isNavy ? 'Switch to light theme' : 'Switch to navy theme'}
          className={cn(
            'p-1.5 rounded-md transition-colors',
            isNavy
              ? 'text-white/60 hover:text-white hover:bg-white/10'
              : 'text-[#808080] hover:text-[#1e1e1e] hover:bg-gray-100'
          )}
        >
          {isNavy ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
        </button>

        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'p-1.5 rounded-md transition-colors',
            isNavy
              ? 'text-white/60 hover:text-white hover:bg-white/10'
              : 'text-[#808080] hover:text-[#1e1e1e] hover:bg-gray-100'
          )}
          aria-label="View on GitHub"
        >
          <Github className="h-4 w-4" />
        </a>
        <a
          href="#"
          className={cn(
            'p-1.5 rounded-md transition-colors',
            isNavy
              ? 'text-white/60 hover:text-white hover:bg-white/10'
              : 'text-[#808080] hover:text-[#1e1e1e] hover:bg-gray-100'
          )}
          aria-label="Documentation"
        >
          <BookOpen className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}
