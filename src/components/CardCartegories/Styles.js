import styled from 'styled-components';

const CardCategorieStyle = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;


  .categorie-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

    div {
    min-width: 120px;
    min-height: 120px;
    margin: 20px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    }
  }
  
  .icon-category {
    font-size: 4rem;
    color: #000000;
    margin-bottom: 5px;
  }
`;

export default CardCategorieStyle;
