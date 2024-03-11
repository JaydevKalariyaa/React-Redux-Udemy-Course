import React, { useContext, useReducer } from "react";
import { useSelector } from "react-redux";

import FavoriteItem from "../components/Favorites/FavoriteItem";
import "./Products.css";
import { ProductContext } from "../context/productsContext";
const Favorites = (props) => {
  // const favoriteProducts = useSelector(state =>
  //   state.shop.products.filter(p => p.isFavorite)
  // );
  const ctx = useContext(ProductContext);
  const favoriteProducts = ctx.products.filter((p) => p.isFavorite);

  let content = <p className="placeholder">Got no favorites yet!</p>;
  if (favoriteProducts.length > 0) {
    content = (
      <ul className="products-list">
        {favoriteProducts.map((prod) => (
          <FavoriteItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
          />
        ))}
      </ul>
    );
  }
  return content;
};

export default Favorites;