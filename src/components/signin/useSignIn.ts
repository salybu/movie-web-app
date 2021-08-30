import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ISignIn } from 'types/types';
import { getSignInResult } from 'utils/api';
import { AUTH } from 'utils/constants';
import { storage } from 'utils/storage';
import { SignInService } from '.';

const initialSignIn: ISignIn = {
  id: '',
  pw: '',
};

const useLogin = () => {
  const [signIn, setSignIn] = useState<ISignIn>(initialSignIn);
  const [isLogin, setIsLogin] = useState<string>(storage.get(AUTH));
  const history = useHistory();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignIn({ ...signIn, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const result = getSignInResult(signIn.id, signIn.pw);
    // getSignIn(dispatch, signIn.id, signIn.pw);
    const result = await SignInService.getSignIn(signIn.id, signIn.pw);
    if (!result) {
      alert('로그인에 실패했습니다');
    } else {
      storage.set(AUTH, result.toString());
      history.push('/');
    }
  };

  return { signIn, isLogin, setIsLogin, handleChange, handleSubmit };
};

export default useLogin;
