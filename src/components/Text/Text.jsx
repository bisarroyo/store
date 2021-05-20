import React, { Component } from 'react';

import TextStyle from './Styles';

class Text extends Component {
  render() {
    return (
      <div>
        <TextStyle>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consectetur placeat ab magni, quo nobis officiis mollitia ullam
            minus voluptatibus eaque modi quasi pariatur iusto, iste nemo
            corrupti, ratione delectus in.
          </p>
        </TextStyle>
      </div>
    );
  }
}

export default Text;
