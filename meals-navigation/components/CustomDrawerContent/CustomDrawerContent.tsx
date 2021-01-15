import React from 'react';
import styles from './CustomDrawerContent.styles';

import {
    DrawerContentScrollView, DrawerItem,
    DrawerItemList,
} from '@react-navigation/drawer';
import {Dimensions, Linking} from "react-native";
import {Ionicons} from "@expo/vector-icons";

export function CustomDrawerContent(props: any) {
    return (
        <DrawerContentScrollView
            {...props}
        >
            <DrawerItemList
                {...props}
            />
            <DrawerItem
                {...props}
                label="Author"
                icon={({color, size}) => (
                    <Ionicons name="information-circle-outline" color={color} size={size}/>
                )}
                onPress={() => Linking.openURL('https://github.com/jsblanco')}
            />
        </DrawerContentScrollView>
    );
}


export default CustomDrawerContent;
