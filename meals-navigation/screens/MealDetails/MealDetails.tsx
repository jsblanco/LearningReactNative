import React from 'react';
import {View, Text} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {StackParamList} from '../../navigation/types'
import styles from './MealDetails.styles';
import Button from "../../components/basicComponents/Button/Button";
type Props = StackScreenProps<StackParamList, 'Meals'>;

const MealDetailsScreen = ({route, navigation}: Props) => {

    return (
        <View style={styles.screen}>
            <Text>MealDetails</Text>
            <Button onPress={()=>navigation.popToTop()}>  Return home  </Button>
        </View>
    )
}

export default MealDetailsScreen;
