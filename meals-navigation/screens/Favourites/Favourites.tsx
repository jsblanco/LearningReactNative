

import React from 'react';
import {View} from "react-native";
import {useSelector} from "react-redux";
import {DrawerActions} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {FavouritesStackParamList} from '../../navigation/types'
import HeaderButton from "../../components/HeaderButton/HeaderButton";
import Text from "../../components/basicComponents/Text/Text";
import MealList from "../../components/MealList/MealList";
import styles from "./Favourites.styles";
import {RootState} from "../../App";
import Button from "../../components/basicComponents/Button/Button";

type Props = StackScreenProps<FavouritesStackParamList, 'FavouritesList'>;
const FavouritesScreen = ({route, navigation}: Props) => {

    const navigateToMeal = (mealId: string) => navigation.navigate('MealDetails', {mealId: mealId})
    const favouriteMeals = useSelector((state: RootState) => state.meals.favouriteMeals)

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
    }, [favouriteMeals]);

    if (favouriteMeals.length===0) {
        // @ts-ignore
        return (
                <View style={styles.screen}>
                    <Text style={styles.emptyListWarning}>No favourites selected</Text>
                    <Button onPress={()=>navigation.navigate('Categories', {screen: 'Categories'})}>Go select some!</Button>
                </View>
            )
    }

    /*

        'NestedNavigator1',
    {},
    NavigationActions.navigate({
        routeName: 'screenB'
    })


     */

    return (
        <MealList meals={favouriteMeals} onSelect={navigateToMeal}/>
    )
}

export default FavouritesScreen;
