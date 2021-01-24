import React from 'react';
import {HeaderButton as HButton} from 'react-navigation-header-buttons';
import {Ionicons} from '@expo/vector-icons';
import colours from '../../../constants/colours';
import {Platform} from "react-native";


export default function HeaderButton(props: any) {

    return (
        <HButton
            {...props}
            IconComponent={Ionicons}
            iconSize={21}
            color={Platform.OS === 'android' ? colours.background : colours.primary}
        />
    )
}
