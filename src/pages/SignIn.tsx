import { useSignIn } from 'components/signin';
import React, { useEffect, useState } from 'react';

function Signin() {
  const { signIn, handleChange, handleSubmit } = useSignIn();

  return (
    <div className='container'>
      <div className='container_signin_wide'>
        <form className='container_signin_narrow sign_up_form' onSubmit={handleSubmit}>
          <h2>Sign In</h2>
          <input name='id' className='input' placeholder='아이디' value={signIn.id} onChange={handleChange} />
          <input name='pw' type='password' placeholder='비밀번호' value={signIn.pw} autoComplete='new-password' onChange={handleChange} />
          <button>로그인</button>
        </form>
      </div>
    </div>
  );
}

export default Signin;
