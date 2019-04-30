import { combineReducers } from 'redux';
import toolboxReducer from './toolboxReducer';

export default combineReducers({
    machineSelected: toolboxReducer
})