'use client';

import React from 'react';
import ServerDataTable, { FetchParams, FetchResult, ColumnDef } from '@/components/ServerDataTable';
import ShowcaseSection from '../ShowcaseSection';
import SectionHeader from '../SectionHeader';
import { useShowcaseTheme } from '@/app/component-showcase/context/ThemeContext';

// ─── Mock Data ────────────────────────────────────────────────────────────────

type RequestRow = {
  id: string;
  date: string;
  name: string;
  department: string;
  requestType: string;
  amount: number;
  appliedOn: string;
  status: 'active' | 'closed';
};

const ALL_ROWS: RequestRow[] = [
  { id: '1',  date: '01/01/2025', name: 'Employee 1', department: 'Department 1', requestType: 'Office supplies', amount: 1200,  appliedOn: '28 Dec, 2024', status: 'active' },
  { id: '2',  date: '03/01/2025', name: 'Employee 2', department: 'Department 2', requestType: 'Gift voucher',    amount: 5000,  appliedOn: '30 Dec, 2024', status: 'active' },
  { id: '3',  date: '07/01/2025', name: 'Employee 3', department: 'Department 2', requestType: 'Office supplies', amount: 32000, appliedOn: '05 Jan, 2025', status: 'active' },
  { id: '4',  date: '16/01/2025', name: 'Employee 4', department: 'Department 2', requestType: 'Gift voucherce',  amount: 1500,  appliedOn: '14 Jan, 2025', status: 'active' },
  { id: '5',  date: '24/01/2025', name: 'Employee 5', department: 'Department 2', requestType: 'Office supplies', amount: 2200,  appliedOn: '22 Jan, 2025', status: 'active' },
  { id: '6',  date: '02/02/2025', name: 'Employee 6', department: 'Department 2', requestType: 'Office supplies', amount: 800,   appliedOn: '01 Feb, 2025', status: 'active' },
  { id: '7',  date: '14/02/2025', name: 'Employee 7', department: 'Department 2', requestType: 'Gift voucher',    amount: 1800,  appliedOn: '12 Feb, 2025', status: 'active' },
  { id: '8',  date: '20/02/2025', name: 'Employee 8', department: 'Department 3', requestType: 'Travel',          amount: 12000, appliedOn: '18 Feb, 2025', status: 'active' },
  { id: '9',  date: '05/03/2025', name: 'Employee 9', department: 'Department 1', requestType: 'Office supplies', amount: 3400,  appliedOn: '03 Mar, 2025', status: 'active' },
  { id: '10', date: '12/03/2025', name: 'Employee 10', department: 'Department 3', requestType: 'Travel',         amount: 8500,  appliedOn: '10 Mar, 2025', status: 'active' },
  { id: '11', date: '15/03/2025', name: 'Employee 11', department: 'Department 1', requestType: 'Gift voucher',   amount: 2000,  appliedOn: '13 Mar, 2025', status: 'active' },
  { id: '12', date: '18/03/2025', name: 'Employee 12', department: 'Department 4', requestType: 'Office supplies',amount: 950,   appliedOn: '16 Mar, 2025', status: 'active' },
  { id: 'c1', date: '10/11/2024', name: 'Employee A',  department: 'Department 1', requestType: 'Travel',         amount: 15000, appliedOn: '08 Nov, 2024', status: 'closed' },
  { id: 'c2', date: '22/11/2024', name: 'Employee B',  department: 'Department 3', requestType: 'Office supplies',amount: 600,   appliedOn: '20 Nov, 2024', status: 'closed' },
  { id: 'c3', date: '05/12/2024', name: 'Employee C',  department: 'Department 2', requestType: 'Gift voucher',   amount: 3000,  appliedOn: '03 Dec, 2024', status: 'closed' },
  { id: 'c4', date: '18/12/2024', name: 'Employee D',  department: 'Department 4', requestType: 'Travel',         amount: 22000, appliedOn: '16 Dec, 2024', status: 'closed' },
];

// Simulate server-side fetch with delay
async function mockFetchData(params: FetchParams): Promise<FetchResult<RequestRow>> {
  await new Promise(res => setTimeout(res, 600));

  let rows = ALL_ROWS.filter(r => r.status === params.status);

  // Search
  if (params.search) {
    const q = params.search.toLowerCase();
    rows = rows.filter(r =>
      r.name.toLowerCase().includes(q) ||
      r.department.toLowerCase().includes(q) ||
      r.requestType.toLowerCase().includes(q) ||
      r.date.includes(q)
    );
  }

  // Sort
  if (params.sortField && params.sortDirection) {
    const dir = params.sortDirection === 'asc' ? 1 : -1;
    rows = [...rows].sort((a, b) => {
      const av = String((a as Record<string, unknown>)[params.sortField!] ?? '');
      const bv = String((b as Record<string, unknown>)[params.sortField!] ?? '');
      return av < bv ? -dir : av > bv ? dir : 0;
    });
  }

  const total = rows.length;
  const start = (params.page - 1) * params.pageSize;
  const data = rows.slice(start, start + params.pageSize);

  return { data, total };
}

