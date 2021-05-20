import styled from 'styled-components';

const CarrouselStyle = styled.section`
  width: 100%;
  height: 250px;

  .main__tittle, p, h3{
    margin: 5px 0 0 30px;
  }

  .main__carrousel{
    margin-left: 15px;
    margin-right: 15px;
    display: flex;
    overflow-x: scroll;
    overscroll-behavior-x: contain;
    scroll-snap-type: x proximity;
  }
`;

export default CarrouselStyle;
