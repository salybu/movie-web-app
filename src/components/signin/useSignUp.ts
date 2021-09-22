import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ISignUp, ISignUpCaution, IToastState } from 'types/types';
import { isValidID, signUp } from 'utils/api';
import { TOAST_MODE } from 'utils/constants';

const initialInput: ISignUp = {
  id: '',
  pw: '',
  pwCheck: '',
  name: '',
  age: 0,
  address: '',
  addressDetail: '',
};

const initialCaution: ISignUpCaution = {
  pw: false,
  pwCheck: false,
};

const initialToast: IToastState = {
  isVisible: false,
  mode: TOAST_MODE.ALERT,
  message: '',
};

const useSignUp = () => {
  const [input, setInput] = useState<ISignUp>(initialInput);
  const [cautions, setCautions] = useState<ISignUpCaution>(initialCaution);
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

  const setAddress = (address: string): void => {
    setInput({ ...input, address });
  };

  const handleCautions = (name: string, value: string): void => {
    const isValid = name == 'pw' ? getReg(name).test(value) : input.pw == value;
    setCautions({ ...cautions, [name]: isValid });
  };

  const clickIDExistBtn = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const isInput = isInputID(input.id);
    if (isInput) {
      const result = await isValidID(input.id);
      result ? sendToast(TOAST_MODE.SUCCESS, '해당 ID 를 사용할 수 있습니다 😄') : sendToast(TOAST_MODE.ALERT, '중복된 ID 가 존재합니다 😅');
    }
  };

  const sendToast = (mode: string, message: string): void => {
    setToast({ isVisible: true, mode, message });
  };

  const isInputID = (id: string): boolean => {
    if (id == '') {
      sendToast(TOAST_MODE.ALERT, 'ID 를 입력하세요 🙎');
      return false;
    }
    return true;
  };

  const signUpValidation = (): boolean => {
    let result = false;
    result = isInputID(input.id);

    if (result) {
      let message = '';

      if (!cautions.pw) {
        message = 'PW 를 양식에 맞게 입력하세요 🙎';
      } else if (!cautions.pwCheck) {
        message = 'PW 확인을 해주세요 🙎';
      } else if (!input.name) {
        message = '이름을 입력하세요 🙎';
      } else if (!input.age || input.age > 100) {
        message = '나이를 입력하세요 (최대 100세) 🙎';
      } else if (input.address == '' || input.addressDetail == '') {
        message = '주소 및 상세주소를 입력하세요 🙎';
      }

      if (message !== '') {
        sendToast(TOAST_MODE.ALERT, message);
        result = false;
      } else {
        result = true;
      }
    }
    return result;
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

    const isValid = signUpValidation();

    if (isValid) {
      // const result = await signUp(id, pw, name, age, level, cardNum, address);
      const result = await signUp(input.id, input.pw, input.name, input.age, '새싹', 0, input.address + input.addressDetail);
      if (result) {
        sendToast(TOAST_MODE.SUCCESS, '회원가입 완료되었습니다 😄');
        history.push('/signin');
      }
    }
  };

  return {
    input,
    cautions,
    toast,
    isAddressVisible,
    closeToast,
    setIsAddressVisible,
    setAddress,
    handleChange,
    handleSubmit,
    handlePWChange,
    clickAddressBtn,
    clickIDExistBtn,
  };
};

export default useSignUp;
