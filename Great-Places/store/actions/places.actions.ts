import * as constants from '../constants/places.constants';

export const action = {
    request: (payload: any) => {
        return {
            type: constants.CONSTANT_NAME_REQUEST,
            payload: payload
        }
    },
    success: (payload: any) => {
        return {
            type: constants.CONSTANT_NAME_SUCCESS,
            payload: payload
        }
    },
    failure: (e: any) => {
        return {
            type: constants.CONSTANT_NAME_FAILURE,
            payload: e
        }
    }
}
