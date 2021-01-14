import React from 'react';
import {View, TouchableOpacity, Platform, TouchableNativeFeedback} from 'react-native';
import Text from '../basicComponents/Text/Text'
// import {useNavigation} from '@react-navigation/native';
import styles from './CategoryGridItem.styles';
import Category from "../../models/Category";


const CategoryGridItem = ({category, onSelect}: { category: Category, onSelect: () => void }) => {

    // const navigation = useNavigation();

    let ButtonType: any = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) ButtonType = TouchableNativeFeedback

    return (
        <View style={styles.screen}>
            <ButtonType onPress={onSelect}>
                <View style={{...styles.container, backgroundColor: category.colour}}>
                    <Text numberOfLines={2} style={styles.title}>{category.title}</Text>
                </View>
            </ButtonType>
        </View>
    )
}


export default CategoryGridItem;
