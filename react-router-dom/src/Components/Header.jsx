import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
export default function Header() {
  return (
    <Wrapper>
      <div className="nav">
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : undefined,
            })}
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : undefined,
            })}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/product"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : undefined,
            })}
          >
            Product
          </NavLink>
        </li>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  .nav {
    display: flex;
    gap: 2rem;
    background-color: green;
    color: white;
    font-weight: bold;
    font-size: 20px;
    padding: 2rem;
  }
  li {
    list-style: none;
  }
  a {
    color: white;
    text-decoration: none;
  }
  a.active {
    background-color: green;
    color: #fff;
    padding: 5px;
    text-decoration: underline;
  }
`;
