import { configureStore } from "@reduxjs/toolkit";
import flowerReducer from "./context/flowerSlice";
import cartReducer from "./features/cart/cartSlice";

const store = configureStore({
  reducer: {
    flower: flowerReducer,
    cart: cartReducer,
  },
});
export default store;
