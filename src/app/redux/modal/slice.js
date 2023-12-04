import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: false,
  order: false,
  mobile: false,
  products: false,
  account: false,
  success: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleCart(state, action) {
      state.cart = action.payload;
    },

    toggleOrder(state, action) {
      state.order = action.payload;
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

    toggleSuccess(state, action) {
      state.success = action.payload;
    },
  },
});

export default modalSlice.reducer;
export const {
  toggleCart,
  toggleOrder,
  toggleProducts,
  toggleAccount,
  toggleMobile,
  toggleSuccess,
} = modalSlice.actions;
