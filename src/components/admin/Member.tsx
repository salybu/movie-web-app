import { IMember } from 'types/types';

export interface IMemberProps {
  members: IMember[];
}

const Member: React.FC<IMemberProps> = ({ members }): JSX.Element => {
  return (
    <>
      <div className='member_page'>
        <h2>회원 목록</h2>
        <table>
          <thead>
            <tr>
              <th>아이디</th>
              <th>이름</th>
              <th>레벨</th>
              <th>주소</th>
              <th>나이</th>
              <th>카드번호</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr key={member.id}>
                <td>{member.id}</td>
                <td>{member.name}</td>
                <td>{member.level}</td>
                <td>{member.address}</td>
                <td>{member.age}</td>
                <td>{member.cardNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Member;
