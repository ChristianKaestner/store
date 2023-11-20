import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';

const createAsyncOperation = (method, endpoint) =>
  createAsyncThunk(`favorite/${method}`, async (payload, thunkAPI) => {
    try {
      let response;
      switch (method) {
        case 'post':
          response = await axios.post(`${endpoint}/${payload}`);
          break;
        case 'get':
          response = await axios.get(endpoint);
          break;
        case 'delete':
          await axios.delete(`${endpoint}/${payload}`);
          return payload;
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

export const addFavorite = createAsyncOperation('post', '/api/favorites');
export const getFavorite = createAsyncOperation('get', '/api/favorites');
export const deleteFavorite = createAsyncOperation('delete', '/api/favorites');
