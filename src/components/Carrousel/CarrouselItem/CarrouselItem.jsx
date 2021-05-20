import React, { Component } from 'react';

import CarrouselItemStyle from './Styles';

class CarrouselItem extends Component {
  render() {
    return (
      <div>
        <CarrouselItemStyle>
          <div className='product-image'></div>
          <p className='product-description'>Camisa</p>
          <p className='product-price'>$10</p>
        </CarrouselItemStyle>
      </div>
    );
  }
}

export default CarrouselItem;
