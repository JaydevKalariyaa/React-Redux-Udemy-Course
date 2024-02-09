import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { cartActions } from "../../store/cart";
import { useDispatch } from "react-redux";
const ProductItem = ({ product }) => {
  const { title, price, description } = product;
  let dispatch = useDispatch();
  const handleAddItem = () => {
    dispatch(cartActions.addItems(product));
  };
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={handleAddItem}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
