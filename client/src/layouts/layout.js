import Header from './header';
import FooterPage from './footer';

import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

export class layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container style={{ margin: '1rem auto', minHeight: '100vh' }}>
          {this.props.children}
        </Container>
        <FooterPage />
      </div>
    );
  }
}

export default layout;
