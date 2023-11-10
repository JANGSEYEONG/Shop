import { configureStore, createSlice } from '@reduxjs/toolkit';
import data from './data';

let shoesData = createSlice({
    name: 'shoesData',
    initialState : data,

    reducers : {
        addItem(state, action){
            state.push(action.payload);
        }
    }
});


export default configureStore({
  reducer: {
    shoesData : shoesData.reducer
  }
})

export let { addItem } = shoesData.actions;