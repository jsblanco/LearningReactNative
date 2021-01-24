import React from 'react';
import {CardStyleInterpolators, createStackNavigator} from "@react-navigation/stack";
import styles from "./stack.styles";
import PlacesListScreen from "../screens/PlacesListScreen/PlacesListScreen";
import PlaceDetailsScreen from "../screens/PlaceDetailsScreen/PlaceDetailsScreen";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../components/basicComponents/HeaderButton/HeaderButton";
import AddNewPlaceScreen from "../screens/AddNewPlaceScreen/AddNewPlaceScreen";
import MapScreen from "../screens/MapScreen/MapScreen";
import {NavigationContainer} from "@react-navigation/native";


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
                options={{headerTitle: "Welcome to Jorge's Shop App",}}
            />
            <Stack.Screen
                name="Details"
                component={PlaceDetailsScreen}
                options={{
                    // headerLeft: () => (
                    //     <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    //         <Item title={'Menu'} iconName={'ios-menu'}
                    //               onPress={() => {
                    //
                    //               }}/>
                    //     </HeaderButtons>
                    // )
                }}
            />
            <Stack.Screen
                name="AddNew"
                component={AddNewPlaceScreen}
                options={{}}
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
