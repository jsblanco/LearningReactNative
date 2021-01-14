import React from 'react';
import {HeaderButton as HButton} from 'react-navigation-header-buttons';
import {Ionicons} from '@expo/vector-icons';
import {Platform} from 'react-native';
import colours from '../../constants/colours';


export default function HeaderButton(props: any) {

    return (
        <HButton
            {...props}
            IconComponent={Ionicons}
            iconSize={21}
            color={Platform.OS === 'android' ? 'white' : colours.primary}
            // color={colours.primary}
        />
    )
}
