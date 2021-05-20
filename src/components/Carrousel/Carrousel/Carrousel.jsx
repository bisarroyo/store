import React from 'react';

import CarrouselStyle from './Styles';

const Carrousel = (props) => {
  const { children } = props;
  return (
    <CarrouselStyle>
      <h2 className='main__tittle'>Nuevas colecciones</h2>
      <div className='main__carrousel'>
        { children }
      </div>
    </CarrouselStyle>
  );
};

export default Carrousel;
