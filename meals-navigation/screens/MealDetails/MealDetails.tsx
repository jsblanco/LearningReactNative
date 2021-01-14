import React from 'react';
import {View, Text} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {StackParamList} from '../../navigation/types'
import { MEALS} from '../../data/dummyData'
import styles from './MealDetails.styles';
import Button from "../../components/basicComponents/Button/Button";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../../components/HeaderButton/HeaderButton";

type Props = StackScreenProps<StackParamList, 'MealDetails'>;

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
                    <Item
                        title={'User'}
                        iconName={'person-outline'}
                        onPress={() => console.log('Users!')}
                    />
                </HeaderButtons>
            )
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
