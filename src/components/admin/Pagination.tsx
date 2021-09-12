import React, { useEffect, useState } from 'react';

export interface IPaginationProps {
  postsLength: number;
  postsPerPage: number;
  pageLimit: number;
  currentPage: number;
  changePage: (page: number) => void;
}

const Pagination: React.FC<IPaginationProps> = ({ postsLength, postsPerPage, pageLimit, currentPage, changePage }) => {
  const [paginationGroup, setPaginationGroup] = useState<number[]>([]);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(postsLength / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const getPaginationGroup = (currentPage: number, pageLimit: number) => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill(0).map((_, idx) => start + idx + 1);
  };

  useEffect(() => {
    setPaginationGroup(getPaginationGroup(currentPage, pageLimit));
  }, []);

  return (
    <ul style={{ display: 'flex', margin: '0', padding: '0', justifyContent: 'center' }}>
      <li>First</li>
      <li
        onClick={() => {
          changePage(currentPage - 1);
        }}
      >
        prev
      </li>
      {paginationGroup?.map((page) => (
        <li
          key={page}
          onClick={() => {
            changePage(page);
          }}
        >
          {page}
        </li>
      ))}
      <li
        onClick={() => {
          changePage(currentPage + 1);
        }}
      >
        next
      </li>
      <li>Last</li>
    </ul>
  );
};

export default Pagination;
