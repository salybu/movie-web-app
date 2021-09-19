import React from 'react';
import { createPortal } from 'react-dom';

export interface IModal {
  content: JSX.Element;
  isVisible: boolean;
}

const Modal: React.FC<IModal> = ({ content, isVisible }): JSX.Element => {
  return isVisible ? (
    createPortal(
      <div className='dim'>
        <div>{content}</div>
      </div>,
      document.getElementById('modal') as HTMLElement,
    )
  ) : (
    <></>
  );
};

export default Modal;
