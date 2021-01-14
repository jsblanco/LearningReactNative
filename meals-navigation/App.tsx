import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font'
import {enableScreens} from "react-native-screens"
import {Ionicons} from "@expo/vector-icons";

import colours from "./constants/colours";
import HomeNavigation from "./navigation/homeNavigation";
import FavouritesScreen from "./screens/Favourites/Favourites";
import {Platform} from "react-native";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import {LogBox} from "react-native";
import FavouritesNavigation from "./navigation/favouritesNavigation";

LogBox.ignoreLogs([
    "Your project is accessing the following APIs from a deprecated global rather than a module import: Constants (expo- constants).",
]);

enableScreens();
const Tab = Platform.OS === 'android' ? createMaterialBottomTabNavigator() : createBottomTabNavigator();
// const Tab = createBottomTabNavigator();
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
            onError={(e: object) => console.log(e)}
        />
    }


    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    ...tabBarOptions,
                }}
                shifting={true}
            >
                <Tab.Screen
                    name="Categories"
                    component={HomeNavigation}
                    options={{
                        tabBarLabel: "All Meals",
                        tabBarIcon: ({color}) => (
                            <Ionicons name="ios-restaurant" color={color} size={16}/>
                        ),
                        tabBarColor: colours.primary
                    }}
                />
                <Tab.Screen
                    name="Favourites"
                    component={FavouritesNavigation}
                    options={{
                        tabBarLabel: "My Favourites",
                        tabBarIcon: ({color}) => (
                            <Ionicons name="ios-star" color={color} size={16}/>
                        ),
                        tabBarColor: colours.brightAccent
                    }}

                />
            </Tab.Navigator>
        </NavigationContainer>
    )
        ;
}


const tabBarOptions = {
    activeTintColor: colours.brightAccent,
    // activeBackgroundColor: '#eee',
    style: {
        height: 75,
        paddingTop: 10
    },
    labelStyle: {
        fontFamily: 'openSans',
        fontSize: 14,
        paddingBottom: 10
    }
}


