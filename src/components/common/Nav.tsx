import { useHistory } from 'react-router-dom';
import './common.scss';

const Nav = () => {
  const history = useHistory();

  const movePage = (path: string) => {
    history.push(path);
  };

  return (
    <div className='container nav'>
      <div>
        <div>관리자</div>
      </div>
      <ul className='nav_right nav_signin'>
        <li
          onClick={() => {
            movePage('/signin');
          }}
        >
          로그인
        </li>
        <li
          onClick={() => {
            movePage('/signup');
          }}
        >
          회원가입
        </li>
      </ul>
    </div>
  );
};

export default Nav;
