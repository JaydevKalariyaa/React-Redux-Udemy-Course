import React, { useContext } from "react";
import Modal from "./UI/Modal";
import UserProgressContext from "../store/context/UserProgressContext";
import Button from "./UI/Button";
import CartContext from "../store/context/CartContext";
import NumberFormatter from "../util/NumberFormatter";
import Input from "./UI/Input";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Checkout() {
  const userCtx = useContext(UserProgressContext);
  const cartCtx = useContext(CartContext);
  const handleCloseCheckout = () => {
    userCtx.hideCheckout();
  };
  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    let frm = new FormData(e.target);
    const customer = Object.fromEntries(frm.entries());
    const items = cartCtx.items;

    try {
      const res = await axios.post("http://localhost:3000/orders", {
        order: { customer, items },
      });
      userCtx.hideCheckout();
      toast.success(res.data.message);
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else if (error.request) toast.error(error.request);
      else {
        toast.error("Error", error.message);
      }
    }
  };
  return (
    <>
      <ToastContainer />
      <Modal
        open={userCtx.progress === "checkout"}
        className="checkout"
        onClose={handleCloseCheckout}
      >
        <form onSubmit={handleSubmit}>
          <h2>CheckOut</h2>
          <p>Total Amount: {NumberFormatter(cartTotal)}</p>

          <Input label="Full Name" type="text" id="full-name" name="name" />
          <Input label="E-Mail Address" type="email" id="email" name="email" />
          <Input label="Street" type="text" id="street" name="street" />
          <div className="control-row">
            <Input
              label="Postal Code"
              type="text"
              id="postal-code"
              name="postalCode"
            />
            <Input label="City" type="text" id="city" name="city" />
          </div>

          <p className="modal-actions">
            <Button type="button" textOnly onClick={handleCloseCheckout}>
              Close
            </Button>
            <Button>Submit Order</Button>
          </p>
        </form>
      </Modal>
    </>
  );
}
