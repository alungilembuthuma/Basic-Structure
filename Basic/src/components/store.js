import { configureStore } from '@reduxjs/toolkit';
import { createStore } from 'redux';

// Create a reducer function
const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_STATE':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

// Create a store
const store = configureStore({
  reducer,
});

// Export the store
export default store;