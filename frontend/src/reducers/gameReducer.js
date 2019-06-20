import { LOGIN_USER, LOAD_FACTORIES } from '../actions/types';

const initialState = {  }

export default function(state = initialState, action) {
    switch(action.type) {
        case LOGIN_USER:
            return {
                ...state,
                user: action.payload
            }
        case LOAD_FACTORIES:
            return {
                ...state,
                factories: action.payload
            }
        default:
            return state        
    }
}