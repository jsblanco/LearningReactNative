import React from 'react';
import {View} from 'react-native';
import styles from './PlaceDetailsScreen.styles';
import Text from "../../components/basicComponents/Text/Text";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {StackScreenProps} from "@react-navigation/stack";
import {Place} from "../../models/Places/Place";

type Props = StackScreenProps<StackNavigation, 'Details'>;


const PlaceDetailsScreen = ({route, navigation}: Props) => {
    const place = useSelector((state: RootState) => state.places.places.find((place: Place) => place.id === route.params.id))
    if (!place) return <View style={styles.screen}><Text>Place not found</Text></View>;

    return (
        <View style={styles.screen}>
            <Text>PlaceDetailsScreen works!</Text>
        </View>
    )
}

export default PlaceDetailsScreen;
