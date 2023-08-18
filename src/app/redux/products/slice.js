import { createSlice } from '@reduxjs/toolkit';
import { fetchPromotedProducts } from './operations';

const initialState = {
  items: [],
  promoted: [],
  cart: [],
  favorite: [],
  isError: false,
  isLoading: false,
};

export const productsSlice = createSlice({
  name: 'products',
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
      .addCase(fetchPromotedProducts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchPromotedProducts.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.promoted = action.payload;
      })
      .addCase(fetchPromotedProducts.rejected, state => {
        state.isError = true;
        state.isLoading = false;
      });
  },
});

export default productsSlice.reducer;
export const {
  cartAdd,
  cartRemove,
  cartIncreaseQuantity,
  cartReduceQuantity,
  cartSetQuantity,
  favoriteAdd,
  favoriteRemove,
} = productsSlice.actions;
