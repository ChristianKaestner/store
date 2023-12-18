import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { SERVER_URL } from '@/app/lib/constants';

axios.defaults.baseURL = SERVER_URL;

export const getuserReviews = createAsyncThunk(
  'getUser/reviews',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`products/reviews`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue({
        message: e.response.data.message,
        status: e.response.status,
      });
    }
  }
);

export const getProductReviews = createAsyncThunk(
  'get/reviews',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`products/reviews/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue({
        message: e.response.data.message,
        status: e.response.status,
      });
    }
  }
);

export const addProductReview = createAsyncThunk(
  'add/reviews',
  async (formData, thunkAPI) => {
    try {
      const response = await axios.post(
        `products/reviews/${formData.get('id')}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue({
        message: e.response.data.message,
        status: e.response.status,
      });
    }
  }
);

export const deleteProductReview = createAsyncThunk(
  'delete/review',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`products/reviews/${id}`);
      return id;
    } catch (e) {
      return thunkAPI.rejectWithValue({
        message: e.response.data.message,
        status: e.response.status,
      });
    }
  }
);

export const editProductReview = createAsyncThunk(
  'edit/review',
  async (formData, thunkAPI) => {
    try {
      const response = await axios.patch(
        `products/reviews/${formData.get('id')}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue({
        message: e.response.data.message,
        status: e.response.status,
      });
    }
  }
);
