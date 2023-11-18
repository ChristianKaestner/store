import { createSlice } from '@reduxjs/toolkit';
import { addCart, editCart, getCartProducts } from './operations';
import { deleteCart, getCart } from './operations';

const initialState = {
  items: [],
  products: [],
  error: null,
  isLoading: false,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    cartAdd(state, action) {
      const productId = action.payload;
      if (state.items.find(item => item.id === productId)) return;
      const item = { productId, quantity: 1 };
      state.items.push(item);
    },

    cartRemove(state, action) {
      const productId = Number(action.payload);
      const updatedCart = state.items.filter(
        item => item.productId !== productId
      );
      state.items = updatedCart;
    },

    cartIncreaseQuantity(state, action) {
      const { id, available } = action.payload;
      const updatedCart = state.items.map(item => {
        if (item.productId === id) {
          return item.quantity >= available
            ? { ...item, quantity: available }
            : { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      state.items = updatedCart;
    },

    cartReduceQuantity(state, action) {
      const productId = action.payload;
      const updatedCart = state.items.map(item => {
        if (item.productId === productId) {
          return item.quantity === 1
            ? { ...item, quantity: 1 }
            : { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
      state.items = updatedCart;
    },

    cartSetQuantity(state, action) {
      const { id, value } = action.payload;

      const updatedCart = state.items.map(item => {
        if (item.productId === id) return { ...item, quantity: +value };
        return item;
      });

      state.items = updatedCart;
    },
  },
  extraReducers(builder) {
    const asyncActions = [
      addCart,
      editCart,
      deleteCart,
      getCart,
      getCartProducts,
    ];
    asyncActions.forEach(asyncAction => {
      builder.addCase(asyncAction.pending, state => {
        state.isLoading = true;
      });

      builder.addCase(asyncAction.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });

      builder.addCase(asyncAction.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoading = false;
        state.error = null;
      });
    });
  },
});

export default cartSlice.reducer;
export const {
  cartAdd,
  cartRemove,
  cartIncreaseQuantity,
  cartReduceQuantity,
  cartSetQuantity,
} = cartSlice.actions;
