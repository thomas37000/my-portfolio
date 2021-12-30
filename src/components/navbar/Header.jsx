import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../images/js.png";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Link to="/"> <img src={logo} className="App-logo" alt="logo" /></Link>
              <Link to="/skills">Skills</Link>
              <Link to="/projets">Projets</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/cv">Cv</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;