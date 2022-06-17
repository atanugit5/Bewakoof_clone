import * as types from "./actionTypes";

const initState={
    auth:false,
    token:""
}

export const authReducer=(state=initState,action)=>{
    switch(action.type){
        case types.SIGNIN_REQUEST:return{auth:false,token:""}
        case types.SIGNIN_SUCCESS:return{auth:true,token:action.payload}
        case types.SIGNIN_FAILURE:return{auth:false,token:""}
        default:return state;
    }   
}