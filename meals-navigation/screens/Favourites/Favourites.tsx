import React from 'react';
import {View, Text} from 'react-native';
import styles from './Favourites.styles';
import MealList from "../../components/MealList/MealList";
import {StackScreenProps} from '@react-navigation/stack';
import {FavouritesStackParamList, StackParamList} from '../../navigation/types'
import {MEALS} from '../../data/dummyData';

type Props = StackScreenProps<FavouritesStackParamList, 'FavouritesList'>;

const FavouritesScreen = ({route, navigation}: Props) => {

    const navigateToMeal = (mealId: string) => navigation.navigate('MealDetails', {mealId: mealId})
    const favouriteMeals = MEALS.filter(meal=> +meal.id.slice(1)%2===0)

    return (
            <MealList meals={favouriteMeals} onSelect={navigateToMeal}/>

    )
}

export default FavouritesScreen;
