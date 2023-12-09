import { createSlice } from '@reduxjs/toolkit';
import { logIn, register, resendCode } from './operations';
import { verifyCode, logOut, updateUser } from './operations';
import { updateAddress, refreshUser, deleteUser } from './operations';

const initialState = {
  user: {
    firstName: null,
    lastName: null,
    phone: null,
    email: null,
    address: { city: null, street: null, house: null, apartment: null },
  },
  token: null,
  isVCodeSent: false,
  isLogin: false,
  error: null,
  isLoading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(register.pending, state => {
        state.isLoading = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = { ...state.user, ...action.payload.user };
        state.isVCodeSent = true;
        state.isLogin = false;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(resendCode.pending, state => {
        state.isLoading = true;
      })
      .addCase(resendCode.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(resendCode.fulfilled, (state, action) => {
        state.user = { ...state.user, ...action.payload.user };
        state.isVCodeSent = true;
        state.isLogin = false;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(verifyCode.pending, state => {
        state.isLoading = true;
      })
      .addCase(verifyCode.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(verifyCode.fulfilled, (state, action) => {
        state.user = { ...state.user, ...action.payload.user };
        state.token = action.payload.token;
        state.isVCodeSent = false;
        state.isLogin = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(logIn.pending, state => {
        state.isLoading = true;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = { ...state.user, ...action.payload.user };
        state.token = action.payload.token;
        state.isLogin = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(logOut.pending, state => {
        state.isLoading = true;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = initialState.user;
        state.token = null;
        state.isLogin = false;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(updateUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user = { ...state.user, ...action.payload.user };
        state.isLogin = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(updateAddress.pending, state => {
        state.isLoading = true;
      })
      .addCase(updateAddress.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(updateAddress.fulfilled, (state, action) => {
        state.user = { ...state.user, ...action.payload.user };
        state.isLogin = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(refreshUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = { ...state.user, ...action.payload.user };
        state.isLogin = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(deleteUser.fulfilled, state => {
        state.user = initialState.user;
        state.token = null;
        state.isLogin = false;
        state.isLoading = false;
        state.error = null;
      });
  },
});

export default authSlice.reducer;
export const { setToken } = authSlice.actions;
