import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {enableScreens} from "react-native-screens"
import AppLoading from 'expo-app-loading';
import {LogBox} from "react-native";
import * as Font from 'expo-font'

import {createStore, combineReducers} from "redux";
import {Provider} from 'react-redux';

import DrawerNavigation from "./navigation/DrawerNavigation";
import mealsReducer from "./store/reducers/mealsReducer";

enableScreens();

const rootReducer = combineReducers({
    meals: mealsReducer
})
export type RootState = ReturnType<typeof rootReducer>

const store = createStore(rootReducer);

const fetchFonts = () => Font.loadAsync({
    'openSans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'openSansBold': require('./assets/fonts/OpenSans-Bold.ttf')
})

LogBox.ignoreAllLogs(true);

export default function App() {
    const [fontsLoaded, setFontsLoaded] = useState(false)
    if (!fontsLoaded) {
        return <AppLoading
            startAsync={fetchFonts}
            onFinish={() => setFontsLoaded(true)}
            onError={(e: object) => console.log(e)}
        />
    }

    return (
        <Provider store={store}>
            <NavigationContainer>
                <DrawerNavigation/>
            </NavigationContainer>
        </Provider>
    )
}

