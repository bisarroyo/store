import styled from 'styled-components';

const CarrouselStyle = styled.section`
  margin: 0px 5px;
  min-height: 350px;
  min-width: 280px;

  h2 {
    margin: 20px;
  }

  div {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  }

  @media (min-width: 768px) {
    margin: 30px 20px;

    h2 {
      margin: 40px;
    }
  }

`;

export default CarrouselStyle;
