import { Member as MemberComponent, Pagination } from 'components/admin';
import { useMember } from 'components/admin/useMember';
import { Loading, Template } from 'components/common';

const Member: React.FC = (): JSX.Element => {
  const { currentMembers, currentPage, pagesList, changePage, handleNextPage, handlePrevPage, maxMemberLimitByPage, minMemberLimitByPage } = useMember();

  if (!currentMembers || !pagesList) {
    return <Loading />;
  }

  return (
    <Template>
      <MemberComponent members={currentMembers} />
      <Pagination
        pagesList={pagesList}
        currentPage={currentPage}
        changePage={changePage}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        maxMemberLimitByPage={maxMemberLimitByPage}
        minMemberLimitByPage={minMemberLimitByPage}
      />
    </Template>
  );
};

export default Member;
