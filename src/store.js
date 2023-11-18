import { configureStore, createSlice } from '@reduxjs/toolkit';

// Slices
import shoesData from './stores/shoeStore';
import cartData from './stores/cartStore';


export default configureStore({
  reducer: {
    shoesData : shoesData.reducer,
    cartData : cartData.reducer
  }
})

