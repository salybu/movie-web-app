import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ISignUp, ISignUpAddress, ISignUpCaution, IToastState } from 'types/types';
import { isValidID, signUp } from 'utils/api';
import { TOAST_MODE } from 'utils/constants';

const initialInput: ISignUp = {
  id: '',
  pw: '',
  pwCheck: '',
  name: '',
  age: 0,
};

const initialCaution: ISignUpCaution = {
  pw: false,
  pwCheck: false,
};

const initialAddress: ISignUpAddress = {
  address: '',
  addressDetail: '',
};

const initialToast: IToastState = {
  isVisible: false,
  mode: TOAST_MODE.ALERT,
  message: '',
};

const useSignUp = () => {
  const [input, setInput] = useState<ISignUp>(initialInput);
  const [cautions, setCautions] = useState<ISignUpCaution>(initialCaution);
  const [inputAddress, setInputAddress] = useState<ISignUpAddress>(initialAddress);
  const [inputCard, setInputCard] = useState();

  const [isAddressVisible, setIsAddressVisible] = useState<boolean>(false);
  const [isCardVisible, setIsCardVisible] = useState<boolean>(false);

  const [toast, setToast] = useState<IToastState>(initialToast);

  const history = useHistory();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let { name, value } = e.target;
    //   const inputVal = name == 'age' ? Number(filterInput(name, value)) : filterInput(name, value);
    setInputVal(name, filterInput(name, value));
  };

  const filterInput = (name: string, value: string) => {
    return value.replace(getReg(name), '');
  };

  const setInputVal = (name: string, value: string): void => {
    setInput((input) => {
      return { ...input, [name]: value };
    });
  };

  const getReg = (name: string) => {
    switch (name) {
      case 'id':
        return /[ㄱ-힣~!@#$%^&*().,_+|<>?:{}= ]/g;
      case 'pw':
        return /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/;
      case 'age':
        return /[^0-9]/g;
      default:
        return /[]/g;
    }
  };

  const handlePWChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let { name, value } = e.target;
    setInputVal(name, value);
    handleCautions(name, value);
  };

  const handleCautions = (name: string, value: string): void => {
    const isValid = name == 'pw' ? getReg(name).test(value) : input.pw == value;
    setCautions({ ...cautions, [name]: isValid });
  };

  const clickIDExistBtn = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (input.id == '') {
      setToast({ isVisible: true, mode: TOAST_MODE.ALERT, message: '다시 입력하세요 😄' });
      return;
    }
    const result = await isValidID(input.id);

    console.log(result);
  };

  const clickAddressBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsAddressVisible(true);
  };

  const closeToast = (): void => {
    setToast({ ...toast, isVisible: false });
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

  return {
    input,
    cautions,
    toast,
    isAddressVisible,
    closeToast,
    setIsAddressVisible,
    handleChange,
    handleSubmit,
    handlePWChange,
    clickAddressBtn,
    clickIDExistBtn,
  };
};

export default useSignUp;
