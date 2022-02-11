import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Burger from "./Burger";
import logo from "../../images/js.png";

const Nav = styled.nav`
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #fff;
  box-shadow: rgb(0 0 0 / 15%) 0px 15px 25px, rgb(0 0 0 / 5%) 0px 5px 10px;

  @media (max-width: 765px) {
    width: fit-content;
    overflow: hidden;
    position: fixed;

    .logo-link {
      display: none;
    }
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Link to="/" className="logo-link">
        <img className="App-logo" src={logo} alt="logo" />
      </Link>
      <Burger />
    </Nav>
  );
};

export default Navbar;
