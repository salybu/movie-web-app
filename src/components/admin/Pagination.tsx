import React, { useEffect, useState } from 'react';
import { MdFirstPage, MdLastPage, MdNavigateNext, MdNavigateBefore } from 'react-icons/md';

export interface IPaginationProps {
  //   postsLength: number;
  //   postsPerPage: number;
  pageNumbers: number[];
  pageLimit: number;
  currentPage: number;
  changePage: (page: number) => void;
  maxPageLimit: number;
  minPageLimit: number;
  setMaxPageLimit: (max: number) => void;
  setMinPageLimit: (min: number) => void;
}

const Pagination: React.FC<IPaginationProps> = ({
  pageNumbers,
  pageLimit,
  currentPage,
  changePage,
  maxPageLimit,
  minPageLimit,
  setMaxPageLimit,
  setMinPageLimit,
}) => {
  const [paginationGroup, setPaginationGroup] = useState<number[]>([]);

  const getPaginationGroup = (currentPage: number, pageLimit: number) => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    console.log(start);
    // console.log(pageNumbers.slice(start));
    return new Array(pageLimit).fill(0).map((_, idx) => start + idx + 1);
    // return new Array(pageLimit).fill(null).map((_, idx) => {
    //   if (pageNumbers.includes(start + idx + 1)) {
    //     return start + idx + 1;
    //   }
    // });
  };

  // useEffect(() => {
  //   setPaginationGroup(getPaginationGroup(currentPage, pageLimit));
  // }, [currentPage]);

  const handleNextPage = (page: number) => {
    changePage(page);
    if (page + 1 > maxPageLimit) {
      // setPaginationGroup(getPaginationGroup(currentPage, pageLimit));
      setMaxPageLimit(maxPageLimit + pageLimit);
      setMinPageLimit(minPageLimit + pageLimit);
    }
  };

  const handlePrevPage = (page: number) => {
    changePage(page);
    if (page - 1 < minPageLimit && page != 1) {
      setMaxPageLimit(maxPageLimit - pageLimit);
      setMinPageLimit(minPageLimit - pageLimit);
    }
  };

  return (
    <ul style={{ display: 'flex', margin: '0', padding: '0', justifyContent: 'center' }}>
      <li
        onClick={() => {
          // changePage(paginationGroup[0]);
          changePage(minPageLimit);
        }}
      >
        <MdFirstPage />
      </li>
      {currentPage != 1 ? (
        <li
          onClick={() => {
            // changePage(currentPage - 1);
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
      {/* {paginationGroup?.map((page) => (
        <li
          key={page}
          onClick={() => {
            changePage(page);
          }}
          style={page == currentPage ? { fontWeight: 'bold' } : {}}
        >
          {page}
        </li>
      ))} */}
      {pageNumbers?.map((page) => {
        if (page < maxPageLimit + 1 && page >= minPageLimit) {
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
      {currentPage != pageNumbers.length ? (
        <li
          onClick={() => {
            // changePage(currentPage + 1);
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
          // changePage(paginationGroup[pageLimit - 1]);
          changePage(maxPageLimit);
        }}
      >
        <MdLastPage />
      </li>
    </ul>
  );
};

export default Pagination;
