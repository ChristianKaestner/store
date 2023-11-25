import { createSlice } from '@reduxjs/toolkit';
import { getProductReviews, addProductReview } from './operations';
import { getuserReviews, deleteProductReview } from './operations';

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
      })
      .addCase(addProductReview.pending, state => {
        state.isLoading = true;
      })
      .addCase(addProductReview.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(addProductReview.fulfilled, (state, action) => {
        state.product = action.payload.product;
        state.items = [...state.items, action.payload.review];
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getuserReviews.pending, state => {
        state.isLoading = true;
      })
      .addCase(getuserReviews.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(getuserReviews.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteProductReview.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteProductReview.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(deleteProductReview.fulfilled, (state, action) => {
        const index = state.items.findIndex(item => item.id === action.payload);
        state.items.splice(index, 1);
        state.isLoading = false;
        state.error = null;
      });
  },
});

export default reviewsSlice.reducer;
