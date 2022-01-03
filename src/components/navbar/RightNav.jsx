import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Slideburger = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index: 19;
  li {
    padding: 18px 10px;
    padding: 20px;
  }
  a {
    text-decoration: none;
    font-weight: 400;
    font-style: normal;
    color: rgb(255 255 255 / 66%);
  }
  a:hover {
    color: #333;
  }
  li:hover {
    background: rgb(86, 151, 86);
  }
  .logoBurger {
    display: none;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background: #262a2d;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    width: 65%;
    padding-top: 1.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      text-align: center;
      width: 85%;
    }
    a {
      color: #fff;
    }
    .logoBurger {
      display: block;
      width: 75px;
      height: 75px;
      margin: auto;
      border-radius: 50%;
    }
  } ;
`;

const RightNav = ({ open }) => {
  return (
    <Slideburger open={open}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/skills">Skills</Link>
      </li>
      <li>
        <Link to="/projets">Projets</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/cv">Cv</Link>
      </li>
    </Slideburger>
  );
};

export default RightNav;
