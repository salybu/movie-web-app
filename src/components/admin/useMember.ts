import { useCallback, useEffect, useState } from 'react';
import { IMember } from 'types/types';
import { getAllUsers } from 'utils/api';

export const useMember = () => {
  const [members, setMembers] = useState<IMember[]>([]); // 전체 회원 목록
  const [currentPage, setCurrentPage] = useState<number>(1); // 현재 페이지
  const [currentMembers, setCurrentMembers] = useState<IMember[]>([]); // 현재 페이지에서의 회원목록 // 여기에 initial 값 [] 를 안주면 IMember[]|undefined 돼서 할당이 안되네

  const membersPerPage = 10; // 한 페이지 당 멤버 수
  const pageLimit = 10; // 한 번에 보일 페이지 수

  const [pagesList, setPagesList] = useState<number[]>([]); // 전체 멤버 수에 따른 페이지 수
  const [maxMemberLimitByPage, setMaxMemberLimitByPage] = useState<number>(membersPerPage);
  const [minMemberLimitByPage, setMinMemberLimitByPage] = useState<number>(1);

  const lastPage = pagesList.slice(-1)[0];

  useEffect(() => {
    getAllMembers();
  }, []);

  useEffect(() => {
    getAllPagesList();
  }, [members]);

  useEffect(() => {
    getCurrentMembers();
  }, [members, currentPage]);

  const getAllMembers = async () => {
    const result = await getAllUsers();
    setMembers(result);
  };

  const getAllPagesList = useCallback(() => {
    const pages: number[] = [];
    for (let i = 1; i <= Math.ceil(members.length / membersPerPage); i++) {
      pages.push(i);
    }
    setPagesList(pages);
  }, [members]);

  const getCurrentMembers = useCallback(() => {
    const indexOfLastPost = currentPage * membersPerPage;
    const indexOfFirstPost = indexOfLastPost - membersPerPage;
    setCurrentMembers(members.slice(indexOfFirstPost, indexOfLastPost));
  }, [members, currentPage]);

  const changePage = (page: number) => {
    setCurrentPage(page);
  };

  const handleNextPage = (page: number) => {
    changePage(page);
  };

  const handlePrevPage = (page: number) => {
    changePage(page);
  };

  useEffect(() => {
    if (currentPage > maxMemberLimitByPage) {
      const plusPage = maxMemberLimitByPage + pageLimit > lastPage ? lastPage : maxMemberLimitByPage + pageLimit;
      setMaxMemberLimitByPage(plusPage);
      setMinMemberLimitByPage(minMemberLimitByPage + pageLimit);
    } else if (currentPage < minMemberLimitByPage) {
      const maxPage = maxMemberLimitByPage % pageLimit == 0 ? maxMemberLimitByPage - pageLimit : maxMemberLimitByPage - (maxMemberLimitByPage % pageLimit);
      setMaxMemberLimitByPage(maxPage);
      setMinMemberLimitByPage(minMemberLimitByPage - pageLimit);
    }
  }, [currentPage]);

  const handleFirstPage = (currentPage: number, minPageLimit: number) => {
    if (currentPage == 1) {
      return;
    }

    const targetPage = currentPage == minPageLimit ? currentPage - pageLimit : minPageLimit;
    setCurrentPage(targetPage);
  };

  const handleLastPage = (currentPage: number, maxPageLimit: number) => {
    if (currentPage == lastPage) {
      return;
    }

    const lastMaxPageLimit = getLastMaxPageLimit(currentPage);
    const targetPage = currentPage == maxPageLimit ? lastMaxPageLimit : maxPageLimit;
    setCurrentPage(targetPage);
  };

  const getLastMaxPageLimit = (currentPage: number): number => {
    return lastPage < currentPage + pageLimit ? lastPage : currentPage + pageLimit;
  };

  return {
    currentMembers,
    currentPage,
    pagesList,
    changePage,
    handleNextPage,
    handlePrevPage,
    maxMemberLimitByPage,
    minMemberLimitByPage,
    handleFirstPage,
    handleLastPage,
  };
};
