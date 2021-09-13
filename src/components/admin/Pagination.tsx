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
    <ul className='member_pagination'>
      <button className='btn_icon'>
        <li
          onClick={() => {
            changePage(minMemberLimitByPage);
          }}
        >
          <MdFirstPage />
        </li>
      </button>
      <button className='btn_icon'>
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
      </button>
      {pagesList?.map((page) => {
        if (page < maxMemberLimitByPage + 1 && page >= minMemberLimitByPage) {
          return (
            <button
              onClick={() => {
                changePage(page);
              }}
            >
              <li key={page} style={page == currentPage ? { fontWeight: 'bold' } : {}}>
                {page}
              </li>
            </button>
          );
        } else {
          return null;
        }
      })}
      <button className='btn_icon'>
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
      </button>
      <button className='btn_icon'>
        <li
          onClick={() => {
            changePage(maxMemberLimitByPage);
          }}
        >
          <MdLastPage />
        </li>
      </button>
    </ul>
  );
};

export default Pagination;
