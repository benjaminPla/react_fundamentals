import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import productsReducer from "./slices/products";

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
  middleware: [thunk],
});

export default store;
