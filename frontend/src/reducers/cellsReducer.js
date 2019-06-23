import { CLEAR_CELL, ADD_MACHINE_TO_CELL, SELECT_MACHINE_2, ROTATE_MACHINE, LOAD_FACTORY } from '../actions/types';


export default function(state = initialState, action) {
    switch(action.type) {
        case ROTATE_MACHINE:
            return rotateMachine(state, action.payload)
        case SELECT_MACHINE_2:
            return selectMachine(state, action.payload)
        case ADD_MACHINE_TO_CELL:
            return addMachine(state, action.payload)
        case CLEAR_CELL:
            return clearCell(state, action.payload)
        case LOAD_FACTORY:
            return action.payload.cells
        default:
            return state    
    }
}

const createEmptyCells = () => {
    let cells = []
    for (let i = 1; i <= 100; i++) {
        cells.push({
            id: i, 
            machine: undefined
        })
    }
    return cells;
}

const initialState = createEmptyCells()

const clearCell = (cells, cellId) => {
    return cells.map(c => c.id === cellId ? {id:c.id} : c)
}

const selectMachine = (cells, cellId) => {
    return cells.map(c => c.id === cellId ? {...c, selected: true} : {...c, selected: false})
}

const addMachine = (cells, payload) => {
    return cells.map(c => c.id === payload.cellId ? 
        {
            id:c.id, 
            machine: {...payload.machine, direction: payload.machine.direction ? payload.machine.direction : 'SOUTH'}
        } : c
    )
}

const rotateMachine = (cells, cellId) => {
    return cells.map(c => c.id === cellId ? {id:c.id, machine: rotate(c.machine)} : c)
}

const rotate = (machine) => {
    switch(machine.direction) {
        case 'SOUTH':
            return {...machine, direction:'EAST'}
        case 'EAST':
            return {...machine, direction:'NORTH'}
        case 'NORTH':
            return {...machine, direction:'WEST'}
        case 'WEST':
            return {...machine, direction:'SOUTH'}
        default:
            return machine
    }
}