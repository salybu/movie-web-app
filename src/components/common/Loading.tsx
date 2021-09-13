import React from 'react';
import { createPortal } from 'react-dom';
import ReactLoading from 'react-loading';

const Loading: React.FC = (): JSX.Element => {
  return createPortal(
    <div className='dim'>
      <div>
        <ReactLoading type='balls' />
      </div>
    </div>,
    document.getElementById('modal') as HTMLElement,
  );
};

export default Loading;
