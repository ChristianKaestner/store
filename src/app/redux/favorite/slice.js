import { createSlice } from '@reduxjs/toolkit';
import { addFavorite, deleteFavorite } from './operations';
import { getFavorite, getFavoriteProducts } from './operations';

const initialState = {
  ids: [],
  products: [],
  error: null,
  isLoading: false,
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,

  extraReducers(builder) {
    builder
      .addCase(addFavorite.pending, state => {
        state.isLoading = true;
      })
      .addCase(addFavorite.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(addFavorite.fulfilled, (state, action) => {
        state.ids = [...state.ids, ...action.payload];
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteFavorite.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteFavorite.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(deleteFavorite.fulfilled, (state, action) => {
        const productId = action.payload;
        const filtredIds = state.ids.filter(id => id !== productId);
        state.ids = filtredIds;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getFavorite.pending, state => {
        state.isLoading = true;
      })
      .addCase(getFavorite.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(getFavorite.fulfilled, (state, action) => {
        state.ids = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getFavoriteProducts.pending, state => {
        state.isLoading = true;
      })
      .addCase(getFavoriteProducts.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(getFavoriteProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoading = false;
        state.error = null;
      });
  },
});

export default favoriteSlice.reducer;
