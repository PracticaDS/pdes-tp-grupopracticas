import { EDIT_MACHINE, SELECT_CELDA } from './types';


export const selectCelda = (celda) => dispatch => {
    dispatch({
        type: SELECT_CELDA,
        payload: celda
    })
}

export const editMachine = (editionAction) => dispatch => {
    dispatch({
        type: EDIT_MACHINE,
        payload: editionAction
    })
}

