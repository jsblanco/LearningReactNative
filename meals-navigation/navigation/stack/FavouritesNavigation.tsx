import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {FavouritesStackParamList} from "../types";

import colours from "../../constants/colours";
import FavouritesScreen from "../../screens/Favourites/Favourites";
import MealDetailsScreen from "../../screens/MealDetails/MealDetails";

const Stack = createStackNavigator<FavouritesStackParamList>();

export default function FavouritesNavigation() {
    return (
        <Stack.Navigator
            initialRouteName={'FavouritesList'}
            screenOptions={{
                headerTintColor: Platform.OS === 'android' ? colours.background : colours.brightAccent, // 'white',
                ...headerStyles,
            }}>
            <Stack.Screen
                name={'FavouritesList'}
                component={FavouritesScreen}
                options={{
                    headerTitle: 'Favourite Meals',
                }}
            />
            <Stack.Screen
                name={'MealDetails'}
                component={MealDetailsScreen}
                options={{
                    headerTitle: 'Meal Details',
                }}
            />
        </Stack.Navigator>
    )
}


const headerStyles = StyleSheet.create({
    headerStyle: {
        backgroundColor: /* '#fff', //*/Platform.OS === 'android' ? colours.brightAccent : colours.background,
        //shadowColor: "transparent",
        elevation: 10,
    },
    headerTitleStyle: {
        color: /*colours.primary, //*/ Platform.OS !== 'android' ? colours.primary : colours.background,
        fontWeight: '900',
        fontFamily: 'openSansBold',
        // textTransform: 'uppercase'
        // textAlign: 'center',
    },
    headerBackTitleStyle: {
        fontFamily: 'openSans'
    }
})
