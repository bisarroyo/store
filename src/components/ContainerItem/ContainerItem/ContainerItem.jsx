import React from 'react';

import CarrouselStyle from './Styles';

const ContainerItem = (props) => {
  const { children, title } = props;
  return (
    <CarrouselStyle>
      <h2>{ title }</h2>
      <div>
        { children }
      </div>
    </CarrouselStyle>
  );
};

export default ContainerItem;
