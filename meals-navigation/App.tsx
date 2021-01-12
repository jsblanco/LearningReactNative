import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font'

import CategoriesScreen from "./screens/Categories/Categories";
import CategoryMeals from "./screens/CategoryMeals/CategoryMeals";
import MealDetailsScreen from "./screens/MealDetails/MealDetails";

const Stack = createStackNavigator();
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
                initialRouteName="home"
                screenOptions={{gestureEnabled: false}}
            >
                <Stack.Screen
                    name="home"
                    component={CategoriesScreen}
                    options={{title: 'My app'}}
                />
                <Stack.Screen
                    name="meals"
                    component={CategoryMeals}
                    initialParams={{user: 'me'}}
                />
                <Stack.Screen
                    name="meal-details"
                    component={MealDetailsScreen}
                    initialParams={{user: 'me'}}
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
