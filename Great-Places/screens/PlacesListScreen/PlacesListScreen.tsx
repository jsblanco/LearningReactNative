import React from 'react';
import {View} from 'react-native';
import Button from '../../components/basicComponents/Button/Button'
import styles from './PlacesListScreen.styles';
import Text from "../../components/basicComponents/Text/Text";

const PlacesListScreen = (props: any) => {

    return (
        <View style={styles.screen}>
            <Text>PlacesListScreen works!</Text>
            <Button onPress={()=>props.navigation.navigate('Details')}>Go!</Button>
        </View>
    )
}

export default PlacesListScreen;
