import { createSlice } from '@reduxjs/toolkit';

let msgState = createSlice({
    name: 'MsgState',
    initialState : { isShow : false, callbackName: '', param : {}},

    reducers : {
        chgMsgState(state, action){
            state.isShow = action.payload.isShow;
            state.callbackName = action.payload.callbackName;
            state.param = action.payload.param;
        }
    }
});

export default msgState;
export let { chgMsgState } = msgState.actions;
