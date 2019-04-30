import { SELECT_MACHINE, UNSELECT_MACHINE } from './types';


export const selectMachine = (machine) => dispatch => {
    dispatch({
        type: SELECT_MACHINE,
        payload: machine
    })
}

export const unselectMachine = () => dispatch => {
    dispatch({
        type: UNSELECT_MACHINE,
        payload: null
    })
}