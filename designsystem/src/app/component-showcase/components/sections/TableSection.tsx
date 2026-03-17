'use client';

import React, { useState } from 'react';
import Table from '@/components/Table';
import Badge from '@/components/Badge';
import Button from '@/components/Button';
import ShowcaseSection from '../ShowcaseSection';
import SectionHeader from '../SectionHeader';
import {
  PencilIcon as Edit,
  TrashIcon as Trash2,
  ArrowTopRightOnSquareIcon as ExternalLink,
} from '@heroicons/react/24/outline';
import Tooltip from '@/components/Tooltip';

type ComponentRow = {
  name: string;
  category: string;
  status: 'stable' | 'beta' | 'deprecated';
  variants: number;
  version: string;
  lastUpdated: string;
  accessible: boolean;
};

const mockData: ComponentRow[] = [
  {
    name: 'Button',
    category: 'Form',
    status: 'stable',
    variants: 9,
    version: '1.4.2',
    lastUpdated: '12 Mar 2026',
    accessible: true,
  },
  {
    name: 'Input',
    category: 'Form',
    status: 'stable',
    variants: 4,
    version: '1.3.0',
    lastUpdated: '10 Mar 2026',
    accessible: true,
  },
  {
    name: 'Modal',
    category: 'Overlay',
    status: 'stable',
    variants: 5,
    version: '1.2.1',
    lastUpdated: '08 Mar 2026',
    accessible: true,
  },
  {
    name: 'Select',
    category: 'Form',
    status: 'stable',
    variants: 3,
    version: '1.1.0',
    lastUpdated: '05 Mar 2026',
    accessible: true,
  },
  {
    name: 'Tabs',
    category: 'Navigation',
    status: 'stable',
    variants: 4,
    version: '1.0.4',
    lastUpdated: '02 Mar 2026',
    accessible: true,
  },
  {
    name: 'Tooltip',
    category: 'Overlay',
    status: 'stable',
    variants: 2,
    version: '1.0.2',
    lastUpdated: '28 Feb 2026',
    accessible: true,
  },
  {
    name: 'Accordion',
    category: 'Utilities',
    status: 'stable',
    variants: 4,
    version: '1.0.1',
    lastUpdated: '25 Feb 2026',
    accessible: true,
  },
  {
    name: 'Badge',
    category: 'Data Display',
    status: 'stable',
    variants: 10,
    version: '1.0.0',
    lastUpdated: '20 Feb 2026',
    accessible: true,
  },
  {
    name: 'DatePicker',
    category: 'Form',
    status: 'beta',
    variants: 2,
    version: '0.9.1',
    lastUpdated: '15 Feb 2026',
    accessible: false,
  },
  {
    name: 'CommandMenu',
    category: 'Utilities',
    status: 'beta',
    variants: 1,
    version: '0.8.0',
    lastUpdated: '10 Feb 2026',
    accessible: false,
  },
  {
    name: 'DataGrid',
    category: 'Data Display',
    status: 'deprecated',
    variants: 1,
    version: '0.5.0',
    lastUpdated: '01 Jan 2026',
    accessible: false,
  },
];

const statusVariant: Record<string, 'success' | 'warning' | 'destructive'> = {
  stable: 'success',
  beta: 'warning',
  deprecated: 'destructive',
};

