import React, { useState } from 'react';
import { MdShoppingCart } from 'react-icons/md';

import ShoppingCartContainer from '../ShoppingCartContainer/ShoppingCartContainer';
import Modal from '../../Modal/Modal';
import ShoppingCartIconStyle from './Styles';

const ShoppingcartIcon = () => {
  const [ModalShoppin, setModalShopping] = useState(false);

  const handleOpenModal = () => {
    setModalShopping(true);
  };

  const handleCloseModal = () => {
    setModalShopping(false);
  };

  return (
    <ShoppingCartIconStyle>
      <MdShoppingCart className='shopping-icon' onClick={handleOpenModal} />
      <Modal
        isOpen={ModalShoppin}
        onClose={handleCloseModal}
      >
        <ShoppingCartContainer />
      </Modal>
    </ShoppingCartIconStyle>
  );
};

export default ShoppingcartIcon;
