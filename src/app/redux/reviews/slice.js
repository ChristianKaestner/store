import { createSlice } from '@reduxjs/toolkit';
import { getProductReviews } from './operations';

const initialState = {
  items: [],
  product: null,
  error: null,
  isLoading: false,
};

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getProductReviews.pending, state => {
        state.isLoading = true;
      })
      .addCase(getProductReviews.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(getProductReviews.fulfilled, (state, action) => {
        state.product = action.payload.product;
        state.items = action.payload.reviews;
        state.isLoading = false;
        state.error = null;
      });
  },
});

export default reviewsSlice.reducer;
