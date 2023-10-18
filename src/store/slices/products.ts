import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: { products: [], filteredProducts: [], loading: false },
  reducers: {
    setFilteredProducts: (state, action) => {
      state.filteredProducts = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = false;
        state.products = action.payload;
        state.filteredProducts = state.products;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = false;
        state.products = [];
      });
  },
});

export const { setFilteredProducts } = productsSlice.actions;
export default productsSlice.reducer;
