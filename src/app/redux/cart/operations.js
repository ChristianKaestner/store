import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { SERVER_URL } from '@/app/lib/constants';

axios.defaults.baseURL = SERVER_URL;

const createAsyncOperation = (method, endpoint) =>
  createAsyncThunk(`cart/${method}`, async (payload, thunkAPI) => {
    try {
      let response;
      switch (method) {
        case 'post':
          response = await axios.post(endpoint, payload);
          break;
        case 'patch':
          response = await axios.patch(endpoint, payload);
          break;
        case 'get':
          response = await axios.get(endpoint);
          break;
        case 'delete':
          await axios.delete(`${endpoint}/${payload}`);
          return payload;
        case 'deleteAll':
          response = await axios.delete(endpoint);
        default:
          break;
      }
      return response ? response.data : null;
    } catch (e) {
      return thunkAPI.rejectWithValue({
        message: e.response.data.message,
        status: e.response.status,
      });
    }
  });

export const addCart = createAsyncOperation('post', 'cart');
export const editCart = createAsyncOperation('patch', 'cart');
export const getCart = createAsyncOperation('get', 'cart');
export const deleteCart = createAsyncOperation('delete', 'cart');
export const deleteAllCart = createAsyncOperation('deleteAll', 'cart');
export const getCartProducts = createAsyncThunk(
  'getCartProducts',
  async (payload, thunkAPI) => {
    try {
      if (payload.length) {
        const response = await axios.post('/products/cart', {
          items: payload,
        });
        return response.data;
      } else {
        return [];
      }
    } catch (e) {
      return thunkAPI.rejectWithValue({
        message: e.response.data.message,
        status: e.response.status,
      });
    }
  }
);
