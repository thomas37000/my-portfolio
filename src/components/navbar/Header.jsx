import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../images/js.png";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} className="App-logo" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="#ancre-présentation">Présentation</Nav.Link>
              <Nav.Link href="#ancre-skills">Skills</Nav.Link>
              <Nav.Link href="#ancre-projets">Projets</Nav.Link>
              <Nav.Link href="#ancre-contact">Contact</Nav.Link>
              <Nav.Link eventKey={2} href="#ancre-cv">
                Cv
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;