import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {FiltersStackParamList} from "../types";

import colours from "../../constants/colours";
import MealFiltersScreen from "../../screens/MealFilters/MealFilters";

const Stack = createStackNavigator<FiltersStackParamList>();

export default function FiltersNavigation() {
    return (
        <Stack.Navigator
            initialRouteName={'FiltersScreen'}
            screenOptions={{
                headerTintColor: Platform.OS === 'android' ? colours.background : colours.brightAccent, // 'white',
                ...headerStyles,
            }}
        >
            <Stack.Screen
                name={'FiltersScreen'}
                component={MealFiltersScreen}
                options={{
                    headerTitle: 'Meal Filters',
                }}
            />
        </Stack.Navigator>
    )
}

const headerStyles = StyleSheet.create({
    headerStyle: {
        backgroundColor: /* '#fff', //*/Platform.OS === 'android' ? colours.primary : colours.background,
        //shadowColor: "transparent",
        elevation: 10,
    },
    headerTitleStyle: {
        color: /*colours.primary, //*/ Platform.OS !== 'android' ? colours.primary : colours.background,
        fontWeight: '900',
        fontFamily: 'openSansBold',
        // textTransform: 'uppercase'
        textAlign: 'center',
    },
    headerBackTitleStyle: {
        fontFamily: 'openSans'
    }
})
