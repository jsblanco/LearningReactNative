import React from 'react';
import {HeaderButton as HButton} from 'react-navigation-header-buttons';
import {Ionicons} from '@expo/vector-icons';
import {Platform} from 'react-native';
import colours from '../../constants/colours';


const HeaderButton = (props: any) => {

    return (
        <HButton
            {...props}
            IconComponent={Ionicons}
            iconSize={23}
            color={colours.primary}
            // color = {Platform.OS === 'android ? 'white : colours.primary}
        />
    )

}

export default HeaderButton;
