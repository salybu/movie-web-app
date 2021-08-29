import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectAuth } from 'redux/modules/auth';
import { AUTH } from 'utils/constants';
import { storage } from 'utils/storage';
import './common.scss';

const Nav = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { isLogin } = useSelector(selectAuth);

  const movePage = (path: string) => {
    history.push(path);
  };

  const logout = () => {
    //   const isLogin = storage.get(AUTH);
    // console.log(isLogin);
    dispatch(logout);
    storage.set(AUTH, '');
    history.push('/signin');
  };

  return (
    <div className='container nav'>
      <div>
        <div>관리자</div>
      </div>
      <ul className='nav_right nav_signin'>
        {!isLogin ? (
          <li
            onClick={() => {
              movePage('/signin');
            }}
          >
            로그인
          </li>
        ) : (
          <li onClick={logout}>로그아웃</li>
        )}
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
