import React, {useCallback} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {View, ScrollView, Image} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {MealsStackParamList} from '../../navigation/types'
import styles from './MealDetails.styles';

import Text from "../../components/basicComponents/Text/Text";
import HeaderButton from "../../components/HeaderButton/HeaderButton";
import ListItem from "../../components/ListItem/ListItem";
import * as actions from '../../store/actions/mealsActions';
import {RootState} from "../../App";
type Props = StackScreenProps<MealsStackParamList, 'MealDetails'>;

const MealDetailsScreen = ({route: {params: {mealId}}, navigation}: Props) => {

    const meal = useSelector((state: RootState) => state.meals.meals.find(meal => meal.id === mealId))
    if (!meal) return <View style={styles.screen}><Text>Loading meal...</Text></View>;


    const isFavourite = useSelector((state: RootState) => state.meals.favouriteMeals.findIndex(meal => meal.id === mealId))
    const dispatch = useDispatch();
    const toggleFavouriteHandler = useCallback(() => {
        dispatch(actions.toggleFavourite(mealId))
    }, [dispatch, mealId])
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: !!meal ? meal.title : 'Missing meal',
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item
                        title={'Favourite'}
                        iconName={isFavourite>=0 ? 'ios-star' : 'ios-star-outline'}
                        onPress={toggleFavouriteHandler}
                    />
                </HeaderButtons>
            )
        });
    }, [isFavourite, meal, toggleFavouriteHandler]);

    return (
        <ScrollView style={{flex: 1, height: '100%'}}>
            <Image style={{...styles.image}} source={{uri: meal.imageUrl}}/>
            <View style={styles.quickDetails}>
                <Text style={styles.detailsEntry}>{meal.duration} minutes</Text>
                <Text style={styles.detailsEntry}>{meal.complexity}</Text>
                <Text style={styles.detailsEntry}>{meal.affordability}</Text>
            </View>
            <Text style={styles.title}>Ingredients:</Text>
            {meal.ingredients.map((ingredient, index) =>
                <ListItem key={index} value={ingredient}/>)}
            <Text style={styles.title}>Cooking steps:</Text>
            {meal.steps.map((step, index) =>
                <ListItem key={index} value={index + 1 + '. ' + step}/>)}
        </ScrollView>
    )
}

export default MealDetailsScreen;
