import { createSlice } from '@reduxjs/toolkit';
import { fetchPromotedGoods, fetchGoods } from './operations';

const initialState = {
  items: [],
  promoted: [],
  cart: [],
  favorite: [],
  isError: false,
  isLoading: false,
};

export const goodsSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {
    cartAdd(state, action) {
      const { id } = action.payload;
      if (state.cart.find(item => item.id === id)) return;
      const item = { ...action.payload, quantity: 1 };
      state.cart.push(item);
    },

    cartRemove(state, action) {
      const id = Number(action.payload);
      const updatedCart = state.cart.filter(item => item.id !== id);
      state.cart = updatedCart;
    },

    cartIncreaseQuantity(state, action) {
      const id = action.payload;
      const updatedCart = state.cart.map(item => {
        if (item.id === id) {
          return item.quantity >= item.available
            ? { ...item, quantity: item.available }
            : { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      state.cart = updatedCart;
    },

    cartReduceQuantity(state, action) {
      const id = action.payload;
      const updatedCart = state.cart.map(item => {
        if (item.id === id) {
          return item.quantity === 1
            ? { ...item, quantity: 1 }
            : { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
      state.cart = updatedCart;
    },

    cartSetQuantity(state, action) {
      const { id, num } = action.payload;
      if (!num || num < 1) return;
      const updatedCart = state.cart.map(item => {
        if (item.id === id) {
          return num > item.available
            ? { ...item, quantity: item.available }
            : { ...item, quantity: num };
        } else {
          return item;
        }
      });
      state.cart = updatedCart;
    },
    favoriteAdd(state, action) {
      const id = action.payload;
      if (state.favorite.find(item => item.id === id)) return;
      state.favorite.push(id);
    },
    favoriteRemove(state, action) {
      const id = action.payload;
      const updatedFavorite = state.favorite.filter(item => item !== id);
      state.cart = updatedFavorite;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPromotedGoods.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchPromotedGoods.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.promoted = action.payload;
      })
      .addCase(fetchPromotedGoods.rejected, state => {
        state.isError = true;
        state.isLoading = false;
      })
      .addCase(fetchGoods.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchGoods.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchGoods.rejected, state => {
        state.isError = true;
        state.isLoading = false;
      });
  },
});

export default goodsSlice.reducer;
export const {
  cartAdd,
  cartRemove,
  cartIncreaseQuantity,
  cartReduceQuantity,
  cartSetQuantity,
  favoriteAdd,
  favoriteRemove,
} = goodsSlice.actions;
