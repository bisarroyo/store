import React from 'react';

import Banner from './Styles';

const CardContainer = (props) => {
  const { title, description } = props;
  return (
    <div>
      <Banner>
        <div>
          <img src='' alt='' />
        </div>
        <h2>{ title }</h2>
        <p>{ description }</p>
        <button type='button'>
          Comprar ahora
        </button>
      </Banner>
    </div>
  );
};

export default CardContainer;
