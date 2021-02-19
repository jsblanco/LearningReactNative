import React, {useCallback, useState} from 'react';
import MapView, {Marker} from 'react-native-maps';
import styles from './MapScreen.styles';
import Text from '../../components/basicComponents/Text/Text'
import {Alert, TouchableOpacity} from "react-native";
import {StackScreenProps} from "@react-navigation/stack";

type Props = StackScreenProps<StackNavigation, 'Map'>;

const MapScreen = ({route, navigation}: Props) => {
    const {initialLocation, readonly} = route.params
    const [selectedLocation, setSelectedLocation] = useState<{ lat: number, lng: number }>()
    const mapRegion = {
        latitude: initialLocation? initialLocation.lat :  24.15,
        longitude: initialLocation? initialLocation.lng : 120.67,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    }
    let markerCoords;
    if (selectedLocation) markerCoords = {latitude: selectedLocation.lat, longitude: selectedLocation.lng}

    const saveCoordinatesHandler = useCallback(() => {
        if (!selectedLocation) return Alert.alert(
            'No location chosen',
            'Please choose a location before saving',
            [{text: 'ok'}]);
        navigation.navigate('AddNew', {selectedLocation: selectedLocation})
    }, [selectedLocation])

    const onPressLocation = (event: any) => {
        !readonly && setSelectedLocation({
            lat: +event.nativeEvent.coordinate.latitude,
            lng: +event.nativeEvent.coordinate.longitude
        })
    }

    React.useLayoutEffect(() => {
        if (initialLocation) setSelectedLocation(initialLocation)
        navigation.setOptions({
            headerRight: () => !readonly && (
                <TouchableOpacity style={styles.headerButton} onPress={saveCoordinatesHandler}>
                    <Text style={styles.headerButtonText}>Save location</Text>
                </TouchableOpacity>
            ),
        });
    }, [navigation, selectedLocation, readonly, initialLocation]);

    return (
        <MapView style={styles.screen} region={mapRegion} onPress={onPressLocation}>
            {/*// @ts-ignore*/}
            {selectedLocation && <Marker coordinate={markerCoords}></Marker>}
        </MapView>
    )
}

export default MapScreen;
