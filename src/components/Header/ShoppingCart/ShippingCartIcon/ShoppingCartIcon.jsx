import React, { useState } from 'react';
import { MdShoppingCart } from 'react-icons/md';

import ShoppingCartModal from '../ShoppingCartModal/ShoppingCartModal';
import ShoppingCartIconStyle from './Styles';

const ShoppingcartIcon = () => {
  const [ModalShoppin, setModalShopping] = useState(false);

  const handleOpenModal = () => {
    setModalShopping(true);
  };

  // handleCloseModal = e => {
  //   this.setState({ modalIsOpen: false });
  // };

  return (
    <ShoppingCartIconStyle>
      <MdShoppingCart className='shopping-icon' onClick={handleOpenModal} />
      {(ModalShoppin === true && <ShoppingCartModal />)}
    </ShoppingCartIconStyle>
  );
};

export default ShoppingcartIcon;
