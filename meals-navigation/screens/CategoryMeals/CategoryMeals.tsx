import React from 'react';
import {View, Text} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {StackParamList} from '../../navigation/types'
import styles from './CategoryMeals.styles';
import Button from "../../components/basicComponents/Button/Button";
import dummyCategories from '../../data/dummyData';
import CategoriesScreen from "../Categories/Categories";
import Category from "../../models/Category";

type Props = StackScreenProps<StackParamList, 'Meals'>;


const CategoryMealsScreen = ({route, navigation}: Props) => {


    const category = dummyCategories.find(category => category.getId() === route.params.categoryId)

    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: !!category ? category.getTitle() : 'Missing category',
        });
    }, [navigation, category]);


    return (
        <View style={styles.screen}>
            <Text>{!!category ? category.getTitle() : 'There is no such category'}</Text>
            <Button onPress={() => navigation.push('MealDetails')}>Go to meal details!</Button>
            <Button onPress={() => navigation.goBack()}>Go back!</Button>
        </View>
    )
}

CategoryMealsScreen.navigationOptions = {
    headerTitle: 'Category meals'
};
export default CategoryMealsScreen;
