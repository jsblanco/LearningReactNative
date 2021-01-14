import React from 'react';
import {FlatList} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {StackParamList} from '../../navigation/types'
import {CATEGORIES} from '../../data/dummyData';
import Category from "../../models/Category";
import CategoryGridItem from "../../components/CategoryGridItem/CategoryGridItem";

type Props = StackScreenProps<StackParamList, 'Categories'>;


const CategoriesScreen = ({route, navigation}: Props) => {

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