export default function TableSection() {
  const [sortKey, setSortKey] = useState<string>('name');
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');

  const handleSort = (key: string) => {
    if (sortKey === key) setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'));
    else {
      setSortKey(key);
      setSortDir('asc');
    }
  };

  const sorted = [...mockData].sort((a, b) => {
    const av = (a as Record<string, unknown>)[sortKey];
    const bv = (b as Record<string, unknown>)[sortKey];
    if (av === bv) return 0;
    const cmp = String(av) < String(bv) ? -1 : 1;
    return sortDir === 'asc' ? cmp : -cmp;
  });

  const columns = [
    {
      key: 'name',
      header: 'Component',
      sortable: true,
      cell: (row: ComponentRow) => (
        <span className="font-medium text-[#1e1e1e] font-mono text-xs">{row.name}</span>
      ),
    },
    {
      key: 'category',
      header: 'Category',
      sortable: true,
      cell: (row: ComponentRow) => <span className="text-sm text-[#808080]">{row.category}</span>,
    },
    {
      key: 'status',
      header: 'Status',
      sortable: true,
      cell: (row: ComponentRow) => (
        <Badge variant={statusVariant[row.status]} size="sm" dot>
          {row.status}
        </Badge>
      ),
    },
    {
      key: 'variants',
      header: 'Variants',
      sortable: true,
      align: 'center' as const,
      cell: (row: ComponentRow) => (
        <span className="text-sm tabular-nums text-[#1e1e1e]">{row.variants}</span>
      ),
    },
    {
      key: 'version',
      header: 'Version',
      sortable: true,
      cell: (row: ComponentRow) => (
        <span className="font-mono text-xs text-[#808080]">{row.version}</span>
      ),
    },
    {
      key: 'lastUpdated',
      header: 'Last updated',
      sortable: true,
      cell: (row: ComponentRow) => (
        <span className="text-sm text-[#808080]">{row.lastUpdated}</span>
      ),
    },
    {
      key: 'accessible',
      header: 'A11y',
      align: 'center' as const,
      cell: (row: ComponentRow) => (
        <span className={row.accessible ? 'text-green-500' : 'text-red-400'}>
          {row.accessible ? '✓' : '✗'}
        </span>
      ),
    },
    {
      key: 'actions',
      header: '',
      cell: (_row: ComponentRow) => (
        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <Tooltip content="View docs" placement="top">
            <Button size="icon-sm" variant="ghost" aria-label="View docs">
              <ExternalLink className="h-3.5 w-3.5" />
            </Button>
          </Tooltip>
          <Tooltip content="Edit component" placement="top">
            <Button size="icon-sm" variant="ghost" aria-label="Edit">
              <Edit className="h-3.5 w-3.5" />
            </Button>
          </Tooltip>
          <Tooltip content="Delete component — cannot be undone" placement="top">
            <Button
              size="icon-sm"
              variant="ghost"
              aria-label="Delete"
              className="text-red-500 hover:bg-red-50"
            >
              <Trash2 className="h-3.5 w-3.5" />
            </Button>
          </Tooltip>
        </div>
      ),
    },
  ];

  return (
    <div>
      <SectionHeader
        title="Table"
        description="Structured data grid with sortable columns, row hover, striped mode, loading skeleton rows, and empty state. Generic TypeScript interface for any row type."
        importPath={`import Table from "@shubh/ui/Table"
;`}
      />

      <ShowcaseSection
        title="Full Data Table"
        description="Sortable columns, status badges, icon action buttons on row hover, striped rows."
        previewBg="white"
        compact
        code={`<Table
  columns={columns}
  data={data}
  keyExtractor={(row) => row.name}
  sortKey={sortKey}
  sortDir={sortDir}
  onSort={handleSort}
  striped
  hoverable
/>`}
        props={[
          {
            name: 'columns',
            type: 'TableColumn<T>[]',
            required: true,
            description: 'Column definitions with key, header, optional cell renderer',
          },
          { name: 'data', type: 'T[]', required: true, description: 'Array of row data objects' },
          {
            name: 'keyExtractor',
            type: '(row: T, index: number) => string',
            required: true,
            description: 'Unique key per row',
          },
          { name: 'sortKey', type: 'string', description: 'Currently sorted column key' },
          { name: 'sortDir', type: "'asc' | 'desc'", description: 'Sort direction' },
          {
            name: 'onSort',
            type: '(key: string) => void',
            description: 'Called when sortable header is clicked',
          },
          { name: 'striped', type: 'boolean', description: 'Alternating row background' },
          {
            name: 'hoverable',
            type: 'boolean',
            default: 'true',
            description: 'Row hover highlight',
          },
          { name: 'loading', type: 'boolean', description: 'Show skeleton rows instead of data' },
          { name: 'emptyMessage', type: 'string', description: 'Message when data array is empty' },
        ]}
      >
        <div className="w-full">
          <Table
            columns={columns}
            data={sorted}
            keyExtractor={(row) => row.name}
            sortKey={sortKey}
            sortDir={sortDir}
            onSort={handleSort}
            striped
            hoverable
          />
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Loading State"
        description="loading prop replaces data rows with animated skeleton placeholders."
        previewBg="white"
        compact
      >
        <div className="w-full">
          <Table columns={columns.slice(0, 5)} data={[]} keyExtractor={(row) => row.name} loading />
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Empty State"
        description="When data is an empty array, the emptyMessage is shown spanning all columns."
        previewBg="white"
        compact
      >
        <div className="w-full">
          <Table
            columns={columns.slice(0, 5)}
            data={[]}
            keyExtractor={(row) => row.name}
            emptyMessage="No components match your current filters."
          />
        </div>
      </ShowcaseSection>
    </div>
  );
}
