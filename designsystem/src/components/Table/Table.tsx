import React from 'react';
import { cn } from '@/utils/cn';

export interface TableColumn<T = Record<string, unknown>> {
  key: string;
  header: React.ReactNode;
  cell?: (row: T, index: number) => React.ReactNode;
  width?: string;
  align?: 'left' | 'center' | 'right';
  sortable?: boolean;
}

export interface TableProps<T = Record<string, unknown>> {
  columns: TableColumn<T>[];
  data: T[];
  keyExtractor: (row: T, index: number) => string;
  sortKey?: string;
  sortDir?: 'asc' | 'desc';
  onSort?: (key: string) => void;
  onRowClick?: (row: T) => void;
  striped?: boolean;
  hoverable?: boolean;
  bordered?: boolean;
  compact?: boolean;
  className?: string;
  emptyMessage?: string;
  loading?: boolean;
}

function Table<T = Record<string, unknown>>({
  columns,
  data,
  keyExtractor,
  sortKey,
  sortDir,
  onSort,
  onRowClick,
  striped = false,
  hoverable = true,
  bordered = false,
  compact = false,
  className,
  emptyMessage = 'No data to display',
  loading = false,
}: TableProps<T>) {
  const cellPad = compact ? 'px-3 py-2' : 'px-4 py-3';

  return (
    <div className={cn('w-full overflow-x-auto rounded-lg border border-[#d7d7d7]', className)}>
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-gray-50 border-b border-[#d7d7d7]">
            {columns.map((col) => (
              <th
                key={col.key}
                style={{ width: col.width }}
                className={cn(
                  cellPad,
                  'text-xs font-semibold text-[#808080] tracking-wide uppercase whitespace-nowrap',
                  col.align === 'center' && 'text-center',
                  col.align === 'right' && 'text-right',
                  col.sortable &&
                    'cursor-pointer select-none hover:text-[#1e1e1e] hover:bg-gray-100 transition-colors',
                  bordered && 'border-r border-[#d7d7d7] last:border-r-0'
                )}
                onClick={() => col.sortable && onSort?.(col.key)}
                aria-sort={
                  sortKey === col.key ? (sortDir === 'asc' ? 'ascending' : 'descending') : undefined
                }
              >
                <span className="inline-flex items-center gap-1">
                  {col.header}
                  {col.sortable && sortKey === col.key && (
                    <span aria-hidden="true" className="text-[#000080]">
                      {sortDir === 'asc' ? '↑' : '↓'}
                    </span>
                  )}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {loading ? (
            Array.from({ length: 5 }).map((_, i) => (
              <tr key={i} className="border-b border-[#d7d7d7]">
                {columns.map((col) => (
                  <td key={col.key} className={cellPad}>
                    <div className="h-4 bg-gray-200 rounded animate-pulse" />
                  </td>
                ))}
              </tr>
            ))
          ) : data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="py-12 text-center text-[#808080]">
                {emptyMessage}
              </td>
            </tr>
          ) : (
            data.map((row, i) => (
              <tr
                key={keyExtractor(row, i)}
                onClick={() => onRowClick?.(row)}
                className={cn(
                  'border-b border-[#d7d7d7] last:border-b-0 transition-colors duration-100',
                  striped && i % 2 === 1 && 'bg-gray-50/60',
                  hoverable && 'hover:bg-[#dae8ff]/30',
                  onRowClick && 'cursor-pointer'
                )}
              >
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className={cn(
                      cellPad,
                      'text-[#1e1e1e]',
                      col.align === 'center' && 'text-center',
                      col.align === 'right' && 'text-right',
                      bordered && 'border-r border-[#d7d7d7] last:border-r-0'
                    )}
                  >
                    {col.cell
                      ? col.cell(row, i)
                      : String((row as Record<string, unknown>)[col.key] ?? '—')}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

Table.displayName = 'Table';
export default Table;
