import React, {ReactChild} from 'react';
import {Image, TouchableOpacity, View, ViewStyle} from 'react-native';
import styles from './MapPreview.styles';
import ENV from "../../env"

const MapPreview = ({location, children, style, onPress}:
                        { location?: { lat: number, lng: number }, children: ReactChild, style?: ViewStyle, onPress?: () => void }) => {
    let imagePreviewUrl;
    if (location) {
        imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${
            location.lat
        },${
            location.lng
        }&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:A%7C${
            location.lat
        },${location.lng}&key=${ENV().googleApi}`
    }


    return (
        <TouchableOpacity onPress={onPress} style={{...styles.screen, ...style}}>
            {location
                ?
                <Image style={styles.mapImage} source={{uri: imagePreviewUrl}}/>
                :
                children
            }
        </TouchableOpacity>
    )
}

export default MapPreview;
