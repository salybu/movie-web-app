import { useEffect, useState } from 'react';
import { getAllUsers } from 'utils/api';
import { Member as MemberComponent, Pagination } from 'components/admin';
import { IMember } from 'components/admin/Member';
import { Template } from 'components/common';

const Member = () => {
  const [members, setMembers] = useState<IMember[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentPosts, setCurrentPosts] = useState<IMember[]>([]); // 여기에 initial 값 [] 를 안주면 IMember[]|undefined 돼서 할당이 안되네

  const [postsPerPage] = useState<number>(10);
  const [pageLimit] = useState<number>(10);

  const [pageNumbers, setPageNumbers] = useState<number[]>([]);
  const [maxPageLimit, setMaxPageLimit] = useState<number>(10);
  const [minPageLimit, setMinPageLimit] = useState<number>(1);

  useEffect(() => {
    (async () => {
      const result = await getAllUsers();
      setMembers(result);
    })();
  }, []);

  useEffect(() => {
    const pageNumbers: number[] = [];
    for (let i = 1; i <= Math.ceil(members.length / postsPerPage); i++) {
      pageNumbers.push(i);
    }
    setPageNumbers(pageNumbers);
  }, [members]);

  useEffect(() => {
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    setCurrentPosts(members.slice(indexOfFirstPost, indexOfLastPost));
  }, [members, currentPage]);

  const changePage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Template>
      <MemberComponent members={currentPosts} />
      <Pagination
        // postsLength={members?.length}
        // postsPerPage={postsPerPage}
        pageNumbers={pageNumbers}
        pageLimit={pageLimit}
        currentPage={currentPage}
        changePage={changePage}
        maxPageLimit={maxPageLimit}
        minPageLimit={minPageLimit}
        setMaxPageLimit={setMaxPageLimit}
        setMinPageLimit={setMinPageLimit}
      />
    </Template>
  );
};

export default Member;
