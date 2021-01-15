import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {MealsStackParamList} from "../types";

import CategoriesScreen from "../../screens/Categories/Categories";
import CategoryMealsScreen from "../../screens/CategoryMeals/CategoryMeals";
import MealDetailsScreen from "../../screens/MealDetails/MealDetails";
import Text from "../../components/basicComponents/Text/Text";
import colours from "../../constants/colours";

const Stack = createStackNavigator<MealsStackParamList>();

export default function MealsNavigation() {

    return (
        <Stack.Navigator
            initialRouteName="Categories"
            screenOptions={{
                headerTintColor: Platform.OS === 'android' ? colours.background : colours.brightAccent, // 'white',
                ...headerStyles,
            }}
        >
            <Stack.Screen
                name="Categories"
                component={CategoriesScreen}
                options={{
                    headerTitle: 'Jorge\'s Meals App',
                }}
            />
            <Stack.Screen
                name="Meals"
                component={CategoryMealsScreen}
                options={{
                    headerTitle: 'Category meals',
                    headerRight: () => <Text>{'  '}</Text>
                }}
            />
            <Stack.Screen
                name="MealDetails"
                component={MealDetailsScreen}
                options={{
                    headerTitle: 'Meal details',
                    // headerRight: () => (
                    //     <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    //         <Item
                    //             title={'Favourite'}
                    //             iconName={'ios-star'}
                    //             onPress={() => console.log('Favourite!')}
                    //         />
                    //     </HeaderButtons>
                    // )
                }}
            />
        </Stack.Navigator>
    )
        ;
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
        // textAlign: 'center',
    },
    headerBackTitleStyle: {
        fontFamily: 'openSans'
    }
})

