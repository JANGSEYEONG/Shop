import { createSlice } from '@reduxjs/toolkit';
import {Const} from './../utils/const';

let msgState = createSlice({
    name: 'MsgState',
    initialState : { 
        isShow : false,
        isDanger : false,
        type : Const.emMessageType.Ok,

        title : '알림',
        content: '',
        
        confirmCallback : null,
        cancleCallback : null,
        param : {}
    },

    reducers : {
        initMsgState(state, action){
            return {
                isShow : false,
                isDanger : false,
                type : Const.emMessageType.Ok,

                title : '알림',
                content: '',
                
                confirmCallback : null,
                cancleCallback : null,
                param : {}
            }
        },
        chgMsgState(state, action){
            return {
                isShow : action.payload.isShow || false,
                isDanger : action.payload.isDanger || false,
                type : action.payload.type || Const.emMessageType.Ok,

                title : action.payload.title || '알림',
                content: action.payload.content || '',
                
                confirmCallback : action.payload.confirmCallback || null,
                cancleCallback : action.payload.cancleCallback || null,
                param : action.payload.param || {}
            }
        }
    }
});

export default msgState;
export let { initMsgState, chgMsgState } = msgState.actions;
