import { ADD_MACHINE } from './types';

export const addMachine = (machine) => dispatch => {
    dispatch({
        type: ADD_MACHINE,
        payload: machine
    })
}