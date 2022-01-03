import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Burger from "./Burger";
import logo from "../../images/js.png";

const Nav = styled.nav`
  height: 10vh;
  border-bottom: 1px solid #f5f5f5;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #212529;
  margin: 0 -11rem;

  @media (max-width: 765px) {
    width: fit-content;
    overflow: hidden;
    position: fixed;

    .logo {
      display: flex;
    }
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Link to="/">
        <img className="App-logo" src={logo} alt="logo" />
      </Link>
      <Burger />
    </Nav>
  );
};

export default Navbar;
