import { createSlice } from '@reduxjs/toolkit';
import { addOrder, editOrder, getOrders } from './operations';

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
        const index = state.orders.findIndex(
          order => order.id === action.payload.id
        );
        if (index !== -1) {
          state.orders[index] = action.payload;
        }
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getOrders.pending, state => {
        state.isLoading = true;
      })
      .addCase(getOrders.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.orders = action.payload;
        state.isLoading = false;
        state.error = null;
      });
  },
});

export default orderSlice.reducer;
