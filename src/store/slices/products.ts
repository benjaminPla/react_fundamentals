import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: { products: [], filteredProducts: [] },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setFilteredProducts: (state, action) => {
      state.filteredProducts = action.payload;
    },
  },
});

export const { setProducts, setFilteredProducts } = productsSlice.actions;
export default productsSlice.reducer;
