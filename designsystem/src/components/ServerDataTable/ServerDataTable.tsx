'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  ChevronUpIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';

// ─── Types ────────────────────────────────────────────────────────────────────

export type SortDirection = 'asc' | 'desc' | null;

export type FetchParams = {
  page: number;
  pageSize: number;
  search: string;
  sortField: string | null;
  sortDirection: SortDirection;
  status: 'active' | 'closed';
};

export type FetchResult<T> = {
  data: T[];
  total: number;
};

export type ServerDataTableTheme = 'navy' | 'light';

export interface ServerDataTableProps<T extends Record<string, unknown>> {
  fetchData: (params: FetchParams) => Promise<FetchResult<T>>;
  columns: ColumnDef<T>[];
  keyExtractor: (row: T) => string;
  pageSize?: number;
  renderExpandedRow?: (
    row: T,
    note: string,
    onNoteChange: (v: string) => void,
    onApprove: () => void,
    onReject: () => void
  ) => React.ReactNode;
  onApprove?: (row: T, note: string) => void;
  onReject?: (row: T, note: string) => void;
  appliedDateField?: keyof T;
  className?: string;
  theme?: ServerDataTableTheme;
}

export type ColumnDef<T> = {
  key: string;
  header: string;
  sortable?: boolean;
  cell?: (row: T) => React.ReactNode;
  width?: string;
};

// ─── Theme Tokens ─────────────────────────────────────────────────────────────

function getThemeTokens(theme: ServerDataTableTheme) {
  if (theme === 'navy') {
    return {
      // Status toggle
      toggleBorder: 'border-[#6699cc]',
      toggleActiveBg: 'bg-[#000060] text-white',
      toggleInactiveBg: 'bg-[#000040] text-[#99bbdd]',
      // Search
      searchBorder: 'border-[#000060]',
      searchBg: 'bg-[#000030] text-white placeholder-[#6688aa]',
      searchFocus: 'focus:ring-[#6699cc]/40 focus:border-[#6699cc]',
      searchIcon: 'text-[#6688aa]',
      // Header
      headerBg: '#000060',
      headerText: 'text-[#aaccee]',
      headerHover: 'hover:text-white',
      // Row card
      rowBg: 'bg-[#000040]',
      rowBorder: 'border-[#000060]',
      rowExpandedBorder: 'border-[#6699cc]/40',
      rowText: 'text-[#ddeeff]',
      // Expand button
      expandBtnBorder: 'border-[#000060] hover:border-[#6699cc] hover:bg-[#6699cc]/10',
      expandBtnIcon: 'text-[#aaccee]',
      expandBtnFocus: 'focus:ring-[#6699cc]/30',
      // Expanded panel
      expandedBg: 'bg-[#000030]',
      expandedBorder: 'border-[#6699cc]/40',
      // Note input
      noteInputBorder: 'border-[#000060]',
      noteInputBg: 'bg-[#000040] text-[#ddeeff] placeholder-[#6688aa]',
      noteInputFocus: 'focus:ring-[#6699cc]/30 focus:border-[#6699cc]',
      noteLabel: 'text-[#aaccee]',
      appliedText: 'text-[#aaccee]',
      // Pagination
      paginationText: 'text-[#6688aa]',
      paginationBtn: 'border-[#000060] text-[#aaccee] hover:bg-[#000060]',
      paginationActivePage: 'bg-[#000080] text-white',
      paginationInactivePage: 'border-[#000060] text-[#aaccee] hover:bg-[#000060]',
      paginationEllipsis: 'text-[#6688aa]',
      // Empty state
      emptyBg: 'bg-[#000040]',
      emptyBorder: 'border-[#000060]',
      emptyText: 'text-[#6688aa]',
      // Skeleton
      skeletonBg: 'bg-[#000040]',
      skeletonBorder: 'border-[#000060]',
      skeletonPulse: 'bg-[#000060]',
      // Sort icon active
      sortIconActive: 'text-[#6699cc]',
    };
  }
  // light
  return {
    toggleBorder: 'border-[#000080]',
    toggleActiveBg: 'bg-[#000080] text-white',
    toggleInactiveBg: 'bg-white text-[#000080]',
    searchBorder: 'border-gray-300',
    searchBg: 'bg-white text-gray-900 placeholder-gray-400',
    searchFocus: 'focus:ring-[#000080]/30 focus:border-[#000080]',
    searchIcon: 'text-gray-400',
    headerBg: '#dde3f0',
    headerText: 'text-[#000040]',
    headerHover: 'hover:text-[#000080]',
    rowBg: 'bg-white',
    rowBorder: 'border-gray-200',
    rowExpandedBorder: 'border-[#000080]/30',
    rowText: 'text-[#1e1e1e]',
    expandBtnBorder: 'border-gray-300 hover:border-[#000080] hover:bg-[#000080]/5',
    expandBtnIcon: 'text-gray-600',
    expandBtnFocus: 'focus:ring-[#000080]/30',
    expandedBg: 'bg-white',
    expandedBorder: 'border-[#000080]/30',
    noteInputBorder: 'border-gray-300',
    noteInputBg: 'bg-white text-gray-900 placeholder-gray-400',
    noteInputFocus: 'focus:ring-[#000080]/30 focus:border-[#000080]',
    noteLabel: 'text-[#1e1e1e]',
    appliedText: 'text-[#1e1e1e]',
    paginationText: 'text-gray-500',
    paginationBtn: 'border-gray-300 text-gray-700 hover:bg-gray-50',
    paginationActivePage: 'bg-[#000080] text-white',
    paginationInactivePage: 'border-gray-300 text-gray-700 hover:bg-gray-50',
    paginationEllipsis: 'text-gray-400',
    emptyBg: 'bg-white',
    emptyBorder: 'border-gray-200',
    emptyText: 'text-gray-400',
    skeletonBg: 'bg-white',
    skeletonBorder: 'border-gray-200',
    skeletonPulse: 'bg-gray-200',
    sortIconActive: 'text-[#000080]',
  };
}

