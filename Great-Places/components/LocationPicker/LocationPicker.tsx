import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator, Alert, Route} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import Text from "../../components/basicComponents/Text/Text";
import Button from "../../components/basicComponents/Button/Button";
import MapPreview from "../MapPreview/MapPreview";
import * as Location from 'expo-location'
import * as Permissions from 'expo-permissions'
import colours from "../../constants/colours";
import styles from './LocationPicker.styles';

export type LocationType = { lat: number, lng: number }

const LocationPicker = ({route, onLocationPicked}: { route: Route, onLocationPicked: (e: LocationType) => void }) => {
    const [isFetching, setIsFetching] = useState(false);
    const [pickedLocation, setPickedLocation] = useState<LocationType>();
    const navigation = useNavigation()
    let selectedLocation: false | LocationType = false
    if (route.params && route.params.selectedLocation) selectedLocation = route.params.selectedLocation;

    useEffect(() => {
        if (selectedLocation) {
            setPickedLocation(selectedLocation);
            onLocationPicked(selectedLocation);
        }
    }, [selectedLocation, onLocationPicked])

    const verifyPermissions = async () => {
        const result = await Permissions.askAsync(Permissions.LOCATION);
        if (result.status !== 'granted') {
            Alert.alert(
                'Permissions needed',
                'This app needs to be granted permissions in order to open the device camera',
                [{text: 'Ok'}]
            );
            return false;
        }
        return true;
    }

    const getLocationHandler = async () => {
        const hasPermission = await verifyPermissions()
        if (!hasPermission) return;

        try {
            setIsFetching(true)
            const currentLocation = await Location.getCurrentPositionAsync();
            setPickedLocation({
                lat: currentLocation.coords.latitude,
                lng: currentLocation.coords.longitude
            })
            onLocationPicked({
                lat: currentLocation.coords.latitude,
                lng: currentLocation.coords.longitude
            })
        } catch (e) {
            Alert.alert('Could not determine location', 'There was a problem determining your location. Please try again later.', [{text: 'Ok'}])
        }
        setIsFetching(false)
    }

    const pickOnMapHandler = () => navigation.navigate('Map');


    return (
        <View style={styles.screen}>
            <MapPreview onPress={pickOnMapHandler} location={pickedLocation} style={styles.mapPreview}>
                {isFetching
                    ? <ActivityIndicator color={colours.brightAccent} size={"large"}/>
                    : <Text>No location chosen</Text>}
            </MapPreview>
            <View style={styles.actionsRow}>
                <Button onPress={pickOnMapHandler}>Pick on a map</Button>
                <Button onPress={getLocationHandler}>Find your location</Button>
            </View>
        </View>
    )
}

export default LocationPicker;
