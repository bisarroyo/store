import styled from 'styled-components';

const FooterStyle = styled.footer`
  border-top: 1px solid #ffffff55;
  margin-top: 25px;
  height: 300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  div {
    width: 45%;
    height: auto;
    padding: 0 10px;
  }

  @media (min-width: 768px) {
    height: 200px;
    
    div {
      width: 20%;
    }
  }
`;

export default FooterStyle;
