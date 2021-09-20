import { createPortal } from 'react-dom';

export interface IToast {
  isVisible: boolean;
  message: string;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Toast: React.FC<IToast> = ({ isVisible, setIsVisible, message }): JSX.Element => {
  const close = () => {
    setIsVisible(false);
  };

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
