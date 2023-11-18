import { createSlice } from '@reduxjs/toolkit';

let cartData = createSlice({
    name: 'cartData',
    initialState : [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
    ],
    
    reducers : {     
        addCartCount(state, action){
            const info = action.payload; // id, count
            const findItem = state.find(item=>item.id === info.id);

            findItem.count += info.count;
            
        }, addCartItem(state, action){
            const item = action.payload;
            const findIdx = state.findIndex(data=>data.id === item.id);
            if(findIdx > -1){
                // 이미 존재
                state[findIdx].count += 1;
            }else{
                state.push(item);
            }
        }
    }
});

export default cartData;
export let { addCartItem,addCartCount } = cartData.actions;