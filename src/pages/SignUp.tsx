import { useSignIn } from 'components/signin';
import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { ISignUp } from 'types/types';
import { signUp } from 'utils/api';

const initialInput: ISignUp = {
  id: '',
  pw: '',
  pwConfirm: '',
  name: '',
  age: 0,
};

const SignUp = () => {
  const [input, setInput] = useState<ISignUp>(initialInput);
  const { isLogin } = useSignIn();
  const history = useHistory();

  if (isLogin) {
    return <Redirect to='/' />;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setInput((input) => {
      if (name == 'age') {
        const age = Number(value);
        return { ...input, age: age };
      } else {
        return { ...input, [name]: value };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await signUp(input.id, input.pw, input.name, input.age);
    if (result) {
      alert('회원가입 완료되셨습니다');
      history.push('/signin');
    }
  };

  return (
    <div className='container'>
      <div className='container_signin_wide'>
        <form className='container_signin_narrow sign_up_form' onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          {/* <div>
            <input name='id' className='input' placeholder='아이디' onChange={handleChange} />
            <button>아이디 중복확인</button>
          </div> */}
          <input name='id' className='input' placeholder='아이디' onChange={handleChange} />
          <input name='pw' type='password' placeholder='비밀번호' autoComplete='new-password' onChange={handleChange} />
          {/* <input name='pwConfirm' type='password' placeholder='비밀번호 확인' onChange={handleChange} /> */}
          <input name='name' placeholder='이름' onChange={handleChange} />
          <input name='age' placeholder='나이' onChange={handleChange} />
          <button>회원가입</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
