import React, { useContext } from "react";
import NumberFormatter from "../util/NumberFormatter";
import Button from "./UI/Button";
import CartContext from "../store/context/CartContext";
export default function MealItem({ meal }) {
  let cart = useContext(CartContext);
  const handleAddCart = () => {
    cart.addItem(meal);
  };
  return (
    <li className="meal-item" key={meal.id}>
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt="" />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">{NumberFormatter(meal.price)}</p>
          <p className="meal-item-description"> {meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={handleAddCart}>Add To Cart</Button>
        </p>
      </article>
      \
    </li>
  );
}
