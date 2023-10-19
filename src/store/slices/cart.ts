import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartProduct } from "../../components/Cart";

const cartSlice = createSlice({
  name: "cart",
  initialState: { products: [] as ICartProduct[] },
  reducers: {
    addToCart: (state, action: PayloadAction<ICartProduct>) => {
      const alreadyInCartIndex = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (alreadyInCartIndex !== -1) {
        state.products[alreadyInCartIndex].quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const productIdToRemove = action.payload;
      state.products = state.products.filter(
        (product) => product.id !== productIdToRemove
      );
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
