import React from 'react';
import ReactDOM from 'react-dom';

import ShoppingcardStyle from './Styles';

const ShoppingCartModal = (props) => {
  if (!props.isOpen) {
    return null;
  }
  const { children } = props;
  return ReactDOM.createPortal (
    <ShoppingcardStyle>
      <button type='button' onClick={props.onClose}>
        X
      </button>
      {children}
    </ShoppingcardStyle>,
    document.getElementById('modal'),
  );
};
/* <ShoppingcardStyle>
      <MdShoppingCart />
    </ShoppingcardStyle> */
export default ShoppingCartModal;
