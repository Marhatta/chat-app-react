import {combineReducers} from 'redux';
import * as actionTypes from '../actions/types';

const INITIAL_USER_STATE = {
    currentUser:null,
    isLoading:true,
    userPosts:null
}

const user_reducer = (state = INITIAL_USER_STATE,action) => {
    switch(action.type){
        case actionTypes.SET_USER:
            return {
                ...state,
                currentUser:action.payload.currentUser,
                isLoading:false
            }
        case actionTypes.CLEAR_USER:
            return {
                ...state,
                isLoading:false
            }
        default:
            return state;
    }
}

const INITIAL_CHANNEL_STATE = {
    currentChannel:null,
    isPrivateChannel:false
}

const channel_reducer = (state = INITIAL_CHANNEL_STATE,action) => {
    switch(action.type){
        case actionTypes.SET_CURRENT_CHANNEL:
            return {
                ...state,
                currentChannel:action.payload.currentChannel
            }
        case actionTypes.SET_PRIVATE_CHANNEL:
            return {
                ...state,
                isPrivateChannel:action.payload.isPrivateChannel
            }
        case actionTypes.SET_USER_POSTS:
            return {
                ...state,
                userPosts:action.payload.userPosts
            }
        default:
            return state;
    }
}


const INITIAL_COLOR_STATE = {
    primaryColor:'#4c3c4c',
    secondaryColor:'#eee'
}

const colors_reducer = (state = INITIAL_COLOR_STATE,action) => {
    switch(action.type){
        case actionTypes.SET_COLORS:
            return {
                primaryColor:action.payload.primaryColor,
                secondaryColor:action.payload.secondaryColor
            }
        default:
            return state;
    }
} 

const rootReducer = combineReducers({
    user:user_reducer,
    channel:channel_reducer,
    colors:colors_reducer
});

export default rootReducer;
