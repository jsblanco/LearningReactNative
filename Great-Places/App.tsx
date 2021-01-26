import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RootStackNavigation} from "./navigation/RootStackNavigation";
import {enableScreens} from "react-native-screens"
import AppLoading from 'expo-app-loading';
import {Provider} from "react-redux";
import {store} from "./store/store";
import {dropPlacesDb, init} from './store/db/places.db'
import * as Font from "expo-font";

enableScreens();
// dropPlacesDb()
init()
    .catch((e) => {
        console.error('Database initialisation failed:')
        console.error(e)
    })

const fetchFonts = () => Font.loadAsync({
    'openSans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'openSansBold': require('./assets/fonts/OpenSans-Bold.ttf')
})


export default function App() {
    const [fontsLoaded, setFontsLoaded] = useState(false)
    if (!fontsLoaded) {
        return <AppLoading
            startAsync={fetchFonts}
            onFinish={() => setFontsLoaded(true)}
            onError={(e: object) => console.error(e)}
        />
    }

    return (
        <Provider store={store}>
            <RootStackNavigation/>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
