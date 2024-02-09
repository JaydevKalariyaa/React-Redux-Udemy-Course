import { createContext, useReducer, useEffect } from "react";
import { cartReducer } from "../reducer/cartReducer";
const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  deleteItem: (id) => {},
});
export default CartContext;

export function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });
  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
  };

  function addItem(item) {
    dispatchCartAction({ type: "ADD_ITEM", item });
  }

  function removeItem(id) {
    dispatchCartAction({ type: "REMOVE_ITEM", id });
  }

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}
