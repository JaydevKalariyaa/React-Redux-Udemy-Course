import React, { useState } from "react";
export const ProductContext = React.createContext({
  products: [],
  toggleFav: () => {},
});
export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: "p1",
      title: "Red Scarf",
      description: "A pretty red scarf.",
      isFavorite: false,
    },
    {
      id: "p2",
      title: "Blue T-Shirt",
      description: "A pretty blue t-shirt.",
      isFavorite: false,
    },
    {
      id: "p3",
      title: "Green Trousers",
      description: "A pair of lightly green trousers.",
      isFavorite: false,
    },
    {
      id: "p4",
      title: "Orange Hat",
      description: "Street style! An orange hat.",
      isFavorite: false,
    },
  ]);
  const toggleFav = (id) => {
    let productIndex = products.findIndex((product) => product.id === id);
    let updatedProducts = [...products];
    let updatedProduct = updatedProducts[productIndex];
    updatedProduct = {
      ...updatedProduct,
      isFavorite: !updatedProduct.isFavorite,
    };
    updatedProducts[productIndex] = updatedProduct;
    setProducts(updatedProducts);
  };
  const productValue = {
    products,
    toggleFav,
  };
  return (
    <ProductContext.Provider value={productValue}>
      {children}
    </ProductContext.Provider>
  );
};
