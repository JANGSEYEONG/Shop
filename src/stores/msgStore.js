import { createSlice } from '@reduxjs/toolkit';

let msgState = createSlice({
    name: 'MsgState',
    initialState : false,

    reducers : {
        chgMsgState(state, action){
            return action.payload;
        }
    }
});

export default msgState;
export let { chgMsgState } = msgState.actions;
