import React from 'react';
import logotype from '../images/logotype.png';
import { Navbar, Nav, Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = (props) => {

const    activeLink = {
      fontWeight: "bold",
      color: "red"
    };

      return <Navbar   expand="lg">
      <Navbar.Brand href="/"><Image src={logotype} fluid alt="Logotype"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-center" >
            <NavLink exact  activeStyle={activeLink} className="nav-link"  to="/">Portfolio</NavLink>
            <NavLink activeStyle={activeLink} className="nav-link"  to="/order" >Order</NavLink>
            <NavLink activeStyle={activeLink} className="nav-link" to="/about">About</NavLink>
            <NavLink activeStyle={activeLink} className="nav-link"  to="/faq" >FAQ</NavLink>
            <NavLink activeStyle={activeLink} className="nav-link"  to="/contact" >Contact</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
      
      
}

export default Header;