import * as constants from '../constants/places.constants'

type StateType = {
    places: [],
}

const initialState: StateType = {
    places: []
}

const placesReducer = (state: StateType = initialState, {type, payload}: { type: string, payload: any }) => {
    console.log(payload)
    switch (type) {
        case constants.ADD_PLACE_SUCCESS:
            return {...state, places: [payload, ...state.places]}
        default:
            return {...state};
    }
}

export default placesReducer;
