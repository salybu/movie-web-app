import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ISignUp } from 'types/types';
import { signUp } from 'utils/api';

const initialInput: ISignUp = {
  id: '',
  pw: '',
  pwConfirm: '',
  name: '',
  age: 0,
};

const useSignUp = () => {
  const [input, setInput] = useState<ISignUp>(initialInput);
  const history = useHistory();

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

    // const result = await signUp(id, pw, name, age, level, cardNum, address);
    const result = await signUp(input.id, input.pw, input.name, input.age, '새싹', 0, '서울 노원구');
    if (result) {
      alert('회원가입 완료되셨습니다');
      history.push('/signin');
    }
  };

  return { input, handleChange, handleSubmit };
};

export default useSignUp;
