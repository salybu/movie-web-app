import { Template } from 'components/common';
import { useSignUp } from '.';

const SignUp: React.FC = (): JSX.Element => {
  const { input, cautions, handleChange, handleSubmit, handlePWChange } = useSignUp();

  return (
    <Template>
      <div className='container_signin_wide'>
        <form className='container_signin_narrow sign_up_form' onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          <div>
            <input name='id' className='input' placeholder='아이디' value={input.id} onChange={handleChange} />
            <button>아이디 중복확인</button>
          </div>
          <input name='pw' type='password' placeholder='비밀번호' value={input.pw} autoComplete='new-password' onChange={handlePWChange} />
          {input.pw !== '' && (cautions.pw ? <p>비밀번호 양식에 맞게 입력하였습니다</p> : <p className='caution'>영문 및 숫자 포함 8 ~ 10자 작성해주세요</p>)}
          <input name='pwCheck' type='password' placeholder='비밀번호 확인' value={input.pwCheck} onChange={handlePWChange} />
          {input.pwCheck !== '' && (cautions.pwCheck ? <p>비밀번호가 일치합니다</p> : <p className='caution'>비밀번호가 일치하지 않습니다</p>)}
          <input name='name' placeholder='이름' value={input.name} onChange={handleChange} />
          <input name='age' placeholder='나이' value={input.age} onChange={handleChange} />
          <div>
            <input name='address' className='input' placeholder='주소' />
          </div>
          <button>회원가입</button>
        </form>
      </div>
    </Template>
  );
};

export default SignUp;
