import React from 'react';
import {FlatList} from 'react-native';
import {DrawerActions} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {MealsStackParamList} from '../../navigation/types'
import {CATEGORIES} from '../../data/dummyData';
import Category from "../../models/Category";

import CategoryGridItem from "../../components/CategoryGridItem/CategoryGridItem";
import HeaderButton from "../../components/HeaderButton/HeaderButton";

type Props = StackScreenProps<MealsStackParamList, 'Categories'>;

const CategoriesScreen = ({route, navigation}: Props) => {

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


    const renderGridItem = ({item}: { item: Category }) => {
        return (
            <CategoryGridItem
                category={item}
                onSelect={() => navigation.navigate('Meals', {categoryId: item.id})}/>
        )
    };

    return (
        <FlatList keyExtractor={(item: Category) => item.id} numColumns={2} data={CATEGORIES}
                  renderItem={renderGridItem}/>
    )
}

export default CategoriesScreen;
