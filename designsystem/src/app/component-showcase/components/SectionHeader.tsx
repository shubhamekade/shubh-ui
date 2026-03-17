import React from 'react';

interface SectionHeaderProps {
  title: string;
  description: string;
  importPath?: string;
}

export default function SectionHeader({ title, description, importPath }: SectionHeaderProps) {
  return (
    <div className="mb-8 pb-6 border-b border-[#d7d7d7]">
      <h2 className="text-2xl font-semibold text-[#1e1e1e] mb-2">{title}</h2>
      <p className="text-[#808080] text-sm leading-relaxed max-w-2xl">{description}</p>
      {importPath && (
        <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 bg-[#dae8ff] rounded-md border border-[#b3d4ff]">
          <span className="text-xs font-mono text-[#000080]">{importPath}</span>
        </div>
      )}
    </div>
  );
}
