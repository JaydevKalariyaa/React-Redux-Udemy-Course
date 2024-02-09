import React from "react";
import logo from "../assets/quiz-logo.png";
export default function Header() {
  console.log("<Header> is rendered");

  return (
    <>
      <header>
        <img src={logo} alt="" />
        <h1>Welcome to Quiz App</h1>
      </header>
    </>
  );
}