// ─── Section Component ────────────────────────────────────────────────────────

export default function DataTableSection() {
  const { theme } = useShowcaseTheme();
  const cellTextClass = theme === 'navy' ? 'text-[#ddeeff]' : 'text-[#1e1e1e]';

  const columns: ColumnDef<RequestRow>[] = [
    {
      key: 'date',
      header: 'Date',
      sortable: true,
      cell: (row) => <span className={`text-sm ${cellTextClass}`}>{row.date}</span>,
    },
    {
      key: 'name',
      header: 'Name',
      sortable: true,
      cell: (row) => <span className={`text-sm ${cellTextClass}`}>{row.name}</span>,
    },
    {
      key: 'department',
      header: 'Department',
      sortable: true,
      cell: (row) => <span className={`text-sm ${cellTextClass}`}>{row.department}</span>,
    },
    {
      key: 'requestType',
      header: 'Request type',
      sortable: true,
      cell: (row) => <span className={`text-sm ${cellTextClass}`}>{row.requestType}</span>,
    },
    {
      key: 'amount',
      header: 'Amount',
      sortable: true,
      cell: (row) => (
        <span className={`text-sm ${cellTextClass} font-medium`}>
          ₹ {row.amount.toLocaleString('en-IN')}
        </span>
      ),
    },
  ];

  return (
    <div>
      <SectionHeader
        title="Server Data Table"
        description="Div-based data table with expandable rows, Active/Closed toggle, server-side pagination, search, and sorting. Accepts an async fetchData prop returning paginated results."
        importPath={`import ServerDataTable from "@shubh/ui/ServerDataTable"
;`}
      />

      <ShowcaseSection
        title="Live Demo — Server-Side Data Table"
        description="Toggle Active/Closed, search, click column headers to sort, and expand rows to see the note + Reject/Approve actions. All operations are server-side (simulated with 600ms delay)."
        previewBg="white"
        compact
        code={`<ServerDataTable
  fetchData={fetchData}
  columns={columns}
  keyExtractor={(row) => row.id}
  pageSize={5}
  appliedDateField="appliedOn"
  onApprove={(row, note) => console.log('Approved', row, note)}
  onReject={(row, note) => console.log('Rejected', row, note)}
/>`}
        props={[
          { name: 'fetchData', type: '(params: FetchParams) => Promise<FetchResult<T>>', required: true, description: 'Async function called on every page/search/sort/status change' },
          { name: 'columns', type: 'ColumnDef<T>[]', required: true, description: 'Column definitions with key, header, sortable flag, and optional cell renderer' },
          { name: 'keyExtractor', type: '(row: T) => string', required: true, description: 'Unique key per row for React reconciliation' },
          { name: 'pageSize', type: 'number', default: '10', description: 'Number of rows per page' },
          { name: 'appliedDateField', type: 'keyof T', description: 'Field name used to display "Applied on" date in expanded row' },
          { name: 'onApprove', type: '(row: T, note: string) => void', description: 'Called when Approve button is clicked in expanded row' },
          { name: 'onReject', type: '(row: T, note: string) => void', description: 'Called when Reject button is clicked in expanded row' },
          { name: 'renderExpandedRow', type: '(row, note, onNoteChange, onApprove, onReject) => ReactNode', description: 'Custom expanded row renderer — overrides default Note/Approve/Reject UI' },
          { name: 'theme', type: "'navy' | 'light'", default: "'light'", description: 'Color theme — navy dark or light' },
        ]}
      >
        <div className="w-full">
          <ServerDataTable<RequestRow>
            fetchData={mockFetchData}
            columns={columns}
            keyExtractor={(row) => row.id}
            pageSize={5}
            appliedDateField="appliedOn"
            theme={theme}
            onApprove={(row, note) => alert(`Approved: ${row.name}\nNote: ${note || '(none)'}`)}
            onReject={(row, note) => alert(`Rejected: ${row.name}\nNote: ${note || '(none)'}`)}
          />
        </div>
      </ShowcaseSection>
    </div>
  );
}
