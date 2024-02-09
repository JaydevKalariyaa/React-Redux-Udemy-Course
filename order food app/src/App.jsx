import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import Meals from "./components/Meals";
import YourOrders from "./components/YourOrders";
import { CartContextProvider } from "./store/context/CartContext";
import { UserProgressContextProvider } from "./store/context/UserProgressContext";
function App() {
  return (
    <>
      <UserProgressContextProvider>
        <CartContextProvider>
          <Header />
          <Meals />
          <Cart />
          <Checkout />
          <YourOrders />
        </CartContextProvider>
      </UserProgressContextProvider>
    </>
  );
}

export default App;
