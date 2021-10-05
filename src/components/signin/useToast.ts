import { useState } from 'react';
import { IToastState } from 'types/types';
import { TOAST_MODE } from 'utils/constants';

const initialToast: IToastState = {
  isVisible: false,
  mode: TOAST_MODE.ALERT,
  message: '',
};

const useToast = () => {
  const [toast, setToast] = useState<IToastState>(initialToast);

  const sendToast = (mode: string, message: string): void => {
    setToast({ isVisible: true, mode, message });
  };

  const closeToast = (): void => {
    setToast({ ...toast, isVisible: false });
  };

  return { toast, sendToast, closeToast };
};

export default useToast;
