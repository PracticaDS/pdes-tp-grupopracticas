import { LOGIN_USER, LOAD_FACTORIES } from './types';


export const loginUser = (user) => dispatch => {
    dispatch({
        type: LOGIN_USER,
        payload: user
    })
}

export const loadFactories = (factories) => dispatch => {
    dispatch({
        type: LOAD_FACTORIES,
        payload: factories
    })
}