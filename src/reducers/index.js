import { combineReducers } from 'redux';
import toolboxReducer from './toolboxReducer';
import editionButtonReducer from './editionButtonReducer';
import cellsReducer from './cellsReducer';

export default combineReducers({
    machineSelected: toolboxReducer,
    selectedCelda: editionButtonReducer,
    cells: cellsReducer
})