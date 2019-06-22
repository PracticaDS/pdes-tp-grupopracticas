import { EDIT_MACHINE, SELECT_CELDA, UNSELECT_CELL } from '../actions/types';

const initialState = {  }

export default function(state = initialState, action) {
    switch(action.type) {
        case SELECT_CELDA:
            return {
                ...state,
                celda: action.payload
            }
            case UNSELECT_CELL:
            return {
                ...state,
                celda: null
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