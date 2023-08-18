import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: false,
  mobile: false,
  products: false,
  account: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleCart(state, action) {
      state.cart = action.payload;
    },

    toggleMobile(state, action) {
      state.mobile = action.payload;
    },

    toggleProducts(state, action) {
      state.products = action.payload;
    },

    toggleAccount(state, action) {
      state.account = action.payload;
    },
  },
});

export default modalSlice.reducer;
export const { toggleCart, toggleProducts, toggleAccount, toggleMobile } =
  modalSlice.actions;
