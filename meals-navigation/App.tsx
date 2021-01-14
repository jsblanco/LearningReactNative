import React, {useState} from 'react';
import {StyleSheet, Platform} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font'
import {StackParamList} from "./navigation/types";
import {enableScreens} from "react-native-screens"

import CategoriesScreen from "./screens/Categories/Categories";
import CategoryMeals from "./screens/CategoryMeals/CategoryMeals";
import MealDetailsScreen from "./screens/MealDetails/MealDetails";
import colours from "./constants/colours";

enableScreens();
const Stack = createStackNavigator<StackParamList>();
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
            <Stack.Navigator
                initialRouteName="Categories"
                screenOptions={{
                    headerTitle: 'React Native Meals',
                    headerTintColor: 'white',
                    ...headerStyles,
                }}
            >
                <Stack.Screen
                    name="Categories"
                    component={CategoriesScreen}
                    options={{
                        headerTitle: 'Meal categories'
                    }}
                />
                <Stack.Screen
                    name="Meals"
                    component={CategoryMeals}
                    options={{
                        title: 'Category meals',
                    }}
                    // initialParams={{}}
                    // options={({route}) => ({
                    //     title: route.params.categoryId,
                    //     ...headerStyles})}
                />
                <Stack.Screen
                    name="MealDetails"
                    component={MealDetailsScreen}
                    options={{
                        headerTitle: 'Meal details',
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
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

const headerStyles = StyleSheet.create({
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? colours.primary : colours.background,
    },
    headerTitleStyle: {
        color: Platform.OS !== 'android' ? colours.primary : colours.background,
        fontWeight: '900',
        fontFamily: 'openSansBold',
        // textTransform: 'uppercase'
        // textAlign: 'center',
    }
})

