import {takeLatest, put} from "redux-saga/effects";
import * as constants from "../constants/places.constants";
import {addNewPlace} from "../actions/places.actions";
import {Place} from "../../models/Places/Place";

function* placesEffect({payload}: { type: string, payload: any }) {
    try {
        const place = new Place(new Date().getTime().toString(), payload)
        yield put(addNewPlace.success(place));
    } catch (e) {
        console.error(e);
        yield put(addNewPlace.failure(e));
    }
}

function* placesSagas() {
    yield takeLatest(constants.ADD_PLACE_REQUEST, placesEffect);
}

export default placesSagas;

