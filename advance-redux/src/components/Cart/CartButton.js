import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { uiActions } from "../../store/ui";
const CartButton = (props) => {
  const dispatch = useDispatch();
  const handleCart = () => {
    dispatch(uiActions.toggle());
  };
  const Items = useSelector((state) => state.cart.cartItems);
  const total =
    Items?.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0) || 0;
  return (
    <button className={classes.button} onClick={handleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{total}</span>
    </button>
  );
};

export default CartButton;
