import styled from 'styled-components';

const CarrouselItemStyle = styled.div`
    width: 70%;
    min-width: 100px;
    max-width: 120px;
    margin: 10px;
    scroll-snap-align: center;

  .product-image {
    background-color: #ffffff;
    min-height: 120px;
  }

  .product-description {
    font-size: 1rem;
    margin: 5px;
    font-family: 'Yanone Kaffeesatz', sans-serif;
    font-weight: 600;
  }
  .product-price {
    font-size: 1.1rem;
    margin: 3px;
    font-family: 'Yanone Kaffeesatz', sans-serif;
    font-weight: 800;
  }   
`;

export default CarrouselItemStyle;
