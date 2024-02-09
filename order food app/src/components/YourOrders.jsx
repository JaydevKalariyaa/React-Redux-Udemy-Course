import { useEffect, useState, useContext } from "react";
import axios from "axios";
import UserProgressContext from "../store/context/UserProgressContext";
import Modal from "./UI/Modal";
import Button from "./UI/Button";
import Input from "./UI/Input";
export default function YourOrders() {
  const [orders, setOrders] = useState([]);
  const [name, setName] = useState("");
  const userCtx = useContext(UserProgressContext);
  // useEffect(() => {
  //   async function getOrders() {
  //     try {
  //       let { data } = await axios.get("http://localhost:3000/orders");
  //       console.log(data);
  //       setOrders(data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  //   getOrders();
  // }, [userCtx]);
  const handleCloseOrders = () => {
    userCtx.hideOrders();
  };
  const handleClick = async () => {
    try {
      let { data } = await axios.post("http://localhost:3000/userorders", {
        name: name,
      });
      console.log(data);
      setOrders(data);
    } catch (err) {
      console.log(err);
    }
    // setOrders((prev) => {
    //   prev.filter((order) => {
    //     return order.customer.name === name;
    //   });
    // });
  };
  return (
    <Modal
      open={userCtx.progress === "orders"}
      className="orders"
      onClose={handleCloseOrders}
    >
      <Input
        label="Full Name"
        type="text"
        id="full-name"
        name="name"
        onChange={(e) => setName(e.target.value)}
      />
      <Button onClick={handleClick}>Search</Button>

      <h2>Your Orders</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            <div className="customer">
              <p className="name">{order.customer.name}</p>
            </div>
            <div className="items">
              <ul>
                {order.items.map((item) => (
                  <li>
                    <img
                      src={`http://localhost:3000/${item.image}`}
                      width="100px"
                      height="100px"
                    />
                    <p>{item.name}</p>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
      <Button type="button" onClick={handleCloseOrders}>
        Close
      </Button>
    </Modal>
  );
}
