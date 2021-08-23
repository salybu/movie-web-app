import LoginService from 'components/login/LoginService';
import React from 'react';
import { useEffect } from 'react';

function Login() {
  useEffect(() => {
    LoginService.login('d', 'd');
  }, []);
  return <div></div>;
}

export default Login;
