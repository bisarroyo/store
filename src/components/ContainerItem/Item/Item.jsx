import React, { Component } from 'react';

import CarrouselItemStyle from './Styles';

class Item extends Component {
  render() {
    return (
      <div>
        <CarrouselItemStyle>
          <div></div>
          <h4>Nike</h4>
          <p>Camisa</p>
          <span>$10</span>
        </CarrouselItemStyle>
      </div>
    );
  }
}

export default Item;
