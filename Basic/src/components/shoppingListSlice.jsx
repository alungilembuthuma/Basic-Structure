// shoppingListSlice.js
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
  items: [], // Initial state with an empty array for items
};

const shoppingListSlice = createSlice({
  name: 'shoppingList', // Name of the slice
  initialState, // Initial state
  reducers: {
    addItem(state, action) {
      axios.post('/items', action.payload)
        .then(response => {
          state.items = [...state.items, response.data];
        })
        .catch(error => {
          console.error(error);
        });
    },
    
    deleteItem(state, action) {
      axios.delete(`/items/${action.payload.id}`)
        .then(response => {
          state.items = state.items.filter((item) => item.id !== action.payload.id);
        })
        .catch(error => {
          console.error(error);
        });
    },
    updateItem(state, action) {
      axios.put(`/items/${action.payload.id}`, action.payload)
        .then(response => {
          const index = state.items.findIndex((item) => item.id === action.payload.id);
          if (index !== -1) {
            state.items[index] = action.payload; // Updates the item if found
          }
        })
        .catch(error => {
          console.error(error);
        });
    },
    displayItems(state) {
      console.log(state.items); // Displays all items in the console
    },
  },
});

// Exporting actions for use in components
export const { addItem, deleteItem, updateItem, displayItems } = shoppingListSlice.actions;

// Exporting the reducer to be used in the store
export default shoppingListSlice.reducer;