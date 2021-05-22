import React from 'react';
import { BiStore } from 'react-icons/bi';

import Nav from './Styles';
import Burger from '../Burger/Burger';

const Navbar = (props) => {
  const { children } = props;
  return (
    <Nav>
      <div className='main-header'>
        <div className='logo'>
          <BiStore />
        </div>
        <div className='search-header'>
          { children }
        </div>
      </div>
      <Burger />
    </Nav>
  );
};

export default Navbar;

