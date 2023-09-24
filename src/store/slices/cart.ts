import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { products: [] },
  reducers: {
    addToCart: (state, action) => {
      state.products = [...state.products, action.payload];
    },
    removeFromCart: (state, action) => {
      const productIdToRemove = action.payload.id;
      state.products = state.products.filter(
        (product) => product.id !== productIdToRemove
      );
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
