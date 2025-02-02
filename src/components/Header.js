import React from 'react';
import logotype from '../images/fluffy_logo.svg';
import { Navbar, Nav, Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export function useWindowSize() {
  const [size, setSize] = React.useState([0, 0]);
  React.useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

const Header = props => {
  // const [width, setWidth] = React.useState(window.innerWidth);

  const activeLink = {
    fontWeight: 'bold',
    color: '#f18381',
  };


  return (
    <Navbar expand="lg">
      <Navbar.Brand href="/">
        <Image src={logotype} fluid alt="Logotype" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-center">
          <NavLink exact activeStyle={activeLink} className="nav-link" to="/">
            Portfolio
          </NavLink>
          <NavLink activeStyle={activeLink} className="nav-link" to="/order">
            Order
          </NavLink>
          {process.env.NODE_ENV !== 'production' && (
            <NavLink activeStyle={activeLink} className="nav-link" to="/gift-card-order">
              Gift Card
            </NavLink>
          )}
          <NavLink activeStyle={activeLink} className="nav-link" to="/about">
            About
          </NavLink>
          <NavLink activeStyle={activeLink} className="nav-link" to="/faq">
            FAQ
          </NavLink>
          <NavLink activeStyle={activeLink} className="nav-link" to="/contact">
            Contact
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
