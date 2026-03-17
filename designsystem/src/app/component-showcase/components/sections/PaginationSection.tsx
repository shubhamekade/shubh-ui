'use client';

import React, { useState } from 'react';
import Pagination from '@/components/Pagination';
import ShowcaseSection from '../ShowcaseSection';
import SectionHeader from '../SectionHeader';
import VariantControls, { useVariantControls } from '../VariantControls';

export default function PaginationSection() {
  const [page1, setPage1] = useState(1);
  const [page2, setPage2] = useState(4);
  const [page3, setPage3] = useState(7);
  const [pageSize, setPageSize] = useState(10);
  const [playPage, setPlayPage] = useState(3);
  const [ctrl, setCtrl] = useVariantControls({ size: 'md' });

  return (
    <div>
      <SectionHeader
        title="Pagination"
        description="Page-based data navigation with sibling page numbers, ellipsis compression, first/last shortcuts, items-per-page selector, and total count display."
        importPath={`import Pagination from "@shubh/ui/Pagination"
;`}
      />

      {/* ── Interactive Playground ── */}
      <ShowcaseSection
        title="Interactive Playground"
        description="Use the live controls to switch size in real time. Click page numbers to navigate."
        previewBg="white"
        props={[
          { name: 'total', type: 'number', required: true, description: 'Total number of items' },
          { name: 'page', type: 'number', required: true, description: 'Current page (1-indexed)' },
          { name: 'pageSize', type: 'number', default: '10', description: 'Items per page' },
          { name: 'onPageChange', type: '(page: number) => void', required: true, description: 'Called with new page number' },
          { name: 'showTotal', type: 'boolean', description: 'Show "X–Y of Z" item count' },
          { name: 'showPageSize', type: 'boolean', description: 'Show items-per-page dropdown' },
          { name: 'showFirstLast', type: 'boolean', description: 'Show first/last page jump buttons' },
          { name: 'siblingCount', type: 'number', default: '1', description: 'Pages shown on each side of current' },
          { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Button dimensions' },
        ]}
      >
        <div className="w-full space-y-4">
          <VariantControls
            config={{
              sizes: [
                { value: 'sm', label: 'SM' },
                { value: 'md', label: 'MD' },
                { value: 'lg', label: 'LG' },
              ],
              showDisabled: false,
            }}
            state={ctrl}
            onChange={setCtrl}
          />
          <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg border border-[#d7d7d7]">
            <Pagination
              total={247}
              page={playPage}
              pageSize={10}
              onPageChange={setPlayPage}
              showTotal
              size={ctrl.size as any || 'md'}
            />
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Basic Pagination"
        description="Standard pagination with total count and sibling pages."
        previewBg="white"
        code={`<Pagination
  total={247}
  page={page}
  pageSize={10}
  onPageChange={setPage}
  showTotal
/>`}
      >
        <Pagination
          total={247}
          page={page1}
          pageSize={10}
          onPageChange={setPage1}
          showTotal
        />
      </ShowcaseSection>

      <ShowcaseSection
        title="With First / Last + Page Size"
        description="Extended controls with first/last jump buttons and items-per-page selector."
        previewBg="white"
      >
        <Pagination
          total={1430}
          page={page2}
          pageSize={pageSize}
          onPageChange={setPage2}
          onPageSizeChange={setPageSize}
          showTotal
          showFirstLast
          showPageSize
          siblingCount={2}
        />
      </ShowcaseSection>

      <ShowcaseSection
        title="Sizes"
        description="Three size variants for different density contexts."
        previewBg="white"
      >
        <div className="space-y-4 w-full">
          <div>
            <p className="text-xs text-[#808080] mb-2">Small</p>
            <Pagination total={100} page={3} onPageChange={() => {}} size="sm" />
          </div>
          <div>
            <p className="text-xs text-[#808080] mb-2">Medium (default)</p>
            <Pagination total={100} page={3} onPageChange={() => {}} size="md" />
          </div>
          <div>
            <p className="text-xs text-[#808080] mb-2">Large</p>
            <Pagination total={100} page={3} onPageChange={() => {}} size="lg" />
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Edge Pages"
        description="Ellipsis compression — current page near start, middle, and end."
        previewBg="white"
      >
        <div className="space-y-4 w-full">
          <Pagination total={500} page={2}  onPageChange={() => {}} showTotal />
          <Pagination total={500} page={page3} onPageChange={setPage3} showTotal />
          <Pagination total={500} page={49} onPageChange={() => {}} showTotal />
        </div>
      </ShowcaseSection>
    </div>
  );
}