import { UPDATE_CELLS, CLEAR_CELL, ADD_MACHINE_TO_CELL } from './types';


export const updateCell = (cells) => dispatch => {
    dispatch({
        type: UPDATE_CELLS,
        payload: cells
    })
}

export const clearCell = (cellId) => dispatch => {
    dispatch({
        type: CLEAR_CELL,
        payload: cellId
    })
}

export const addMachineToCell = (machine, cellId) => dispatch => {
    dispatch({
        type: ADD_MACHINE_TO_CELL,
        payload: {
            machine: machine,
            cellId
        }
    })
}