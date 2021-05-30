import styled from 'styled-components';

const ModalStyle = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #00000044;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 25;
  display: flex;
  justify-content: center;
  align-items: center;

  .container-modal {
    background-color: white;
    min-width: 300px;
    min-height: 100px;
    border-radius: 10px;
    position: relative;
    padding: 10px;
  }
  button {
    height: 40px;
    width: 40px;
    position: absolute;
    z-index: 26;
    color: #ffffff;
    right: 12px;
    top: 10px;
    outline: none;
    background-color: #fff123;
    border-radius: 25%;
    border: transparent;
  }

  @media(min-width: 769px) {
    div {
      width: 600px;
    }
  }
`;

export default ModalStyle;
