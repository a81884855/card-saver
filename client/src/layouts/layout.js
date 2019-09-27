import Header from './header';
import Footer from './footer';

import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

export class layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container style={{ margin: '1rem auto' }}>{this.props.children}</Container>
        <Footer />
      </div>
    );
  }
}

export default layout;
