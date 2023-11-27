import { createSlice } from '@reduxjs/toolkit';
import {Const} from './../utils/const';

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

            if(findItem.count < 0) findItem.count = 0;
            
        }, addCartItem(state, action){
            const item = action.payload;
            const findIdx = state.findIndex(data=>data.id === item.id);
            if(findIdx > -1){
                // 이미 존재
                state[findIdx].count += 1;
            }else{
                state.push(item);
            }
        }, delCartItem(state, action){
            const findIdx = state.findIndex(data=>data.id === action.payload);
            state.splice(findIdx, 1);
        }, sortCartItem(state, action){
            const sortType = action.payload;

            if(sortType === Const.emSortType.Name){
                state = state.sort((a,b)=>{
                    if(a.name > b.name) return 1;
                    if(a.name < b.name) return -1;
                    return 0;
                });
            }

        }
    }
});

export default cartData;
export let { addCartItem,addCartCount,delCartItem,sortCartItem } = cartData.actions;