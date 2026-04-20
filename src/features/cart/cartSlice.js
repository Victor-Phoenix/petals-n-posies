import { createSlice, current } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
  cart: [],
  deliveryDate: null,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // console.log(action.payload);
      const cartItem = state.cart.find(
        (item) =>
          item.id === action.payload.id && item.type === action.payload.type,
      );
      if (cartItem) {
        cartItem.quantity += 1;
      } else {
        state.cart.push(action.payload);
      }
      // console.log(state.cart);
    },
    increaseQuantity: (state, action) => {
      const item = state.cart.find(
        (item) =>
          item.id === action.payload.id && item.type === action.payload.type,
      );
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.cart.find(
        (item) =>
          item.id === action.payload.id && item.type === action.payload.type,
      );
      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.cart = state.cart.filter(
          (obj) => obj.id !== item.id && obj.type !== item.type,
        );
      }
    },
    deleteItem: (state, action) => {
      state.cart = state.cart.filter(
        (item) =>
          item.id !== action.payload.id || item.type !== action.payload.type,
      );
    },
    setDeliveryDate: (state, action) => {
      state.deliveryDate = action.payload;
    },
  },
});

export const getCart = (state) => {
  state.cart.cart;
};

export const getTotalSum = (state) => {
  return state.cart.cart.reduce((sum, item) => {
    return sum + item.quantity * item.price;
  }, 0);
};

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  deleteItem,
  setDeliveryDate,
} = cartSlice.actions;

export default cartSlice.reducer;
