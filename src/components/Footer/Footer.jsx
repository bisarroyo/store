import React, { Component } from 'react';

import FooterStyle from './Styles';

class Footer extends Component {
  render() {
    return (
      <div>
        <FooterStyle>
          <div>
            <p>Políticas</p>
            <p>Reembolsos</p>
          </div>
          <div>
            <p>Visa</p>
            <p>Mastercard</p>
            <p>Paypal</p>
          </div>
          <div>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Youtube</p>
          </div>
          <div>
            <p>Trabaja</p>
            <p>Atención cliente</p>
            <p>F.A.Q.</p>
          </div>
        </FooterStyle>
      </div>
    );
  }
}

export default Footer;
