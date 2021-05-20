import React from 'react';

import Navbar from '../components/Navbar/Navbar/Navbar';
import Header from '../components/Header/Header/Header';
import Search from '../components/Header/Search/Search';
import CardContainer from '../components/CardContainer/CardContainer';
import Carrousel from '../components/Carrousel/Carrousel/Carrousel';
import CarrouselItem from '../components/Carrousel/CarrouselItem/CarrouselItem';
import Footer from '../components/Footer/Footer';
import Text from '../components/Text/Text';
import CardCategories from '../components/CardCartegories/CardCategories';

import GlobalStyle from '../styles/GlobalStyles';

const App = () => {
  return (
    <div className='App'>
      <GlobalStyle />
      <Header>
        <Navbar />
        {(screen.width < 768 && <Search />)}
      </Header>
      <CardContainer />
      <Carrousel>
        {[1, 2, 3, 4, 5, 6, 7, 8].map(id => <CarrouselItem key={id} />)}
      </Carrousel>
      <CardContainer />
      <Carrousel>
        {[1, 2, 3, 4, 5, 6, 7, 8].map(id => <CarrouselItem key={id} />)}
      </Carrousel>
      <CardContainer />
      <CardCategories />
      <Text />
      <Footer />
    </div>
  );
};

export default App;
