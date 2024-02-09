import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";

import Notification from "./components/UI/Notification";

import { sendData, fetchData } from "./store/cart";
let initial = true;
function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const notification = useSelector((state) => state.ui.notification);
  const cart = useSelector((state) => state.cart);
  const cartChanged = useSelector((state) => state.cart.changed);
  const dispatch = useDispatch();

  useEffect(() => {
    if (initial) {
      initial = false;
      return;
    }
    dispatch(sendData(cart));
  }, [cartChanged, dispatch, cart]);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <>
      {notification && (
        <Notification
          title={notification.title}
          message={notification.message}
          status={notification.status}
        />
      )}

      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
