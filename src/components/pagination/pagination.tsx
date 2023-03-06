import React from 'react';
import ReactPaginate from 'react-paginate';

import './pagination.css'

interface PaginationProps {
    pageCount: number;
    onPageChange: (page: number) => void;
}

export default function Pagination({
  pageCount,
  onPageChange,
}: PaginationProps) {
  const handlePageChange = ({ selected }: { selected: number }) => {
    onPageChange(selected);
  };

  return (
    <ReactPaginate
      nextAriaLabel="next"
      previousAriaLabel="prev"
      pageCount={pageCount}
      onPageChange={handlePageChange}
      containerClassName='pagination'
      activeClassName='active'
      pageClassName='page-item'
      pageLinkClassName='page-link'
      previousClassName='page-item'
      previousLinkClassName='page-link'
      nextClassName='page-item'
      nextLinkClassName='page-link'
    />
  );
}
