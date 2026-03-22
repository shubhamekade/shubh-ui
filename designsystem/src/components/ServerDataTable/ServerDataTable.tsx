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
      toggleBorder: 'border-border',
      toggleActiveBg: 'bg-primary text-primary-foreground',
      toggleInactiveBg: 'bg-navy-dark text-sky-light',
      searchBorder: 'border-border',
      searchBg: 'bg-navy-dark text-white placeholder:text-muted-foreground',
      searchFocus: 'focus:ring-ring/30 focus:border-ring',
      searchIcon: 'text-muted-foreground',
      headerBg: 'hsl(var(--secondary))',
      headerText: 'text-foreground',
      headerHover: 'hover:text-white',
      rowBg: 'bg-navy-dark',
      rowBorder: 'border-border',
      rowExpandedBorder: 'border-primary/35',
      rowText: 'text-sky-light',
      expandBtnBorder: 'border-border hover:border-primary hover:bg-primary/10',
      expandBtnIcon: 'text-sky-light',
      expandBtnFocus: 'focus:ring-ring/30',
      expandedBg: 'bg-navy',
      expandedBorder: 'border-primary/30',
      noteInputBorder: 'border-border',
      noteInputBg: 'bg-navy-dark text-sky-light placeholder:text-muted-foreground',
      noteInputFocus: 'focus:ring-ring/30 focus:border-ring',
      noteLabel: 'text-sky-light',
      appliedText: 'text-sky-light',
      paginationText: 'text-muted-foreground',
      paginationBtn: 'border-border text-sky-light hover:bg-navy-medium',
      paginationActivePage: 'bg-primary text-primary-foreground',
      paginationInactivePage: 'border-border text-sky-light hover:bg-navy-medium',
      paginationEllipsis: 'text-muted-foreground',
      emptyBg: 'bg-navy-dark',
      emptyBorder: 'border-border',
      emptyText: 'text-muted-foreground',
      skeletonBg: 'bg-navy-dark',
      skeletonBorder: 'border-border',
      skeletonPulse: 'bg-navy-medium',
      sortIconActive: 'text-primary',
    };
  }
  return {
    toggleBorder: 'border-border',
    toggleActiveBg: 'bg-primary text-primary-foreground',
    toggleInactiveBg: 'bg-background text-primary',
    searchBorder: 'border-border',
    searchBg: 'bg-background text-foreground placeholder:text-muted-foreground',
    searchFocus: 'focus:ring-ring/20 focus:border-ring',
    searchIcon: 'text-muted-foreground',
    headerBg: 'hsl(var(--secondary))',
    headerText: 'text-foreground',
    headerHover: 'hover:text-primary',
    rowBg: 'bg-card',
    rowBorder: 'border-border',
    rowExpandedBorder: 'border-primary/20',
    rowText: 'text-foreground',
    expandBtnBorder: 'border-border hover:border-primary hover:bg-primary/6',
    expandBtnIcon: 'text-muted-foreground',
    expandBtnFocus: 'focus:ring-ring/20',
    expandedBg: 'bg-background',
    expandedBorder: 'border-primary/18',
    noteInputBorder: 'border-border',
    noteInputBg: 'bg-background text-foreground placeholder:text-muted-foreground',
    noteInputFocus: 'focus:ring-ring/20 focus:border-ring',
    noteLabel: 'text-foreground',
    appliedText: 'text-foreground',
    paginationText: 'text-muted-foreground',
    paginationBtn: 'border-border text-foreground hover:bg-muted',
    paginationActivePage: 'bg-primary text-primary-foreground',
    paginationInactivePage: 'border-border text-foreground hover:bg-muted',
    paginationEllipsis: 'text-muted-foreground',
    emptyBg: 'bg-card',
    emptyBorder: 'border-border',
    emptyText: 'text-muted-foreground',
    skeletonBg: 'bg-card',
    skeletonBorder: 'border-border',
    skeletonPulse: 'bg-muted',
    sortIconActive: 'text-primary',
  };
}

