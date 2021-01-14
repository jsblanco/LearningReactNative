import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {StackParamList} from '../../navigation/types'
import styles from './CategoryMeals.styles';
import Button from "../../components/basicComponents/Button/Button";
import {CATEGORIES, MEALS} from '../../data/dummyData';
import Meal from "../../models/Meal";
import MealListItem from "../../components/MealListItem/MealListItem";


type Props = StackScreenProps<StackParamList, 'Meals'>;


const CategoryMealsScreen = ({route, navigation}: Props) => {
    const categoryId = route.params.categoryId;
    const categoryMeals = MEALS.filter(meal => meal.categoryId.indexOf(categoryId) >= 0);
    const renderMealListItem = ({item}: { item: Meal }) => {
        return <MealListItem meal={item} onSelect={() => navigation.navigate('MealDetails', {mealId: item.id})}/>
    }

    const category = CATEGORIES.find(category => category.id === categoryId)

    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: !!category ? category.title : 'Missing category',
        });
    }, [navigation, category]);


    return (
        <View style={styles.screen}>
            <FlatList
                data={categoryMeals}
                keyExtractor={(meal: Meal) => meal.id}
                renderItem={renderMealListItem}
                style={{width: '100%'}}
            />
        </View>
    )
}

CategoryMealsScreen.navigationOptions = {
    headerTitle: 'Category meals'
};
export default CategoryMealsScreen;
