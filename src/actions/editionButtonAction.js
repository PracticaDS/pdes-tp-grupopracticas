import { EDIT_MACHINE, SELECT_CELDA, UNSELECT_CELL } from './types';


export const selectCelda = (celda) => dispatch => {
    dispatch({
        type: SELECT_CELDA,
        payload: celda
    })
}

export const unselectCelda = () => dispatch => {
    dispatch({
        type: UNSELECT_CELL,
        payload: null
    })
}

export const editMachine = (editionAction) => dispatch => {
    dispatch({
        type: EDIT_MACHINE,
        payload: editionAction
    })
}

