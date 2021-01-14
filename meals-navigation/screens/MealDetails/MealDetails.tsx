import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {StackParamList} from '../../navigation/types'
import {CATEGORIES, MEALS} from '../../data/dummyData'
import styles from './MealDetails.styles';
import Button from "../../components/basicComponents/Button/Button";
import Meal from "../../models/Meal";
import MealListItem from "../../components/MealListItem/MealListItem";

type Props = StackScreenProps<StackParamList, 'MealDetails'>;

const MealDetailsScreen = ({route, navigation}: Props) => {


    const meal = MEALS.find(meal => meal.id === route.params.mealId);

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: !!meal ? meal.title : 'Missing meal',
        });
    }, [navigation, meal]);

    if (!meal) return <View style={styles.screen}><Text>Loading meal...</Text></View>;

    return (
        <View style={styles.screen}>
            <Text>{meal.title}</Text>
            <Button onPress={() => navigation.popToTop()}> Return home </Button>
        </View>
    )
}

export default MealDetailsScreen;
