import React from 'react';
import { SignUp as SignUpComponent } from 'components/signin';
import { useSignIn } from 'components/signin';
import { Redirect } from 'react-router-dom';

const SignUp: React.FC = (): JSX.Element => {
  const { isLogin } = useSignIn();

  if (isLogin) {
    return <Redirect to='/' />;
  }

  return (
    <>
      <SignUpComponent />
    </>
  );
};

export default SignUp;
