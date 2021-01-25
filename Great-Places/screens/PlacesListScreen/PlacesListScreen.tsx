import React from 'react';
import {Platform, View} from 'react-native';
import Button from '../../components/basicComponents/Button/Button'
import styles from './PlacesListScreen.styles';
import Text from "../../components/basicComponents/Text/Text";
import {StackScreenProps} from "@react-navigation/stack";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../../components/basicComponents/HeaderButton/HeaderButton";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";

type Props = StackScreenProps<StackNavigation, 'List'>;

const PlacesListScreen = ({route, navigation}: Props) => {

    const places = useSelector((state: RootState) => state.places.places)

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


    return (
        <View style={styles.screen}>
            <Text>PlacesListScreen works!</Text>
            {places.length > 0 && places.map(place => <Text key={place.title}>{place.title}</Text>)}
            <Button onPress={() => navigation.navigate('Details')}>Go!</Button>
        </View>
    )
}

export default PlacesListScreen;
