import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import placesReducer from "./reducers/places.reducer";
import createSagaMiddleware from "redux-saga";
import {all} from "redux-saga/effects";
import placesSagas from "./sagas/places.sagas";

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
    places: placesReducer,
})

export type RootState = ReturnType<typeof rootReducer>

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

function* rootSaga() {
    yield all([
        placesSagas(),
    ]);
}

sagaMiddleware.run(rootSaga);
