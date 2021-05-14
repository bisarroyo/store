import React from 'react';

import Nav from './Styles';
import Burger from '../Burger/Burger';

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        Nav Bar
      </div>
      <Burger />
    </Nav>
  );
};

export default Navbar;

