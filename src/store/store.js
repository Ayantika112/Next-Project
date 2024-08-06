import { configureStore } from '@reduxjs/toolkit';
import addToCartSlice from '../slice/addToCartSlice';

export const store = configureStore({
  reducer: {
    cart: addToCartSlice
  },
});
