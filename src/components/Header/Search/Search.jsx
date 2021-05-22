import React, { Component } from 'react';
import { ImSearch } from 'react-icons/im';

import ShoppingCartIcon from '../ShoppingCart/ShippingCartIcon/ShoppingCartIcon';
import SearchContainer from './Styles';

class Search extends Component {
  render() {
    return (
      <div>
        <SearchContainer>
          <div className='search-buttom'>
            <div>
              <input type='text' placeholder='Buscar...' className='input-search' />
            </div>
            <div>
              <ImSearch className='search' />
            </div>
          </div>
          <ShoppingCartIcon />
        </SearchContainer>
      </div>
    );
  };
};

export default Search;
