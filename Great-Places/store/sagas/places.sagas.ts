import * as constants from "../constants/places.constants";
import {addNewPlace} from "../actions/places.actions";
import {takeLatest, put} from "redux-saga/effects";
import {Place} from "../../models/Places/Place";
import * as FileSystem from "expo-file-system";

function* placesEffect({payload: {title, imageUri}}: { type: string, payload: { title: string, imageUri: string } }) {
    try {
        const fileName = imageUri.split('/').pop();
        if (!fileName) throw new Error('No image')
        const newPath = FileSystem.documentDirectory + fileName;
        try {
            FileSystem.moveAsync({from: imageUri, to: newPath})
        } catch (e) {
            console.error(e);
            throw e;
        }
        const place = new Place(new Date().getTime().toString(), title, newPath)
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

