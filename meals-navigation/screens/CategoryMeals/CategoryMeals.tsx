import React from 'react';
import {useSelector} from "react-redux";
import {StackScreenProps} from '@react-navigation/stack';
import {MealsStackParamList} from '../../navigation/types'
import styles from './CategoryMeals.styles';
import MealList from "../../components/MealList/MealList";
import {RootState} from "../../App";
import {View} from "react-native";
import Text from "../../components/basicComponents/Text/Text";
import {DrawerActions} from "@react-navigation/native";
import Button from '../../components/basicComponents/Button/Button';

type Props = StackScreenProps<MealsStackParamList, 'Meals'>;


const CategoryMealsScreen = ({route: {params: {categoryId}}, navigation}: Props) => {

    const category = useSelector((state: RootState) => state.meals.categories.find(category => category.id === categoryId));
    const availableMeals = useSelector((state: RootState) => state.meals.filteredMeals.filter(meal => meal.categoryId.indexOf(categoryId) >= 0));
    const navigateToMeal = (mealId: string) => navigation.navigate('MealDetails', {mealId: mealId})

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: !!category ? category.title : 'Missing category',
        });
    }, [navigation, category]);

    if (availableMeals.length === 0) {
        // @ts-ignore
        return (
            <View style={styles.screen}>
                <Text style={styles.emptyListWarning}>No meals match your filters...</Text>
                <Button onPress={()=>navigation.navigate('Filters', {screen: 'FiltersScreen'})}>Change your filters!</Button>
            </View>
        )
    }

    return (
        <MealList meals={availableMeals} onSelect={navigateToMeal}/>
    )
}


export default CategoryMealsScreen;
