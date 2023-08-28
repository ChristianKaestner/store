// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
// import { items } from '@/app/utils/tmpData';

// axios.defaults.baseURL = '';

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unSet() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

// export const fetchPromotedGoods = createAsyncThunk(
//   'promoted/goods',
//   async (_, thunkAPI) => {
//     try {
//       // const response = await axios.get('/api/goods');
//       // return response.data;
//       return items.filter(item => item.isPromoted);
//     } catch (e) {
//       console.log(e);
//       // return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// export const fetchGoods = createAsyncThunk(
//   'goods',
//   async (_, thunkAPI) => {
//     try {
//       // const response = await axios.get('/api/goods');
//       // return response.data;
//       return items;
//     } catch (e) {
//       console.log(e);
//       // return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// export const fetchGoodsById = createAsyncThunk(
//   'goods/id',
//   async (id, thunkAPI) => {
//     try {
//       // const response = await axios.get(`/api/goods/${id}`);
//       // return response.data;
//       return items.find(item => item.id === id);
//     } catch (e) {
//       console.log(e);
//       // return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// export const addCartRegistered = createAsyncThunk(
//   'addCart',
//   async (id, thunkAPI) => {
//     try {
//       const response = await axios.post(`/api/cart/${id}`);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// export const addCartNotRegistered = id => {};

// export const goodsOperations = {
//   fetchPromotedGoods,
//   fetchGoods,
//   addCartRegistered,
// };
