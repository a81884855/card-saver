import Header from './header';
import Footer from './footer';

import React, { Component } from 'react';

export class layout extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default layout;
