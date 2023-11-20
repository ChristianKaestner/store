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

    clearCart(state) {
      state.items = [];
    },
  },
  extraReducers(builder) {
    const asyncActions = [getCart, getCartProducts];
    builder
      .addCase(addCart.pending, state => {
        state.isLoading = true;
      })
      .addCase(addCart.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(addCart.fulfilled, (state, action) => {
        state.products = [...state.products, ...action.payload];
        state.isLoading = false;
        state.error = null;
      })
      .addCase(editCart.pending, state => {
        state.isLoading = true;
      })
      .addCase(editCart.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(editCart.fulfilled, (state, action) => {
        const updatedProduct = action.payload[0];
        const index = state.products.findIndex(
          product => product.id === updatedProduct.id
        );
        if (index !== -1) {
          state.products[index] = updatedProduct;
        }
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteCart.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteCart.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(deleteCart.fulfilled, (state, action) => {
        const productId = action.payload;
        state.products = state.products.filter(
          product => product.id !== productId
        );
        state.isLoading = false;
        state.error = null;
      });
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
  clearCart,
} = cartSlice.actions;
