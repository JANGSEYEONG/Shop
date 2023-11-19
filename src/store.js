import { configureStore } from '@reduxjs/toolkit';

// Slices
import shoesData from './stores/shoeStore';
import cartData from './stores/cartStore';
import msgState from './stores/msgStore';

export default configureStore({
  reducer: {
    shoesData : shoesData.reducer,
    cartData : cartData.reducer,
    msgState : msgState.reducer
  }
})

