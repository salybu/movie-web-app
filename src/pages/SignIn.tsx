import React, { useEffect, useState } from 'react';
import LoginService from 'components/signin/SignInService';

export interface ISignIn {
  id: string;
  pw: string;
}

const initialSignIn: ISignIn = {
  id: '',
  pw: '',
};

function Signin() {
  const [signIn, setSignIn] = useState<ISignIn>(initialSignIn);

  useEffect(() => {
    const result = LoginService.login('nana', '12345');
    console.log(result);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignIn({ ...signIn, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className='container'>
      <div className='container_signin_wide'>
        <form className='container_signin_narrow sign_up_form' onSubmit={handleSubmit}>
          <h2>Sign In</h2>
          <input name='id' className='input' placeholder='아이디' onChange={handleChange} />
          <input name='pw' type='password' placeholder='비밀번호' autoComplete='new-password' onChange={handleChange} />
          <button>로그인</button>
        </form>
      </div>
    </div>
  );
}

export default Signin;