// ─── Skeleton Row ─────────────────────────────────────────────────────────────

function SkeletonRow({ cols, tk }: { cols: number; tk: ReturnType<typeof getThemeTokens> }) {
  return (
    <div
      className={`${tk.skeletonBg} rounded-xl border ${tk.skeletonBorder} shadow-sm px-4 py-3 mb-2 flex items-center gap-4 animate-pulse`}
    >
      {Array.from({ length: cols }).map((_, i) => (
        <div key={i} className={`flex-1 h-4 ${tk.skeletonPulse} rounded`} />
      ))}
      <div className={`w-8 h-8 ${tk.skeletonPulse} rounded-full flex-shrink-0`} />
    </div>
  );
}

// ─── Sort Icon ────────────────────────────────────────────────────────────────

function SortIcon({ direction, activeClass }: { direction: SortDirection; activeClass: string }) {
  if (direction === 'asc') return <ChevronUpIcon className={`h-3.5 w-3.5 ${activeClass}`} />;
  if (direction === 'desc') return <ChevronDownIcon className={`h-3.5 w-3.5 ${activeClass}`} />;
  return <ChevronDownIcon className="h-3.5 w-3.5 text-gray-400" />;
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function ServerDataTable<T extends Record<string, unknown>>({
  fetchData,
  columns,
  keyExtractor,
  pageSize = 10,
  renderExpandedRow,
  onApprove,
  onReject,
  appliedDateField,
  className = '',
  theme = 'light',
}: ServerDataTableProps<T>) {
  const tk = getThemeTokens(theme);

  const [status, setStatus] = useState<'active' | 'closed'>('active');
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [sortField, setSortField] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>(null);
  const [page, setPage] = useState(1);
  const [data, setData] = useState<T[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [expandedRow, setExpandedRow] = useState<string | null>(null);
  const [notes, setNotes] = useState<Record<string, string>>({});

  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Debounce search
  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      setDebouncedSearch(search);
      setPage(1);
    }, 400);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [search]);

  // Fetch data whenever params change
  const load = useCallback(async () => {
    setLoading(true);
    try {
      const result = await fetchData({
        page,
        pageSize,
        search: debouncedSearch,
        sortField,
        sortDirection,
        status,
      });
      setData(result.data);
      setTotal(result.total);
    } catch {
      setData([]);
      setTotal(0);
    } finally {
      setLoading(false);
    }
  }, [fetchData, page, pageSize, debouncedSearch, sortField, sortDirection, status]);

  useEffect(() => {
    load();
  }, [load]);

  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  const handleSort = (key: string) => {
    if (sortField === key) {
      if (sortDirection === 'asc') setSortDirection('desc');
      else if (sortDirection === 'desc') {
        setSortField(null);
        setSortDirection(null);
      } else setSortDirection('asc');
    } else {
      setSortField(key);
      setSortDirection('asc');
    }
    setPage(1);
  };

  const handleStatusToggle = (s: 'active' | 'closed') => {
    setStatus(s);
    setPage(1);
    setExpandedRow(null);
  };

  const toggleExpand = (key: string) => {
    setExpandedRow((prev) => (prev === key ? null : key));
  };

  const getNote = (key: string) => notes[key] ?? '';
  const setNote = (key: string, val: string) => setNotes((prev) => ({ ...prev, [key]: val }));

  const colCount = columns.length;
  const colStyle = { flex: 1, minWidth: 0 };

  return (
    <div className={`w-full ${className}`}>
      {/* ── Status Toggle ── */}
      <div className="flex justify-center mb-5">
        <div className={`inline-flex rounded-full border-2 ${tk.toggleBorder} overflow-hidden`}>
          <button
            onClick={() => handleStatusToggle('active')}
            className={`px-8 py-2 text-sm font-semibold transition-colors focus:outline-none ${
              status === 'active' ? tk.toggleActiveBg : tk.toggleInactiveBg
            }`}
          >
            Active
          </button>
          <button
            onClick={() => handleStatusToggle('closed')}
            className={`px-8 py-2 text-sm font-semibold transition-colors focus:outline-none ${
              status === 'closed' ? tk.toggleActiveBg : tk.toggleInactiveBg
            }`}
          >
            Closed
          </button>
        </div>
      </div>

      {/* ── Search ── */}
      <div className="mb-4 relative max-w-xs">
        <MagnifyingGlassIcon
          className={`absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 ${tk.searchIcon} pointer-events-none`}
        />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          className={`w-full pl-9 pr-3 py-2 text-sm border ${tk.searchBorder} ${tk.searchBg} rounded-lg focus:outline-none focus:ring-2 ${tk.searchFocus}`}
        />
      </div>

      {/* ── Column Headers ── */}
      <div
        className="flex items-center gap-2 px-4 py-2.5 rounded-lg mb-2"
        style={{ background: tk.headerBg }}
      >
        {columns.map((col) => (
          <div
            key={col.key}
            style={colStyle}
            className={`flex items-center gap-1 text-xs font-semibold ${tk.headerText} select-none ${col.sortable ? `cursor-pointer ${tk.headerHover}` : ''}`}
            onClick={() => col.sortable && handleSort(col.key)}
          >
            <span>{col.header}</span>
            {col.sortable && (
              <SortIcon
                direction={sortField === col.key ? sortDirection : null}
                activeClass={tk.sortIconActive}
              />
            )}
          </div>
        ))}
        {/* Spacer for expand button */}
        <div className="w-9 flex-shrink-0" />
      </div>

      {/* ── Rows ── */}
      <div>
        {loading ? (
          Array.from({ length: pageSize > 5 ? 5 : pageSize }).map((_, i) => (
            <SkeletonRow key={i} cols={colCount} tk={tk} />
          ))
        ) : data.length === 0 ? (
          <div
            className={`${tk.emptyBg} rounded-xl border ${tk.emptyBorder} shadow-sm px-4 py-10 text-center text-sm ${tk.emptyText}`}
          >
            No records found.
          </div>
        ) : (
          data.map((row) => {
            const key = keyExtractor(row);
            const isExpanded = expandedRow === key;
            const appliedDate = appliedDateField ? String(row[appliedDateField] ?? '') : '';

            return (
              <div key={key} className="mb-2">
                {/* Row card */}
                <div
                  className={`${tk.rowBg} rounded-xl border shadow-sm px-4 py-3 flex items-center gap-2 transition-all ${
                    isExpanded ? `${tk.rowExpandedBorder} rounded-b-none mb-0` : tk.rowBorder
                  }`}
                >
                  {columns.map((col) => (
                    <div
                      key={col.key}
                      style={colStyle}
                      className={`text-sm ${tk.rowText} truncate`}
                    >
                      {col.cell ? col.cell(row) : String(row[col.key] ?? '')}
                    </div>
                  ))}
                  {/* Expand button */}
                  <button
                    onClick={() => toggleExpand(key)}
                    aria-label={isExpanded ? 'Collapse row' : 'Expand row'}
                    className={`w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full border ${tk.expandBtnBorder} transition-colors focus:outline-none focus:ring-2 ${tk.expandBtnFocus}`}
                  >
                    {isExpanded ? (
                      <ChevronUpIcon className={`h-4 w-4 ${tk.expandBtnIcon}`} />
                    ) : (
                      <ChevronDownIcon className={`h-4 w-4 ${tk.expandBtnIcon}`} />
                    )}
                  </button>
                </div>

                {/* Expanded panel */}
                {isExpanded && (
                  <div
                    className={`${tk.expandedBg} border border-t-0 ${tk.expandedBorder} rounded-b-xl px-4 py-4`}
                  >
                    {renderExpandedRow ? (
                      renderExpandedRow(
                        row,
                        getNote(key),
                        (v) => setNote(key, v),
                        () => {
                          onApprove?.(row, getNote(key));
                        },
                        () => {
                          onReject?.(row, getNote(key));
                        }
                      )
                    ) : (
                      <DefaultExpandedContent
                        note={getNote(key)}
                        onNoteChange={(v) => setNote(key, v)}
                        appliedDate={appliedDate}
                        onApprove={() => onApprove?.(row, getNote(key))}
                        onReject={() => onReject?.(row, getNote(key))}
                        tk={tk}
                      />
                    )}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* ── Pagination ── */}
      {!loading && total > 0 && (
        <div className="flex items-center justify-between mt-4 px-1">
          <span className={`text-xs ${tk.paginationText}`}>
            Showing {Math.min((page - 1) * pageSize + 1, total)}–{Math.min(page * pageSize, total)}{' '}
            of {total}
          </span>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className={`flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-lg border ${tk.paginationBtn} disabled:opacity-40 disabled:cursor-not-allowed transition-colors`}
            >
              <ChevronLeftIcon className="h-3.5 w-3.5" />
              Previous
            </button>

            {/* Page numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter((p) => p === 1 || p === totalPages || Math.abs(p - page) <= 1)
              .reduce<(number | '...')[]>((acc, p, idx, arr) => {
                if (
                  idx > 0 &&
                  typeof arr[idx - 1] === 'number' &&
                  (p as number) - (arr[idx - 1] as number) > 1
                ) {
                  acc.push('...');
                }
                acc.push(p);
                return acc;
              }, [])
              .map((p, idx) =>
                p === '...' ? (
                  <span key={`ellipsis-${idx}`} className={`px-2 text-xs ${tk.paginationEllipsis}`}>
                    …
                  </span>
                ) : (
                  <button
                    key={p}
                    onClick={() => setPage(p as number)}
                    className={`w-8 h-8 text-xs font-medium rounded-lg transition-colors ${
                      page === p ? tk.paginationActivePage : `border ${tk.paginationInactivePage}`
                    }`}
                  >
                    {p}
                  </button>
                )
              )}

            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className={`flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-lg border ${tk.paginationBtn} disabled:opacity-40 disabled:cursor-not-allowed transition-colors`}
            >
              Next
              <ChevronRightIcon className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Default Expanded Content ─────────────────────────────────────────────────

interface DefaultExpandedContentProps {
  note: string;
  onNoteChange: (v: string) => void;
  appliedDate: string;
  onApprove: () => void;
  onReject: () => void;
  tk: ReturnType<typeof getThemeTokens>;
}

function DefaultExpandedContent({
  note,
  onNoteChange,
  appliedDate,
  onApprove,
  onReject,
  tk,
}: DefaultExpandedContentProps) {
  return (
    <div className="space-y-3">
      {/* Note row */}
      <div className="flex items-center gap-3">
        <span className={`text-sm font-medium ${tk.noteLabel} w-12 flex-shrink-0`}>Note</span>
        <input
          type="text"
          value={note}
          onChange={(e) => onNoteChange(e.target.value)}
          placeholder="Reason"
          className={`flex-1 max-w-sm px-3 py-1.5 text-sm border ${tk.noteInputBorder} ${tk.noteInputBg} rounded-lg focus:outline-none focus:ring-2 ${tk.noteInputFocus}`}
        />
      </div>

      {/* Actions row */}
      <div className="flex items-center justify-between">
        <span className={`text-sm ${tk.appliedText}`}>
          Applied on: <strong>{appliedDate || 'dd mm, yyyy'}</strong>
        </span>
        <div className="flex items-center gap-3">
          <button
            onClick={onReject}
            className="px-5 py-2 text-sm font-semibold text-white bg-red-500 hover:bg-red-600 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            Reject
          </button>
          <button
            onClick={onApprove}
            className="px-5 py-2 text-sm font-semibold text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-green-600"
            style={{ backgroundColor: '#1a6b2a' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#155722')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#1a6b2a')}
          >
            Approve
          </button>
        </div>
      </div>
    </div>
  );
}
