import * as actionTypes from './actionTypes'

import firebase from '../../firebase/firebase'

const db = firebase.firestore()

// Fetching address
export const getAddressInit = () => {
    return {
        type: actionTypes.GET_ADDRESS
    }
}

export const getAddressSuccess = (address) => {
    return {
        type: actionTypes.GET_ADDRESS_SUCCESS,
        payload: {
            address: address
        }
    }
}

export const getAddressFail = (error) => {
    return {
        type: actionTypes.GET_ADDRESS_FAIL,
        payload: {
            error: error
        }
    }
}



// Adding address
export const addAddressInit = () => {
    return {
        type: actionTypes.ADD_ADDRESS
    }
}

export const addAddressSuccess = (address) => {
    return {
        type: actionTypes.ADD_ADDRESS_SUCCESS,
        payload: {
            address: address
        }
    }
}

export const addAddressFail = (error) => {
    return {
        type: actionTypes.ADD_ADDRESS_FAIL,
        payload: {
            error: error
        }
    }
}



// Clearing address
export const clearAddress = () => {
    return {
        type: actionTypes.CLEAR_ADDRESS
    }
}