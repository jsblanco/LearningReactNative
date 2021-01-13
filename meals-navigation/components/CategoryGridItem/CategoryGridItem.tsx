import React from 'react';
import {View, Text, TouchableOpacity, Platform, TouchableNativeFeedback} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './CategoryGridItem.styles';
import Category from "../../models/Category";


const CategoryGridItem = ({category}: { category: Category }) => {

    const navigation = useNavigation();
    let ButtonType: any = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) ButtonType = TouchableNativeFeedback

    return (
        <View style={styles.container}>
            <ButtonType onPress={() => navigation.navigate('Meals', {categoryId: category.getId()})}>
                <View style={{...styles.screen, backgroundColor: category.getColour()}}>
                    <Text style={styles.title}>{category.getTitle()}</Text>
                </View>
            </ButtonType>
        </View>
    )
}


export default CategoryGridItem;
