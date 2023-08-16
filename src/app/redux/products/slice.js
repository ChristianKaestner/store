import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from './operations';

const initialState = {
  items: [],
  cart: [],
  favorite: [],
  isError: false,
  isLoading: false,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, state => {
        state.isError = true;
        state.isLoading = false;
      });
  },
});

export default productsSlice.reducer;
