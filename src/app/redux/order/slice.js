import { createSlice } from '@reduxjs/toolkit';
import { addOrder, editOrder, getOrder } from './operations';

const initialState = {
  orders: [],
  error: null,
  isLoading: false,
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,

  extraReducers(builder) {
    builder
      .addCase(addOrder.pending, state => {
        state.isLoading = true;
      })
      .addCase(addOrder.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(addOrder.fulfilled, (state, action) => {
        state.orders = [...state.orders, ...action.payload];
        state.isLoading = false;
        state.error = null;
      })
      .addCase(editOrder.pending, state => {
        state.isLoading = true;
      })
      .addCase(editOrder.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(editOrder.fulfilled, (state, action) => {
        // const updatedProduct = action.payload[0];
        // const index = state.products.findIndex(
        //   product => product.id === updatedProduct.id
        // );
        // if (index !== -1) {
        //   state.products[index] = updatedProduct;
        // }
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getOrder.pending, state => {
        state.isLoading = true;
      })
      .addCase(getOrder.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(getOrder.fulfilled, (state, action) => {
        state.orders = action.payload;
        state.isLoading = false;
        state.error = null;
      });
  },
});

export default orderSlice.reducer;
