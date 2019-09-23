import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { IoIosCard } from 'react-icons/io';

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <IoIosCard style={{ fontSize: 'larger', marginRight: '5px' }} />
          Super Card Saver
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/cards">All Cards</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
