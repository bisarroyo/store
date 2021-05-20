import React, { Component } from 'react';
import { GiConverseShoe, GiSocks, GiPoloShirt, GiSunglasses } from 'react-icons/gi';

import CardCategorieStyle from './Styles';

class CardCategories extends Component {
  render() {
    return (
      <CardCategorieStyle>
        <div className='categorie-container'>
          <div>
            <a href='#'>
              <GiConverseShoe className='icon-category' />
            </a>
            <h4>Tennis</h4>
          </div>
          <div>
            <a href=''>
              <GiSocks className='icon-category' />
            </a>
            <h4>Medias</h4>
          </div>
          <div>
            <a href=''>
              <GiPoloShirt className='icon-category' />
            </a>
            <h4>Camisa</h4>
          </div>
          <div>
            <a href=''>
              <GiSunglasses className='icon-category' />
            </a>
            <h4>Accesorios</h4>
          </div>
        </div>
      </CardCategorieStyle>
    );
  }
}

export default CardCategories;
