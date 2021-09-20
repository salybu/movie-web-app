import { createPortal } from 'react-dom';

export interface IToast {
  isVisible: boolean;
  mode: string;
  message: string;
  close: () => void;
}

const Toast: React.FC<IToast> = ({ isVisible, mode, message, close }): JSX.Element => {
  return isVisible ? (
    createPortal(
      <div className='toast' onClick={close}>
        <div className={mode}>
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
