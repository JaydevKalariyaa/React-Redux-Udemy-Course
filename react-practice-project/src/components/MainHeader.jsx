import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css";
export default function MainHeader() {
  return (
    <header>
      <ul>
        <li>
          <NavLink to="">Posts</NavLink>
        </li>
        <li>
          <NavLink to="new-post">New Posts</NavLink>
        </li>
      </ul>
    </header>
  );
}
