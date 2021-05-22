import styled from 'styled-components';

const Banner = styled.section`
  width: 100%;
  min-height: 400px;
  height: 400px;
  position: relative;
  margin-bottom: 50px;
  z-index: 10;

  div {
    background-color: black;
    height: 285px;
  }

  img {
    
  }

  p {
    position: absolute;
    bottom: 30px;
    left: 20px;
  }

  h2 {
    position: absolute;
    bottom: 50px;
    left: 20px;
  }

  button {
    position: absolute;
    bottom: 0;
    left: 20px;
    font-size: 1.3rem;
    outline: none;
    border: 1px solid #2a9d8f;
    padding: 5px 10px;
    background-color: #ffffffdd;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    height: 600px;
    
    div {
      height: 485px;
    }

    p {
      position: absolute;
      bottom: 0px;
      left: 40px;
    }

    h2 {
      position: absolute;
      bottom: 30px;
      left: 40px;
    }

    button {
      position: absolute;
      bottom: 0px;
      left: calc(100% - 200px);
      font-size: 1.3rem;
      outline: none;
      border: 1px solid #2a9d8f;
      padding: 5px 10px;
      background-color: #ffffffdd;
      cursor: pointer;
    }
  }
`;

export default Banner;
