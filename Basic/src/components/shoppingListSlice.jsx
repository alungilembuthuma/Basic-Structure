// features/shoppingListSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const shoppingListSlice = createSlice({
  name: 'shoppingList',
  initialState,
  reducers: { 
    addItem(state, action) {
    state.items.push(action.payload);
  },
  removeItem(state, action) {
    state.items = state.items.filter((item) => item.id !== action.payload);
  },
  updateItem(state, action) {
    const index = state.items.findIndex((item) => item.id === action.payload.id);
    if (index !== -1) {
      state.items[index] = action.payload;
    }
  }
  },
});

export const { addItem, removeItem, updateItem } = shoppingListSlice.actions;
export default shoppingListSlice.reducer;