import * as constants from "../constants/places.constants";
import * as placesActions from "../actions/places.actions";
import {takeLatest, put, call} from "redux-saga/effects";
import {Place} from "../../models/Places/Place";
import * as FileSystem from "expo-file-system";
import * as db from "../db/places.db";
import {PlaceAdapter} from "../../models/Places/Place.adapter";

const placeAdapter = new PlaceAdapter()

function* addPlaceEffect({payload: {title, imageUri}}: { type: string, payload: { title: string, imageUri: string } }) {
    try {
        const fileName = imageUri.split('/').pop();
        if (!fileName) throw new Error('No image')
        const newPath = FileSystem.documentDirectory + fileName;
        yield call(FileSystem.moveAsync, {from: imageUri, to: newPath})
        const placeInDb = yield call(db.insertPlace, {
            title, address: 'description',
            imageUri: newPath,
            lat: 11.23, lng: 12.3
        })
        const place = placeAdapter.adapt({
            id: placeInDb.insertId,
            title,
            imageUri: newPath,
            address: 'C/ Falsa 123',
            lat: 12.34,
            lng: 12.3
        })
        yield put(placesActions.addNewPlace.success(place));
    } catch (e) {
        console.error(e);
        yield put(placesActions.addNewPlace.failure(e));
    }
}

function* fetchPlacesEffect() {
    try {
        const placesArray: Place[] = []
        const placesInDb = yield call(db.fetchPlaces)
        placesInDb.rows._array.map((place: Place) => placesArray.unshift(placeAdapter.adapt(place)))
        yield put(placesActions.fetchPlaces.success(placesArray));
    } catch (e) {
        console.error(e);
        yield put(placesActions.fetchPlaces.failure(e));
    }
}


function* placesSagas() {
    yield takeLatest(constants.ADD_PLACE_REQUEST, addPlaceEffect);
    yield takeLatest(constants.FETCH_PLACES_REQUEST, fetchPlacesEffect);
}

export default placesSagas;

