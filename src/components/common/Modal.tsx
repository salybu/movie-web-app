import React from 'react';
import { createPortal } from 'react-dom';

export interface IModal {
  content: JSX.Element;
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<IModal> = ({ content, isVisible, setIsVisible }): JSX.Element => {
  const close = () => {
    setIsVisible(false);
  };

  return isVisible ? (
    createPortal(
      <div className='dim' onClick={close}>
        <div>{content}</div>
      </div>,
      document.getElementById('modal') as HTMLElement,
    )
  ) : (
    <></>
  );
};

export default Modal;
