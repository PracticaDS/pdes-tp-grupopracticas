import { ADD_MACHINE } from '../actions/types';

const initialState = {
    item: { }
}

export default function(state = initialState, action) {
    switch(action.type) {
        case ADD_MACHINE:
            return {
                ...state,
                machine: action.payload
            }
        default:
            return state        
    }
}