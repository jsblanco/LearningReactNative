import * as constants from '../constants/places.constants';
import {Place} from "../../models/Places/Place";

export const addNewPlace = {
    request: (payload: any) => {
        return {
            type: constants.ADD_PLACE_REQUEST,
            payload: payload
        }
    },
    success: (payload: Place) => {
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

export const fetchPlaces = {
    request: () => {
        return {
            type: constants.FETCH_PLACES_REQUEST,
        }
    },
    success: (payload: Place[]) => {
        return {
            type: constants.FETCH_PLACES_SUCCESS,
            payload: payload
        }
    },
    failure: (e: any) => {
        return {
            type: constants.FETCH_PLACES_FAILURE,
            payload: e
        }
    }
}
