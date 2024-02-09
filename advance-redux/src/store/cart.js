import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui";
import axios from "axios";

const initialState = { cartItems: [], isReplaced: false };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    replaceCart(state, action) {
      state.cartItems = action.payload?.cartItems || [];
    },
    addItems(state, action) {
      if (!state.cartItems) state.cartItems = [];
      let item = state.cartItems.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity++;
        item.total += action.payload.price;
      } else
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
          total: action.payload.price,
        });
      state.isReplaced = !state.isReplaced;
    },
    removeItems(state, action) {
      let item = state.cartItems.find((item) => item.id === action.payload);
      if (item.quantity > 1) {
        item.quantity -= 1;
        item.total -= item.price;
      } else {
        state.cartItems = state.cartItems.filter((it) => it !== item);
      }
      state.isReplaced = !state.isReplaced;
    },
  },
});

export const sendData = (cart) => {
  return async (dispatch) => {
    try {
      await axios.put(
        "https://redux-project-f5cd4-default-rtdb.firebaseio.com/cart.json",
        JSON.stringify(cart)
      );

      dispatch(
        uiActions.showNotification({
          title: "Data sent!",
          message: "Data sent Succesfully!!",
          status: "success",
        })
      );
    } catch (error) {
      console.log(error);
      dispatch(
        uiActions.showNotification({
          title: "Error Occured",
          message: "Unable to sent Data!!",
          status: "error",
        })
      );
    }
  };
};

export const cartActions = cartSlice.actions;
export const fetchData = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        "https://redux-project-f5cd4-default-rtdb.firebaseio.com/cart.json"
      );
      dispatch(cartActions.replaceCart(res.data));
      dispatch(
        uiActions.showNotification({
          title: "Data fetched!",
          message: "Data fetched Succesfully!!",
          status: "success",
        })
      );
    } catch (error) {
      console.log(error);
      dispatch(
        uiActions.showNotification({
          title: "Error Occured",
          message: "Unable to fetch Data!!",
          status: "error",
        })
      );
    }
  };
};

export default cartSlice.reducer;
