import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { items } from '@/app/utils/tmpData';

axios.defaults.baseURL = '';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unSet() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const fetchProducts = createAsyncThunk(
  'products',
  async (_, thunkAPI) => {
    try {
      // const response = await axios.get('/api/products');
      // return response.data;
      return items;
    } catch (e) {
      console.log(e);
      // return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const productsOperations = {
  fetchProducts,
};
