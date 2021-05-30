import React from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header/Header/Header';
import CardContainer from '../components/CardContainer/CardContainer';
import ContainerItem from '../components/ContainerItem/ContainerItem/ContainerItem';
import Item from '../components/ContainerItem/Item/Item';
import Footer from '../components/Footer/Footer';
import Text from '../components/Text/Text';
import CardCategories from '../components/CardCartegories/CardCategories';
import Loading from '../components/Loading/Loading';

import GlobalStyle from '../styles/GlobalStyles';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <GlobalStyle />
        <Header />
        <CardContainer title='Colección nueva' description='Mira nuestra colección nueva' />
        <ContainerItem title='Nuevas colecciones'>
          {[1].map(id => <Item key={id} />)}
        </ContainerItem>
        <CardContainer title='Colección de verano' description='Mira nuestra colección de verano' />
        <ContainerItem title='Nuevas Tendencias'>
          {[1].map(id => <Item key={id} />)}
        </ContainerItem>
        <CardContainer title='Colección de Invierno' description='Mira nuestra colección de Invierno' />
        <CardCategories />
        <Text />
        <Footer />
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  const loading = state.item;
  return { itemList: loading };
};
export default connect(mapStateToProps, null)(App);
