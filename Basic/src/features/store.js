// store.js
import { configureStore } from '@reduxjs/toolkit';
import shoppingListReducer from './features/shoppingListSlice';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'shoppingList',
    storage,
  };
  
  const persistedReducer = persistReducer(persistConfig, shoppingListReducer);
  

export default configureStore({
  reducer: {
    shoppingList: shoppingListReducer,  
  },
});

export const persistor = persistStore(store);