// @ts-nocheck
import React from 'react';
import {Platform} from "react-native";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";

import {Ionicons} from "@expo/vector-icons";
import MealsNavigation from "./stack/MealsNavigation";
import FavouritesNavigation from "./stack/FavouritesNavigation";
import colours from "../constants/colours";

const Tab = Platform.OS === 'android' ? createMaterialBottomTabNavigator() : createBottomTabNavigator();
// const Tab = createBottomTabNavigator();
export default function TabsNavigation() {

    return (
        <Tab.Navigator
            tabBarOptions={{
                ...tabBarOptions,
            }}
            shifting={true}
        >
            <Tab.Screen
                name="Categories"
                component={MealsNavigation}
                options={{
                    tabBarLabel: "Meals",
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
                    tabBarLabel: "Favourites",
                    tabBarIcon: ({color}) => (
                        <Ionicons name="ios-star" color={color} size={16}/>
                    ),
                    tabBarColor: colours.brightAccent
                }}
            />
        </Tab.Navigator>
    )
}


const tabBarOptions = {
    activeTintColor: colours.brightAccent,
    // activeBackgroundColor: '#eee',
    style: {
        height: 75,
        paddingTop: 10
    },
    labelStyle: {
        fontFamily: 'openSansBold',
        fontSize: 14,
        paddingBottom: 10
    }
}


