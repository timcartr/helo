import { Object } from "core-js";

// Constants
const initialState = {
    username: '',
    id:'',
    profile_pic:''
}
const UPDATE_USER_DATA = 'UPDATE_USER-DATA'

// Action Builders
export function updateUserData(user){
    return {
        type:UPDATE_USER_DATA,
        payload: user
    }
}

// Reducer
export default function reducer(state = initialState, action) {
    switch(action.type){

        case UPDATE_USER_DATA:
        return Object.assign( {}, state, {
            username: action.payload.username,
            id: action.payload.id,
            profile_pic: action.payload.profile_pic})

        default: return state
    }
}
