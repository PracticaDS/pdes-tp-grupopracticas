import { CLEAR_CELL, ADD_MACHINE_TO_CELL } from '../actions/types';


const createEmptyCells = () => {
    let cells = []
    for (let i = 1; i <= 100; i++) {
        cells.push({id: i, machine: undefined})
    }
    return cells;
}

const initialState = createEmptyCells()

export default function(state = initialState, action) {
    switch(action.type) {
        case ADD_MACHINE_TO_CELL:
            return addMachine(state, action.payload)
        case CLEAR_CELL:
            return clearCell(state, action.payload)
        default:
            return state    
    }
}

const clearCell = (cells, cellId) => {
    console.log(cells, cellId)
    return cells
}

const addMachine = (cells, payload) => {
    console.log(cells, payload)
    return cells.map(c => c.id === payload.cellId ? {id:c.id, machine: payload.machine} : c)
}