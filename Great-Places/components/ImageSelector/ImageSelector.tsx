import React, {useState} from 'react';
import {Alert, View, Image} from 'react-native';
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
        console.log('//////////////////////////////////')
        setPickedImage(image.uri)
        console.log(pickedImage)

    }

    return (
        <View style={styles.screen}>
            <View style={styles.imagePreview}>
                {!!pickedImage
                    ? <Image style={styles.image} source={{uri: pickedImage}}/>
                    : <Text>Please pick an image</Text>
                }
            </View>
            <Button onPress={openCameraHandler}>
                Open camera
            </Button>
        </View>
    )
}

export default ImageSelector;
