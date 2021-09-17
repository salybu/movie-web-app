import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ISignUp } from 'types/types';
import { signUp } from 'utils/api';

const initialInput: ISignUp = {
  id: '',
  pw: '',
  pwCheck: '',
  name: '',
  age: 0,
};

const useSignUp = () => {
  const [input, setInput] = useState<ISignUp>(initialInput);
  const [inputAddress, setInputAddress] = useState();
  const [inputCard, setInputCard] = useState();
  const history = useHistory();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let { name, value } = e.target;
    value = name == 'id' || name == 'age' ? filterInput(name, value) : value;
    setInput((input) => {
      const inputVal = name == 'age' ? Number(value) : value;
      return { ...input, [name]: inputVal };
    });
  };

  const filterInput = (name: string, value: string) => {
    const reg = name == 'age' ? /[^0-9]/g : /[ㄱ-힣~!@#$%^&*()_+|<>?:{}= ]/g;
    return value.replace(reg, '');
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
