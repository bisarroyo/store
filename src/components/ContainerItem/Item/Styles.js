import styled from 'styled-components';

const CarrouselItemStyle = styled.div`
  width: 110px;
  margin: 20px 30px 0px 0px;
  height: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    width:110px;
    height: 130px;
    background-color: black;
  }
  h4 {
    width: 50px;
    font-size: 1rem;
    margin: 5px;
    text-align: start;
  }

  p {
    width: 50px;
    font-size: 1.1rem;
    margin: 5px;
    text-align: start;
  }
  span{
    width: 50px;
    font-size: 0.9rem;
  }

  @media (min-width: 768px) {
    width: 200px;
    margin: 10px 15px 0px 0px;
    height: 350px;

    div {
      width: 180px;
      height: 250px;
    }
    h4 {
      width: 150px;
    }

    p {
      width: 150px;
    }

    span{
      width: 150px;
    }
  }
`;

export default CarrouselItemStyle;
