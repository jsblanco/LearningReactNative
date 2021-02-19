import * as constants from "../constants/places.constants";
import * as placesActions from "../actions/places.actions";
import {takeLatest, put, call} from "redux-saga/effects";
import {Place} from "../../models/Places/Place";
import * as FileSystem from "expo-file-system";
import * as db from "../db/places.db";
import {PlaceAdapter} from "../../models/Places/Place.adapter";
import {LocationType} from "../../components/LocationPicker/LocationPicker";
import {fetchAddress} from "../queries/places.queries";

const placeAdapter = new PlaceAdapter()

function* addPlaceEffect({payload: {title, imageUri, location}}: { type: string, payload: { title: string, imageUri: string, location: LocationType } }) {
    try {
        const fileName = imageUri.split('/').pop();
        if (!fileName) throw new Error('No image')
        const newPath = FileSystem.documentDirectory + fileName;
        yield call(FileSystem.moveAsync, {from: imageUri, to: newPath})
        const address = yield call(fetchAddress, location)
        const placeInDb = yield call(db.insertPlace, {
            title, address: address,
            imageUri: newPath,
            lat: location.lat, lng: location.lng
        })
        const place = placeAdapter.adapt({
            id: placeInDb.insertId,
            title,
            imageUri: newPath,
            address: address,
            lat: location.lat,
            lng: location.lng
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

