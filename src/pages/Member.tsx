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

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  useEffect(() => {
    (async () => {
      const result = await getAllUsers();
      setMembers(result);
    })();
  }, []);

  useEffect(() => {
    setCurrentPosts(members.slice(indexOfFirstPost - indexOfLastPost));
  }, [members]);

  return (
    <Template>
      <MemberComponent members={currentPosts} />
      <Pagination postsLength={members?.length} postsPerPage={postsPerPage} />
    </Template>
  );
};

export default Member;
