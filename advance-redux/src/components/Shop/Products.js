import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DummyProducts = [
  {
    title: "hi",
    price: 6,
    description: "This is a first product - amazing!",
    id: 1,
  },
  {
    title: "hi2",
    price: 5,
    description: "This is a first product - amazing!",
    id: 2,
  },
  {
    title: "hi3",
    price: 10,
    description: "This is a first product - amazing!",
    id: 3,
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DummyProducts.map((product) => (
          <ProductItem product={product} />
        ))}
      </ul>
    </section>
  );
};

export default Products;
