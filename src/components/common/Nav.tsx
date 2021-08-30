import { useSignIn } from 'components/signin';
import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { AUTH } from 'utils/constants';
import { storage } from 'utils/storage';
import './common.scss';

const Nav = () => {
  const history = useHistory();
  const location = useLocation();
  const { isLogin, setIsLogin } = useSignIn();
  // const [isLogin, setIsLogin] = useState<string>(storage.get(AUTH));
  // const storageLogin = storage.get(AUTH);

  const movePage = (path: string) => {
    history.push(path);
  };

  const logout = () => {
    storage.remove(AUTH);
    setIsLogin(storage.get(AUTH));
    history.push('/signin');
  };

  useEffect(() => {
    setIsLogin(storage.get(AUTH));
  }, [location.pathname]);

  return (
    <div className='container nav'>
      <div>
        <div>관리자</div>
      </div>
      <ul className='nav_right nav_signin'>
        {!isLogin ? (
          <>
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
          </>
        ) : (
          <li onClick={logout}>로그아웃</li>
        )}
      </ul>
    </div>
  );
};

export default Nav;
