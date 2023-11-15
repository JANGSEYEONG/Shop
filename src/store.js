import { configureStore, createSlice } from '@reduxjs/toolkit';
import data from './data';

let shoesData = createSlice({
    name: 'shoesData',
    initialState : data,

    reducers : {
        addItem(state, action){
            state.push(action.payload);
        },
        sortItem(state, action){
          const sortType = action.payload;
          //여기 고치기!
          if(sortType == 0){ // 가나다 정렬
            state = state.sort((a,b)=>{
              if(a.name > b.name) return 1;
              if(a.name < b.name) return -1;
              return 0;
            });
          }else if(sortType == 1){ // 가격높은순 정렬
            state = state.sort((a,b)=>{
              if(a.price < b.price) return 1;
              if(a.price > b.price) return -1;
              return 0;
            });
          }
            
        }
    }
});


export default configureStore({
  reducer: {
    shoesData : shoesData.reducer
  }
})

export let { addItem,sortItem } = shoesData.actions;