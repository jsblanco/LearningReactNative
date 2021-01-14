import React from 'react';
import {FlatList, View} from 'react-native';
import Meal from "../../models/Meal";
import MealListItem from "../MealListItem/MealListItem";
import styles from "../../components/MealList/MealList.styles";

const MealList = ({meals, onSelect}: { meals: Meal[], onSelect: (mealId: string) => void }) => {

    const renderMealListItem = ({item}: { item: Meal }) => {
        return <MealListItem meal={item} onSelect={() => onSelect(item.id)}/>
    }


    return (
        <View style={styles.screen}>
            <FlatList
                data={meals}
                keyExtractor={(meal: Meal) => meal.id}
                renderItem={renderMealListItem}
                style={styles.flatList}
            />
        </View>
    )
}


export default MealList;
