import React from 'react';
import {Platform} from "react-native";
import {CardStyleInterpolators, createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer, useNavigation} from "@react-navigation/native";
import styles from "./stack.styles";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../components/basicComponents/HeaderButton/HeaderButton";
import PlacesListScreen from "../screens/PlacesListScreen/PlacesListScreen";
import PlaceDetailsScreen from "../screens/PlaceDetailsScreen/PlaceDetailsScreen";
import AddNewPlaceScreen from "../screens/AddNewPlaceScreen/AddNewPlaceScreen";
import MapScreen from "../screens/MapScreen/MapScreen";

const Stack = createStackNavigator();

export function RootStackNavigation() {


    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="List"
                // @ts-ignore
                screenOptions={{
                    ...styles,
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                }}
            >
                <Stack.Screen
                    name="List"
                    component={PlacesListScreen}
                    options={{
                        headerTitle: "Jorge's Great Places!",
                    }}
                />
                <Stack.Screen
                    name="Details"
                    component={PlaceDetailsScreen}
                    options={{}}
                />
                <Stack.Screen
                    name="AddNew"
                    component={AddNewPlaceScreen}
                    options={{
                        headerTitle: "Add Great Place",
                    }}
                />
                <Stack.Screen
                    name="Map"
                    component={MapScreen}
                    options={{}}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}
