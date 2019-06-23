import { UPDATE_CELLS, CLEAR_CELL, ADD_MACHINE_TO_CELL, SELECT_MACHINE_2, ROTATE_MACHINE, LOAD_FACTORY } from './types';


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

export const selectMachine = (cellId) => dispatch => {
    dispatch({
        type: SELECT_MACHINE_2,
        payload: cellId
    })
}

export const rotateMachine = (cellId) => dispatch => {
    dispatch({
        type: ROTATE_MACHINE,
        payload: cellId
    })
}

export const loadFactory = (factory) => dispatch => {
    dispatch({
        type: LOAD_FACTORY,
        payload: factory
    })
}
