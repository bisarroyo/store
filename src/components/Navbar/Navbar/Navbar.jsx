import React from 'react';
import { BiStore } from 'react-icons/bi';

import Nav from './Styles';
import Burger from '../Burger/Burger';
import Search from '../../Header/Search/Search';

const Navbar = () => {
  return (
    <Nav>
      <div className='main-header'>
        <div className='logo'>
          <BiStore />
        </div>
        <div className='search-header'>
          {(screen.width > 768 && <Search />)}
        </div>
      </div>
      <Burger />
    </Nav>
  );
};

export default Navbar;

