import * as constants from '../constants/places.constants';

export const addNewPlace = {
    request: (payload: any) => {
        console.log('request')
        return {
            type: constants.ADD_PLACE_REQUEST,
            payload: payload
        }
    },
    success: (payload: any) => {
        console.log('success')
        return {
            type: constants.ADD_PLACE_SUCCESS,
            payload: payload
        }
    },
    failure: (e: any) => {
        return {
            type: constants.ADD_PLACE_FAILURE,
            payload: e
        }
    }
}
