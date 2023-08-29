import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  isError: false,
  isLoading: false,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    cartAdd(state, action) {
      const id = action.payload;
      if (state.items.find(item => item.id === id)) return;
      const item = { id, quantity: 1 };
      state.items.push(item);
    },

    cartRemove(state, action) {
      const id = Number(action.payload);
      const updatedCart = state.items.filter(item => item.id !== id);
      state.items = updatedCart;
    },

    cartIncreaseQuantity(state, action) {
      const { id, available } = action.payload;
      const updatedCart = state.items.map(item => {
        if (item.id === id) {
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
      const id = action.payload;
      const updatedCart = state.items.map(item => {
        if (item.id === id) {
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

      const quantity = () => {
        const num = Number(value);
        const rounded = Math.round(num);
        return isNaN(rounded) ? value : rounded;
      };

      const updatedCart = state.items.map(item => {
        if (item.id === id) return { ...item, quantity: quantity() };
        return item;
      });
      
      state.items = updatedCart;
    },
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
