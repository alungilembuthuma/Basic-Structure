
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Initial state with an empty array for items
};

const shoppingListSlice = createSlice({
  name: 'shoppingList', // Name of the slice
  initialState, // Initial state
  reducers: { 
    addItem(state, action) {
      state.items.push(action.payload); // Adds an item to the items array
    },
    removeItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload); // Removes an item by id
    },
    updateItem(state, action) {
      const index = state.items.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload; // Updates the item if found
      }
    }
  },
});

// Exporting actions for use in components
export const { addItem, removeItem, updateItem } = shoppingListSlice.actions;

// Exporting the reducer to be used in the store
export default shoppingListSlice.reducer;
