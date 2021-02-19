import React, {useEffect} from 'react';
import {RootState} from "../../store/store";
import {FlatList, Platform} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {StackScreenProps} from "@react-navigation/stack";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import PlaceListItem from "../../components/PlaceListItem/PlaceListItem";
import HeaderButton from "../../components/basicComponents/HeaderButton/HeaderButton";
import {fetchPlaces} from "../../store/actions/places.actions";
import {Place} from "../../models/Places/Place";

type Props = StackScreenProps<StackNavigation, 'List'>;

const PlacesListScreen = ({route, navigation}: Props) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item title={'Add place!'} iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
                          onPress={() => navigation.navigate('AddNew', {})}/>
                </HeaderButtons>
            ),
        });
    }, [navigation]);
    const places = useSelector((state: RootState) => state.places.places)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPlaces.request())
    }, [dispatch])

    const renderListItems = ({item}: { item: Place }) => {
        return (<PlaceListItem
            onSelect={() => navigation.navigate('Details', {id: item.id})}
            image={item.imageUri}
            title={item.title}
            address={item.address}
        />)
    }

    return (
        <FlatList data={places} keyExtractor={item => item.id} renderItem={renderListItems}/>
    )
}

export default PlacesListScreen;
