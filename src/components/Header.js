import React from 'react';
import logotype from '../images/logotype.png';
import { Navbar, Nav, Image } from 'react-bootstrap';

const Header = (props) => {
      return <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/"><Image src={logotype} fluid alt="Logotype"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
            <Nav.Link href="/">Portfolio</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/order">Order</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
      
      
}

export default Header;