import React from 'react';
import { MdFirstPage, MdLastPage, MdNavigateNext, MdNavigateBefore } from 'react-icons/md';

export interface IPaginationProps {
  pagesList: number[];
  currentPage: number;
  changePage: (page: number) => void;
  handleNextPage: (page: number) => void;
  handlePrevPage: (page: number) => void;
  maxMemberLimitByPage: number;
  minMemberLimitByPage: number;
}

const Pagination: React.FC<IPaginationProps> = ({
  pagesList,
  currentPage,
  changePage,
  handleNextPage,
  handlePrevPage,
  maxMemberLimitByPage,
  minMemberLimitByPage,
}) => {
  return (
    <ul style={{ display: 'flex', margin: '0', padding: '0', justifyContent: 'center' }}>
      <li
        onClick={() => {
          changePage(minMemberLimitByPage);
        }}
      >
        <MdFirstPage />
      </li>
      {currentPage != 1 ? (
        <li
          onClick={() => {
            handlePrevPage(currentPage - 1);
          }}
        >
          <MdNavigateBefore />
        </li>
      ) : (
        <li>
          <MdNavigateBefore />
        </li>
      )}
      {pagesList?.map((page) => {
        if (page < maxMemberLimitByPage + 1 && page >= minMemberLimitByPage) {
          return (
            <li
              key={page}
              onClick={() => {
                changePage(page);
              }}
              style={page == currentPage ? { fontWeight: 'bold' } : {}}
            >
              {page}
            </li>
          );
        } else {
          return null;
        }
      })}
      {currentPage != pagesList.length ? (
        <li
          onClick={() => {
            handleNextPage(currentPage + 1);
          }}
        >
          <MdNavigateNext />
        </li>
      ) : (
        <li>
          <MdNavigateNext />
        </li>
      )}
      <li
        onClick={() => {
          changePage(maxMemberLimitByPage);
        }}
      >
        <MdLastPage />
      </li>
    </ul>
  );
};

export default Pagination;
