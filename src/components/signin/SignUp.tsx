import { Template } from 'components/common';
import { useSignUp } from '.';

const SignUp: React.FC = (): JSX.Element => {
  const { handleChange, handleSubmit } = useSignUp();

  return (
    <Template>
      <div className='container_signin_wide'>
        <form className='container_signin_narrow sign_up_form' onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          <div>
            <input name='id' className='input' placeholder='아이디' onChange={handleChange} />
            <button>아이디 중복확인</button>
          </div>
          <input name='id' className='input' placeholder='아이디' onChange={handleChange} />
          <input name='pw' type='password' placeholder='비밀번호' autoComplete='new-password' onChange={handleChange} />
          <input name='pwConfirm' type='password' placeholder='비밀번호 확인' onChange={handleChange} />
          <input name='name' placeholder='이름' onChange={handleChange} />
          <input name='age' placeholder='나이' onChange={handleChange} />
          <button>회원가입</button>
        </form>
      </div>
    </Template>
  );
};

export default SignUp;
