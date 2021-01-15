import React from 'react';
import {View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {MealsStackParamList} from '../../navigation/types'
import styles from './CategoryMeals.styles';
import {CATEGORIES, MEALS} from '../../data/dummyData';
import MealList from "../../components/MealList/MealList";


type Props = StackScreenProps<MealsStackParamList, 'Meals'>;


const CategoryMealsScreen = ({route: {params: {categoryId}}, navigation}: Props) => {
    const categoryMeals = MEALS.filter(meal => meal.categoryId.indexOf(categoryId) >= 0);
    const category = CATEGORIES.find(category => category.id === categoryId)

    const navigateToMeal = (mealId: string) => navigation.navigate('MealDetails', {mealId: mealId})

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: !!category ? category.title : 'Missing category',
        });
    }, [navigation, category]);

    return (
            <MealList meals={categoryMeals} onSelect={navigateToMeal}/>
    )
}

CategoryMealsScreen.navigationOptions = {
    headerTitle: 'Category meals'
};
export default CategoryMealsScreen;
