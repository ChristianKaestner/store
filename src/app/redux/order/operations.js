import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { SERVER_URL } from '@/app/lib/constants';

axios.defaults.baseURL = SERVER_URL;

const createAsyncOperation = (method, endpoint) =>
  createAsyncThunk(`order/${method}`, async (payload, thunkAPI) => {
    try {
      let response;
      switch (method) {
        case 'post':
          response = await axios.post(endpoint, payload);
          break;
        case 'patch':
          response = await axios.patch(`${endpoint}/${payload}`);
          break;
        case 'get':
          response = await axios.get(endpoint);
          break;
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

export const addOrder = createAsyncOperation('post', 'orders');
export const editOrder = createAsyncOperation('patch', 'orders');
export const getOrders = createAsyncOperation('get', 'orders');
