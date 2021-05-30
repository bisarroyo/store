import React from 'react';
import { connect } from 'react-redux';

import CarrouselItemStyle from './Styles';
import getItem from '../../../actions/itemActions';

class Item extends React.Component {
  componentDidMount() {
    const { getItem } = this.props;
    getItem;
  }

  render() {
    return (
      <>
        {/* {item.map((item) => (
          <CarrouselItemStyle key={item.id}>
            <div>
              <img src={ this.props.items.image } />
            </div>
            <h4>{ item.title }</h4>
            <p>{ item.category }</p>
            <span>${ item.price }</span>
          </CarrouselItemStyle>
        )}, */}
      </>
    );
  }
};

const mapStateToProps = (state) => {
  const elements = state;
  return { items: elements };
};

export default connect(mapStateToProps, getItem)(Item);
