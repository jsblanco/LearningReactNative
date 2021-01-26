import React, {useState} from 'react';
import {View, ActivityIndicator, Alert} from 'react-native';
import styles from './LocationPicker.styles';
import Text from "../../components/basicComponents/Text/Text";
import Button from "../../components/basicComponents/Button/Button";
import * as Location from 'expo-location'
import * as Permissions from 'expo-permissions'
import colours from "../../constants/colours";


const LocationPicker = (props: any) => {
    const [isFetching, setIsFetching] = useState(false);
    const [pickedLocation, setPickedLocation]= useState<{lat: number, lng: number}>();

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
            console.log(currentLocation)
            setPickedLocation({lat: currentLocation.coords.latitude, lng: currentLocation.coords.longitude})
        } catch (e) {
            Alert.alert('Could not determine location', 'There was a problem determining your location. Please try again later.', [{text: 'Ok'}])
        }
        setIsFetching(false)
    }

    return (
        <View style={styles.screen}>
            <View style={styles.mapPreview}>
                {isFetching
                    ? <ActivityIndicator color={colours.brightAccent} size={"large"}/>
                    : <Text>No location chosen</Text>}
            </View>
            <Button onPress={getLocationHandler}>Select location</Button>
        </View>
    )
}

export default LocationPicker;
