import React, {useCallback, useState} from 'react';
import MapView, {Marker} from 'react-native-maps';
import styles from './MapScreen.styles';
import Text from '../../components/basicComponents/Text/Text'
import {useNavigation} from "@react-navigation/native";
import {Alert, TouchableOpacity} from "react-native";

const MapScreen = (props: any) => {
    const [selectedLocation, setSelectedLocation] = useState<{ lat: number, lng: number }>()
    const navigation = useNavigation()
    const mapRegion = {
        latitude: 24.15,
        longitude: 120.67,
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
        setSelectedLocation({
            lat: +event.nativeEvent.coordinate.latitude,
            lng: +event.nativeEvent.coordinate.longitude
        })
    }

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity style={styles.headerButton} onPress={saveCoordinatesHandler}>
                    <Text style={styles.headerButtonText}>Save location</Text>
                </TouchableOpacity>
            ),
        });
    }, [navigation, selectedLocation]);

    return (
        <MapView style={styles.screen} region={mapRegion} onPress={onPressLocation}>
            {/*// @ts-ignore*/}
            {selectedLocation && <Marker coordinate={markerCoords}></Marker>}
        </MapView>
    )
}

export default MapScreen;
