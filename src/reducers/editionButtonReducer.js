import { EDIT_MACHINE, SELECT_CELDA } from '../actions/types';

const initialState = {  }

export default function(state = initialState, action) {
    switch(action.type) {
        case SELECT_CELDA:
            return {
                ...state,
                celda: action.payload
            }
        case EDIT_MACHINE:
            return {
                ...state,
                editionAction: action.payload
            }
        default:
            return state        
    }
}