import React, {ReactNode} from 'react';
import {ImageBackground, Platform, TouchableNativeFeedback, TouchableOpacity, View} from 'react-native';
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
                    <View style={{...styles.mealRow, ...styles.mealHeader}}>
                        <ImageBackground source={{uri: meal.imageUrl}} style={styles.mealImage}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.mealTitle} numberOfLines={1}>{meal.title}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{...styles.mealRow, ...styles.mealDetails}}>
                        <Text style={styles.detailsEntry}>{meal.duration} minutes</Text>
                        <Text style={styles.detailsEntry}>{meal.complexity}</Text>
                        <Text style={styles.detailsEntry}>{meal.affordability}</Text>
                    </View>
                </View>
            </ButtonType>
        </View>
    )
}


export default MealListItem;
