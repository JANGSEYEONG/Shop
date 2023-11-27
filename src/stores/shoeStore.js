import { createSlice } from '@reduxjs/toolkit';
import {Const} from './../utils/const';

import data from './../data';

let shoesData = createSlice({
    name: 'shoesData',
    initialState : data,

    reducers : {
        addItem(state, action){
            state.push(action.payload);
        },
        sortItem(state, action){
            const sortType = action.payload;

            if(sortType === Const.emSortType.Name){ // 가나다 정렬
                state = state.sort((a,b)=>{
                    if(a.title > b.title) return 1;
                    if(a.title < b.title) return -1;
                    return 0;
                });

            }else if(sortType === Const.emSortType.Price){ // 가격높은순 정렬
                state = state.sort((a,b)=>{
                    if(a.price < b.price) return 1;
                    if(a.price > b.price) return -1;
                    return 0;
                });
        }
            
        }
    }
});

export default shoesData;
export let { addItem,sortItem } = shoesData.actions;