// ─── Skeleton Row ─────────────────────────────────────────────────────────────

function SkeletonRow({ cols, tk }: { cols: number; tk: ReturnType<typeof getThemeTokens> }) {
  return (
    <div
      className={`${tk.skeletonBg} mb-2 flex items-center gap-4 rounded-2xl border ${tk.skeletonBorder} px-4 py-3 shadow-card animate-pulse`}
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
  return <ChevronDownIcon className="h-3.5 w-3.5 text-muted-foreground" />;
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
      <div className="mb-5 flex justify-center">
        <div className={`inline-flex overflow-hidden rounded-full border ${tk.toggleBorder} bg-background/70 p-1`}>
          <button
            onClick={() => handleStatusToggle('active')}
            className={`rounded-full px-7 py-2 text-sm font-semibold transition-colors focus:outline-none ${
              status === 'active' ? tk.toggleActiveBg : tk.toggleInactiveBg
            }`}
          >
            Active
          </button>
          <button
            onClick={() => handleStatusToggle('closed')}
            className={`rounded-full px-7 py-2 text-sm font-semibold transition-colors focus:outline-none ${
              status === 'closed' ? tk.toggleActiveBg : tk.toggleInactiveBg
            }`}
          >
            Closed
          </button>
        </div>
      </div>

      {/* ── Search ── */}
      <div className="relative mb-4 max-w-xs">
        <MagnifyingGlassIcon
          className={`pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 ${tk.searchIcon}`}
        />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          className={`w-full rounded-xl border ${tk.searchBorder} ${tk.searchBg} py-2.5 pl-10 pr-3 text-sm focus:outline-none focus:ring-2 ${tk.searchFocus}`}
        />
      </div>

      {/* ── Column Headers ── */}
      <div
        className="mb-2 flex items-center gap-2 rounded-2xl px-4 py-3"
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
            className={`${tk.emptyBg} rounded-2xl border ${tk.emptyBorder} px-4 py-10 text-center text-sm shadow-card ${tk.emptyText}`}
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
                  className={`${tk.rowBg} flex items-center gap-2 rounded-2xl border px-4 py-3 shadow-card transition-all ${
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
                    className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border ${tk.expandBtnBorder} transition-colors focus:outline-none focus:ring-2 ${tk.expandBtnFocus}`}
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
                    className={`${tk.expandedBg} rounded-b-2xl border border-t-0 ${tk.expandedBorder} px-4 py-4`}
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
              className={`flex items-center gap-1 rounded-lg border px-3 py-1.5 text-xs font-medium ${tk.paginationBtn} disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 ease-in-out`}
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
                    className={`h-8 w-8 rounded-lg text-xs font-medium transition-all duration-200 ease-in-out ${
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
              className={`flex items-center gap-1 rounded-lg border px-3 py-1.5 text-xs font-medium ${tk.paginationBtn} disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 ease-in-out`}
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
          className={`max-w-sm flex-1 rounded-xl border ${tk.noteInputBorder} ${tk.noteInputBg} px-3 py-2 text-sm focus:outline-none focus:ring-2 ${tk.noteInputFocus}`}
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
            className="rounded-xl border border-destructive bg-destructive px-5 py-2 text-sm font-semibold text-destructive-foreground transition-all duration-200 ease-in-out hover:bg-destructive/92 focus:outline-none focus:ring-2 focus:ring-ring/30"
          >
            Reject
          </button>
          <button
            onClick={onApprove}
            className="rounded-xl border border-success bg-success px-5 py-2 text-white text-sm font-semibold transition-all duration-200 ease-in-out hover:bg-success/90 focus:outline-none focus:ring-2 focus:ring-ring/30"
          >
            Approve
          </button>
        </div>
      </div>
    </div>
  );
}
