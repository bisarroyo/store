import styled from 'styled-components';

const SearchContainer = styled.section`
  display: flex;
  justify-content: center;
  margin: 3px;

  .search-buttom {
    width: 100%;
    height: 30px;
    max-width: 350px;
    border: 1px solid #00000055;
    border-radius: 15px;
    display: flex;
    justify-content:space-between;
    align-items: center;
    transition: .5s;
  }

  .search-buttom:focus-within {
    border-color: #000000bb;
    box-shadow: 0px 3px 6px 0px #00000033;
  }

  .input-search {
    background-color: transparent;
    height: 15px;
    outline: none;
    border: none;
    min-width: 230px;
    margin-left: 15px;
  }

  .search {
    font-size: 1rem;
    margin-right: 20px;
    color: #000000bb;
}
`;

export default SearchContainer;
