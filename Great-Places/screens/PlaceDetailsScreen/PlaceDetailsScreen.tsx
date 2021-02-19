import React from 'react';
import {ScrollView, View, Image} from 'react-native';
import styles from './PlaceDetailsScreen.styles';
import Text from "../../components/basicComponents/Text/Text";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {StackScreenProps} from "@react-navigation/stack";
import {Place} from "../../models/Places/Place";
import MapPreview from "../../components/MapPreview/MapPreview";

type Props = StackScreenProps<StackNavigation, 'Details'>;

const PlaceDetailsScreen = ({route, navigation}: Props) => {
    const place = useSelector((state: RootState) => state.places.places.find((place: Place) => place.id === route.params.id))
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: place? place.title : 'Missing place'
        });
    }, [place]);
    if (!place) return <View style={styles.screen}><Text>Place not found</Text></View>;
    console.log(place)

    return (
        <ScrollView>
            <Image style={styles.image} source={{uri: place.imageUri}}/>
            <View>
                <Text style={styles.title}>{place.title}</Text>
                <Text style={styles.address}>{place.address}</Text>
                <MapPreview location={{lat: place.lat, lng: place.lng}}>
                    <Text>Missing location</Text>
                </MapPreview>
            </View>
        </ScrollView>
    )
}

export default PlaceDetailsScreen;
