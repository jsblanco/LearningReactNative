import React, {useState} from 'react';
import {View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import styles from './MapScreen.styles';
import Text from "../../components/basicComponents/Text/Text";

const MapScreen = (props: any) => {
    const [selectedLocation, setSelectedLocation] = useState<{ lat: number, lng: number }>()
    const mapRegion = {
        latitude: 24.15,
        longitude: 120.67,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    }
    let markerCoords;
    if (selectedLocation) markerCoords = {latitude: selectedLocation.lat, longitude: selectedLocation.lng}

    const onPressLocation = (event: any) => {
        setSelectedLocation({
            lat: +event.nativeEvent.coordinate.latitude,
            lng: +event.nativeEvent.coordinate.longitude
        })
    }

    return (
        <MapView style={styles.screen} region={mapRegion} onPress={onPressLocation}>
            {selectedLocation && <Marker coordinate={markerCoords}></Marker>}
        </MapView>
    )
}

export default MapScreen;
