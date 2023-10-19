import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import productsReducer from "./slices/products";
import cartReducer from "./slices/cart";
import messageReducer from "./slices/message";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    message: messageReducer,
  },
  middleware: [thunk],
});

export default store;
