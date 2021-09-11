import React from 'react';

export interface IPaginationProps {
  postsLength: number;
  postsPerPage: number;
}

const Pagination: React.FC<IPaginationProps> = ({ postsLength, postsPerPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(postsLength / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul style={{ display: 'flex', margin: '0', padding: '0', justifyContent: 'center' }}>
      <li>{'<<'}</li>
      <li>prev</li>
      {pageNumbers.map((page) => (
        <li>{page}</li>
      ))}
      <li>next</li>
      <li>Last</li>
    </ul>
  );
};

export default Pagination;
