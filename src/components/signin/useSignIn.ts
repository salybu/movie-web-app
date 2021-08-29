import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getSignIn, selectAuth } from 'redux/modules/auth';
import { ISignIn } from 'types/types';
import { AUTH } from 'utils/constants';
import { storage } from 'utils/storage';

const initialSignIn: ISignIn = {
  id: '',
  pw: '',
};

const useLogin = () => {
  const [signIn, setSignIn] = useState<ISignIn>(initialSignIn);
  const { isLogin } = useSelector(selectAuth);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignIn({ ...signIn, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getSignIn(dispatch, signIn.id, signIn.pw);
  };

  useEffect(() => {
    if (signIn.id != '') {
      if (!isLogin) {
        alert('로그인에 실패했습니다');
      } else {
        history.push('/');
      }
    }
  }, [isLogin]);

  return { signIn, handleChange, handleSubmit };
};

export default useLogin;
