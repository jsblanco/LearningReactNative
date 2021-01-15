import React from 'react';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList} from "@react-navigation/drawer";

import {Ionicons} from "@expo/vector-icons";
import TabsNavigation from "./TabsNavigation";
import FiltersNavigation from "./stack/FiltersNavigation";
import {Dimensions} from "react-native";
import colours from "../constants/colours";
import CustomDrawerContent from "../components/CustomDrawerContent/CustomDrawerContent";

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {

    return (
        <Drawer.Navigator
            initialRouteName="Home"
            backBehavior={'initialRoute'}
            drawerContentOptions={{
                activeTintColor: colours.brightAccent,
                itemStyle: {
                    borderRadius: 0,
                    margin: 0,
                    width: '100%',
                }
            }}
            drawerContent={CustomDrawerContent}
            drawerStyle={{
                maxWidth: 200,
                borderBottomRightRadius: 10,
                borderTopRightRadius: 10,
            }}
            drawerType={Dimensions.get('window').width >= 768 ? 'permanent' : 'front'}
        >
            <Drawer.Screen
                name="Home"
                component={TabsNavigation}
                options={{
                    drawerLabel: "Meals",
                    drawerIcon: ({focused, color, size}) => (
                        <Ionicons name="restaurant-outline" color={color} size={16}/>
                    ),
                }}
            />
            <Drawer.Screen
                name="Filters"
                component={FiltersNavigation}
                options={{
                    drawerLabel: "Meal filters",
                    drawerIcon: ({focused, color, size}) => (
                        <Ionicons name="funnel-outline" color={color} size={16}/>
                    ),
                }}
            />
        </Drawer.Navigator>
    )
}
