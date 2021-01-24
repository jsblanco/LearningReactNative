import {takeLatest, put} from "redux-saga/effects";
import * as constants from "../constants/places.constants";
import {action} from "../actions/places.actions";

function* placesEffect(payload: any) {
    try {
        yield put(action.success(payload));
    } catch (e) {
        console.error(e);
        yield put(action.failure(e));
    }
}

function* placesSagas() {
    yield takeLatest(constants.CONSTANT_NAME_REQUEST, placesEffect);
}

export default placesSagas;

