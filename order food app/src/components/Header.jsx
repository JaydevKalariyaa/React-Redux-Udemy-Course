import React, { useContext, useState } from "react";
import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/context/CartContext";
import UserProgressContext from "../store/context/UserProgressContext";
export default function Header() {
  const upc = useContext(UserProgressContext);
  const cart = useContext(CartContext);
  const noOfItems = cart.items.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  const handleClick = () => {
    upc.showCart();
  };
  const handleClick2 = () => {
    upc.showOrders();
  };
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="" />
        <h1>Reactfood</h1>
      </div>
      <Button textOnly onClick={handleClick2}>
        Your Orders
      </Button>
      <nav>
        <Button textOnly onClick={handleClick}>
          cart ({noOfItems})
        </Button>
      </nav>
    </header>
  );
}
