import React, { Component } from 'react';

import Banner from './Styles';

class CardContainer extends Component {
  render() {
    return (
      <div>
        <Banner>
          <div className='main-banner__container'>
            <img src='' alt='' />
          </div>
          <h2>Colección de verano</h2>
          <p>Mira nuestra nueva colección de verano.</p>
          <button type='button' className='buttom-shop'>
            Comprar ahora
          </button>
        </Banner>
      </div>
    );
  }
}

export default CardContainer;
