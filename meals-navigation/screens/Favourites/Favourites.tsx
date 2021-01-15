import React from 'react';
import {DrawerActions} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {FavouritesStackParamList} from '../../navigation/types'
import {MEALS} from '../../data/dummyData';
import HeaderButton from "../../components/HeaderButton/HeaderButton";
import MealList from "../../components/MealList/MealList";

type Props = StackScreenProps<FavouritesStackParamList, 'FavouritesList'>;

const FavouritesScreen = ({route, navigation}: Props) => {

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item
                        title={'Menu'}
                        iconName={'ios-menu'}
                        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}
                    />
                </HeaderButtons>
            )
        });
    }, [navigation]);

    const navigateToMeal = (mealId: string) => navigation.navigate('MealDetails', {mealId: mealId})
    const favouriteMeals = MEALS.filter(meal => +meal.id.slice(1) % 2 === 0)

    return (
        <MealList meals={favouriteMeals} onSelect={navigateToMeal}/>

    )
}

export default FavouritesScreen;
