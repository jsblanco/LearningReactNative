import {takeLatest, put} from "redux-saga/effects";
import * as constants from "../constants/places.constants";
import {addNewPlace} from "../actions/places.actions";

function* placesEffect({payload}: { type: string, payload: any }) {
    try {
        console.log('saga')
        // Adapt payload to a new Place()
        yield put(addNewPlace.success(payload));
    } catch (e) {
        console.error(e);
        yield put(addNewPlace.failure(e));
    }
}

function* placesSagas() {
    yield takeLatest(constants.ADD_PLACE_REQUEST, placesEffect);
}

export default placesSagas;

