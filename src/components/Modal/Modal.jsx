import React from 'react';
import ReactDOM from 'react-dom';

import ModalStyle from './Styles';

const Modal = (props) => {
  const { children, onClose, isOpen } = props;

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal (
    <ModalStyle>
      <div className='container-modal'>
        <button type='button' onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </ModalStyle>,
    document.getElementById('Modal'),
  );
};

export default Modal;
