import { Template } from 'components/common';
import React from 'react';

const Member = () => {
  return (
    <Template>
      <div className='member_page'>
        <h2>회원 목록</h2>
        <table>
          <thead>
            <tr>
              <th>아이디</th>
              <th>이름</th>
              <th>권한</th>
              <th>주소</th>
              <th>나이</th>
              <th>카드번호</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>idididididid</td>
              <td>name name name name name</td>
              <td>auth auth auth auth</td>
              <td>address address address address</td>
              <td>30</td>
              <td>0030 0030 0200 0102</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Template>
  );
};

export default Member;
