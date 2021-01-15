import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font'
import {enableScreens} from "react-native-screens"
import {LogBox} from "react-native";
import TabsNavigation from "./navigation/TabsNavigation";
import DrawerNavigation from "./navigation/DrawerNavigation";


enableScreens();
const fetchFonts = () => Font.loadAsync({
    'openSans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'openSansBold': require('./assets/fonts/OpenSans-Bold.ttf')
})

LogBox.ignoreLogs([
    "Your project is accessing the following APIs from a deprecated global rather than a module import: Constants (expo- constants).\n \n The global \"__expo\" and \"Expo\" objects will be removed in SDK 41. Learn more about how to fix this warning: https://expo.fyi/deprecated-globals",
]);

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
        <NavigationContainer>
           <DrawerNavigation />
        </NavigationContainer>
    )
        ;
}

