import React, {ReactNode} from 'react';
import {Platform, TouchableNativeFeedback, TouchableOpacity, View} from 'react-native';
import Text from '../basicComponents/Text/Text'
import styles from './MealListItem.styles';
import Meal from "../../models/Meal";

const MealListItem = ({meal, onSelect}: { meal: Meal, onSelect: () => void }) => {

    let ButtonType: any = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) ButtonType = TouchableNativeFeedback

    return (
        <View style={styles.screen}>
            <ButtonType style={{flex: 1, width: '100%'}} onPress={onSelect}>
                <View style={styles.content}>
                    <View style={styles.mealRow}>
                        <Text>MealListItem works!</Text>
                    </View>
                    <View style={styles.mealRow}></View>
                </View>
            </ButtonType>
        </View>
    )
}


export default MealListItem;
