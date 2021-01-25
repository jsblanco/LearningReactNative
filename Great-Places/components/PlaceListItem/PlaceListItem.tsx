import React from 'react';
import {Image, Platform, TouchableNativeFeedback, TouchableOpacity, View} from 'react-native';
import styles from './PlaceListItem.styles';
import Text from "../../components/basicComponents/Text/Text";

const PlaceListItem = ({image, title, address, onSelect}:
                           { onSelect: () => void, image: string, title: string, address: string }) => {

    let ButtonType: any = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) ButtonType = TouchableNativeFeedback

    return (
        <ButtonType onPress={onSelect}>
            <View style={styles.placeItem}>
                <Image style={styles.image} source={{uri: image}}/>
                <View style={styles.infoContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.address}>{address}</Text>
                </View>
            </View>
        </ButtonType>
    )
}

export default PlaceListItem;
