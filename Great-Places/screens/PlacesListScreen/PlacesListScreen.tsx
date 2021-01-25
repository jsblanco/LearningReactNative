import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import styles from './PlacesListScreen.styles';
import {FlatList, Platform, View} from 'react-native';
import {StackScreenProps} from "@react-navigation/stack";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import PlaceListItem from "../../components/PlaceListItem/PlaceListItem";
import HeaderButton from "../../components/basicComponents/HeaderButton/HeaderButton";
import H1 from "../../components/basicComponents/H1/H1";
import {Place} from "../../models/Places/Place";

type Props = StackScreenProps<StackNavigation, 'List'>;

const PlacesListScreen = ({route, navigation}: Props) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item title={'Add place!'} iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
                          onPress={() => navigation.navigate('AddNew')}/>
                </HeaderButtons>
            ),
        });
    }, [navigation]);

    const places = useSelector((state: RootState) => state.places.places)
    const renderListItems = ({item}: { item: Place }) => {
        return (<PlaceListItem
            onSelect={() => navigation.navigate('Details', {id: item.id})}
            image={'https://cdn.contexttravel.com/image/upload/c_fill,q_60,w_2600/v1549318570/production/city/hero_image_2_1549318566.jpg'}
            title={item.title}
            address={item.title}
        />)
    }

    return (
        <FlatList data={places} keyExtractor={item => item.id} renderItem={renderListItems}/>
    )
}

export default PlacesListScreen;
