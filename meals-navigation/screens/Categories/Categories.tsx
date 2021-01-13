import React from 'react';
import {FlatList} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {StackParamList} from '../../navigation/types'
import dummyCategories from '../../data/dummyData';
import Category from "../../models/Category";
import CategoryGridItem from "../../components/CategoryGridItem/CategoryGridItem";

type Props = StackScreenProps<StackParamList, 'Categories'>;


const CategoriesScreen = ({route, navigation}: Props) => {

    const renderGridItem = ({item}: { item: Category }) => <CategoryGridItem category={item}/>;

    return (
        <FlatList keyExtractor={(item: Category) => item.getId()} numColumns={2} data={dummyCategories}
                  renderItem={renderGridItem}/>
    )
}

export default CategoriesScreen;
