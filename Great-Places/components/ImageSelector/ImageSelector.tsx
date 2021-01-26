import React, {useState} from 'react';
import {Alert, View, Image, TouchableOpacity} from 'react-native';
import styles from './ImageSelector.styles';
import Text from "../../components/basicComponents/Text/Text";
import Button from "../../components/basicComponents/Button/Button";
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

const ImageSelector = (props: any) => {

    const [pickedImage, setPickedImage] = useState('')

    const verifyPermissions = async () => {
        const result = await Permissions.askAsync(Permissions.CAMERA, Permissions.MEDIA_LIBRARY);
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

    const openCameraHandler = async () => {
        const hasPermission = await verifyPermissions()
        if (!hasPermission) return;

        const image = await ImagePicker.launchCameraAsync({
            // allowsMultipleSelection: true,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 0.5,
        })
        if (!image.cancelled) {
            setPickedImage(image.uri);
            props.onImageTaken(image.uri);
        }
    }

    return (
        <View style={styles.screen}>
            <TouchableOpacity style={styles.imagePreview} onPress={openCameraHandler}>
                {!!pickedImage
                    ? <Image style={styles.image} source={{uri: pickedImage}}/>
                    : <Text>Open camera</Text>
                }
            </TouchableOpacity>
        </View>
    )
}

export default ImageSelector;
