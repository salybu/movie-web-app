import { useSignIn } from 'components/signin';
import { useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { AUTH, USER } from 'utils/constants';
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
    storage.remove(USER);
    setIsLogin(storage.get(AUTH));
    history.push('/signin');
  };

  useEffect(() => {
    setIsLogin(storage.get(AUTH));
  }, [location.pathname]);

  return (
    <nav>
      <div className='container nav'>
        <Link to='/' className='logo'>
          MovieWeb
        </Link>
        <ul className='nav_right nav_signin'>
          {!isLogin ? (
            <>
              <li
                onClick={() => {
                  movePage('/signin');
                }}
              >
                Sign In
              </li>
              <li
                onClick={() => {
                  movePage('/signup');
                }}
              >
                Sign Up
              </li>
            </>
          ) : (
            <>
              <li
                onClick={() => {
                  movePage('/member');
                }}
              >
                Member List
              </li>
              <li onClick={logout}>Sign Out</li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
