import * as constants from '../constants/places.constants'

type StateType = {
    key: any,
}

const initialState: StateType = {
    key: undefined
}

const placesReducer = (state: StateType = initialState, {type, payload}: { type: string, payload: any }) => {
    switch (type) {
        case constants.CONSTANT_NAME_SUCCESS:
            return {...state}
        default:
            return {...state};
    }
}

export default placesReducer;
