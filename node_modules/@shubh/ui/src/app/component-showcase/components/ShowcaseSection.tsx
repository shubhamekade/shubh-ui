'use client';

import React, { useState } from 'react';
import {
  ClipboardDocumentIcon as Copy,
  ClipboardDocumentCheckIcon as Check,
  CodeBracketIcon as Code2,
  EyeIcon as Eye,
  ChevronDownIcon as ChevronDown,
} from '@heroicons/react/24/outline';
import { cn } from '@/utils/cn';

interface PropRow {
  name: string;
  type: string;
  default?: string;
  required?: boolean;
  description: string;
}

interface ShowcaseSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  code?: string;
  props?: PropRow[];
  className?: string;
  /** Preview background style */
  previewBg?: 'dots' | 'white' | 'gray' | 'navy' | 'none';
  /** Compact preview — less padding */
  compact?: boolean;
}

export default function ShowcaseSection({
  title,
  description,
  children,
  code,
  props,
  className,
  previewBg = 'dots',
  compact = false,
}: ShowcaseSectionProps) {
  const [tab, setTab] = useState<'preview' | 'code'>('preview');
  const [copied, setCopied] = useState(false);
  const [propsOpen, setPropsOpen] = useState(false);

  const handleCopy = () => {
    if (!code) return;
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const previewBgClass = {
    dots:  'preview-bg bg-gray-50',
    white: 'bg-white',
    gray:  'bg-gray-100',
    navy:  'bg-[#000040]',
    none:  '',
  }[previewBg];

  return (
    <div className={cn('mb-10', className)}>
      {/* Section header */}
      <div className="mb-3">
        <h3 className="text-base font-semibold text-[#1e1e1e]">{title}</h3>
        {description && (
          <p className="text-sm text-[#808080] mt-0.5 leading-relaxed">{description}</p>
        )}
      </div>

      {/* Tab bar */}
      <div className="border border-[#d7d7d7] rounded-lg overflow-hidden">
        <div className="flex items-center border-b border-[#d7d7d7] bg-gray-50 px-3 gap-0.5">
          <button
            type="button"
            onClick={() => setTab('preview')}
            className={cn(
              'flex items-center gap-1.5 px-3 py-2.5 text-xs font-medium border-b-2 transition-colors duration-100',
              tab === 'preview' ?'border-[#000080] text-[#000080]' :'border-transparent text-[#808080] hover:text-[#1e1e1e]'
            )}
          >
            <Eye className="h-3.5 w-3.5" />
            Preview
          </button>
          {code && (
            <button
              type="button"
              onClick={() => setTab('code')}
              className={cn(
                'flex items-center gap-1.5 px-3 py-2.5 text-xs font-medium border-b-2 transition-colors duration-100',
                tab === 'code' ?'border-[#000080] text-[#000080]' :'border-transparent text-[#808080] hover:text-[#1e1e1e]'
              )}
            >
              <Code2 className="h-3.5 w-3.5" />
              Code
            </button>
          )}
          {code && (
            <button
              type="button"
              onClick={handleCopy}
              className={cn(
                'ml-auto flex items-center gap-1.5 h-7 px-2.5 rounded-md text-xs font-medium transition-all duration-150',
                copied
                  ? 'bg-green-50 text-green-700' :'text-[#808080] hover:text-[#1e1e1e] hover:bg-gray-200'
              )}
              aria-label="Copy code"
            >
              {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
              {copied ? 'Copied' : 'Copy'}
            </button>
          )}
        </div>

        {/* Preview panel */}
        {tab === 'preview' && (
          <div
            className={cn(
              'w-full flex flex-wrap items-center justify-center gap-4',
              compact ? 'p-6' : 'p-8',
              previewBgClass
            )}
          >
            {children}
          </div>
        )}

        {/* Code panel */}
        {tab === 'code' && code && (
          <div className="code-block rounded-none overflow-x-auto">
            <pre className="text-xs leading-relaxed">
              <code>{code}</code>
            </pre>
          </div>
        )}
      </div>

      {/* Props table */}
      {props && props.length > 0 && (
        <div className="mt-3 border border-[#d7d7d7] rounded-lg overflow-hidden">
          <button
            type="button"
            onClick={() => setPropsOpen(v => !v)}
            className="w-full flex items-center justify-between px-4 py-2.5 bg-gray-50 text-sm font-medium text-[#1e1e1e] hover:bg-gray-100 transition-colors"
          >
            <span>Props reference</span>
            <ChevronDown
              className={cn('h-4 w-4 text-[#808080] transition-transform duration-200', propsOpen && 'rotate-180')}
            />
          </button>
          {propsOpen && (
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-t border-[#d7d7d7] bg-gray-50/50">
                    <th className="px-4 py-2 text-left font-semibold text-[#808080] uppercase tracking-wide whitespace-nowrap">Prop</th>
                    <th className="px-4 py-2 text-left font-semibold text-[#808080] uppercase tracking-wide whitespace-nowrap">Type</th>
                    <th className="px-4 py-2 text-left font-semibold text-[#808080] uppercase tracking-wide whitespace-nowrap">Default</th>
                    <th className="px-4 py-2 text-left font-semibold text-[#808080] uppercase tracking-wide">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {props.map((p, i) => (
                    <tr key={p.name} className={cn('border-t border-[#d7d7d7]', i % 2 === 1 && 'bg-gray-50/40')}>
                      <td className="px-4 py-2 font-mono font-medium text-[#000080] whitespace-nowrap">
                        {p.name}
                        {p.required && <span className="text-red-500 ml-0.5">*</span>}
                      </td>
                      <td className="px-4 py-2 font-mono text-[#808080] whitespace-nowrap">{p.type}</td>
                      <td className="px-4 py-2 font-mono text-[#808080] whitespace-nowrap">{p.default || '—'}</td>
                      <td className="px-4 py-2 text-[#808080] leading-relaxed">{p.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
}