import { CLIENTS_FETCH_SUCCESS, ROOMS_FETCH_SUCCESS, ROOMUSAGES_FETCH_SUCCESS, USERS_FETCH_SUCCESS, SET_ERROR, SET_LOADING } from '../actionTypes'


export const setClients = () => {
    return (dispatch,getState) => {
        dispatch({type:SET_LOADING,payload:true })
        dispatch({type:SET_ERROR,payload:null })
        fetch('http://localhost:10000/clients')
        .then(response => response.json())
        .then(result => 
            dispatch ({
                type:CLIENTS_FETCH_SUCCESS,
                payload: result
            }))
        .catch((err) =>{
            dispatch ({
                type:SET_ERROR,
                payload: err
            })
        })
        .finally(() =>{
            dispatch ({
                type:SET_LOADING,
                payload: false
            })
        })
        
    }
}

export const setRooms = () => {
    return (dispatch,getState) => {
        dispatch({type:SET_LOADING,payload:true })
        dispatch({type:SET_ERROR,payload:null })
        fetch('http://localhost:10000/rooms')
        .then(response => response.json())
        .then(result => 
            dispatch ({
                type:ROOMS_FETCH_SUCCESS,
                payload: result
            }))
        .catch((err) =>{
            dispatch ({
                type:SET_ERROR,
                payload: err
            })
        })
        .finally(() =>{
            dispatch ({
                type:SET_LOADING,
                payload: false
            })
        })
        
    }
}

export const setRoomUsage = () => {
    return (dispatch,getState) => {
        dispatch({type:SET_LOADING,payload:true })
        dispatch({type:SET_ERROR,payload:null })
        fetch('http://localhost:10000/roomUsage')
        .then(response => response.json())
        .then(result => 
            dispatch ({
                type:ROOMUSAGES_FETCH_SUCCESS,
                payload: result
            }))
        .catch((err) =>{
            dispatch ({
                type:SET_ERROR,
                payload: err
            })
        })
        .finally(() =>{
            dispatch ({
                type:SET_LOADING,
                payload: false
            })
        })
        
    }
}

export const setUsers = () => {
    return (dispatch,getState) => {
        dispatch({type:SET_LOADING,payload:true })
        dispatch({type:SET_ERROR,payload:null })
        fetch('http://localhost:10000/users')
        .then(response => response.json())
        .then(result => 
            dispatch ({
                type:USERS_FETCH_SUCCESS,
                payload: result
            }))
        .catch((err) =>{
            dispatch ({
                type:SET_ERROR,
                payload: err
            })
        })
        .finally(() =>{
            dispatch ({
                type:SET_LOADING,
                payload: false
            })
        })
        
    }
}
