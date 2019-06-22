import { SELECT_MACHINE, UNSELECT_MACHINE } from '../actions/types';

const initialState = {  }

export default function(state = initialState, action) {
    switch(action.type) {
        case SELECT_MACHINE:
            return {
                ...state,
                machine: action.payload,
                selected: true
            }
        case UNSELECT_MACHINE:
            return {
                ...state,
                machine: action.payload,
                selected: false
            }
        default:
            return state        
    }
}