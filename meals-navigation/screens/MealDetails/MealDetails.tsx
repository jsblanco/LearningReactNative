import React from 'react';
import {View, ScrollView, Image} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {MealsStackParamList} from '../../navigation/types'
import {MEALS} from '../../data/dummyData'
import styles from './MealDetails.styles';

import Text from "../../components/basicComponents/Text/Text";
import Button from "../../components/basicComponents/Button/Button";
import HeaderButton from "../../components/HeaderButton/HeaderButton";
import * as url from "url";
import ListItem from "../../components/ListItem/ListItem";

type Props = StackScreenProps<MealsStackParamList, 'MealDetails'>;

const MealDetailsScreen = ({route, navigation}: Props) => {

    const meal = MEALS.find(meal => meal.id === route.params.mealId);

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: !!meal ? meal.title : 'Missing meal',
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item
                        title={'Favourite'}
                        iconName={'ios-star-outline'}
                        onPress={() => console.log('Favourite!')}
                    />
                </HeaderButtons>
            )
        });
    }, [navigation, meal]);

    if (!meal) return <View style={styles.screen}><Text>Loading meal...</Text></View>;

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
                <ListItem itemKey={index} value={ingredient}/>)}
            <Text style={styles.title}>Cooking steps:</Text>
            {meal.steps.map((step, index) =>
                <ListItem itemKey={index} value={index+1+'. '+step}/>)}
        </ScrollView>
    )
}

export default MealDetailsScreen;
