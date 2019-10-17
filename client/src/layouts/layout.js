import Header from './header';
import FooterPage from './footer';
import ScrollUpButton from 'react-scroll-up-button';

import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

export class layout extends Component {
  render() {
    return (
      <>
        <Header />
        <Container style={{ margin: '1rem auto', minHeight: '100vh' }}>
          {this.props.children}
        </Container>
        <ScrollUpButton />
        <FooterPage />
      </>
    );
  }
}

export default layout;
