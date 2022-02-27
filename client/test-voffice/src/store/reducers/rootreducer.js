import { CLIENTS_FETCH_SUCCESS, ROOMS_FETCH_SUCCESS, ROOMUSAGES_FETCH_SUCCESS, USERS_FETCH_SUCCESS, SET_ERROR, SET_LOADING } from '../actionTypes'

const initialState = {
    clients: [],
    rooms: [],
    roomUsages: [],
    users: []
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case CLIENTS_FETCH_SUCCESS:
            return {
                ...state,
                clients: action.payload
            }
        case ROOMS_FETCH_SUCCESS:
            return {
                ...state,
                rooms: action.payload
            }
        case ROOMUSAGES_FETCH_SUCCESS:
            return {
                ...state,
                roomUsages: action.payload
            }
        case USERS_FETCH_SUCCESS:
            return {
                ...state,
                users: action.payload
            }
        case SET_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case SET_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}


export default rootReducer