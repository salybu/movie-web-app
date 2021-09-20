import { createPortal } from 'react-dom';

export interface IToast {
  isVisible: boolean;
  message: string;
  close: () => void;
}

const Toast: React.FC<IToast> = ({ isVisible, close, message }): JSX.Element => {
  return isVisible ? (
    createPortal(
      <div className='toast' onClick={close}>
        <div>
          <p>{message}</p>
          <button onClick={close}>OK</button>
        </div>
      </div>,
      document.getElementById('modal') as HTMLElement,
    )
  ) : (
    <></>
  );
};

export default Toast;
