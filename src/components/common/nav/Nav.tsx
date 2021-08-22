import './nav.scss';

function Nav() {
  return (
    <div className='container nav'>
      <div>
        <div>관리자</div>
      </div>
      <div className='right'>
        <div>로그인</div>
        <div>회원가입</div>
      </div>
    </div>
  );
}

export default Nav;
