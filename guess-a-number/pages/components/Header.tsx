import React, {useEffect, useRef, useState} from "react";
import {Dimensions, StyleSheet, Text, View, Platform} from 'react-native';

import colors from '../../constants/colors'

const Header = (props: { title: string }) => {
    const [detectedDeviceHeight, setDetectedDeviceHeight] = useState(Dimensions.get('window').height)
    const [detectedDeviceWidth, setDetectedDeviceWidth] = useState(Dimensions.get('window').width)

    useEffect(() => {
        const updateLayout = () => {
            setDetectedDeviceHeight(Dimensions.get('window').height)
            setDetectedDeviceWidth(Dimensions.get('window').width)
        }
        Dimensions.addEventListener('change', updateLayout)

        return () => {
            Dimensions.removeEventListener('change', updateLayout)
        }
    })

    return (
        <View style={{
            ...styles.header, ...Platform.select({ios: styles.headerIOS, android: styles.headerAndroid}),
            height: (detectedDeviceHeight > 600 && detectedDeviceWidth < 500) ? 180 : 50,
        }}>
            <Text style={{...styles.headerTitle, fontSize: detectedDeviceHeight > 600 ? 32 : 20,}}>
                {/*{Platform.select({ios: 'iPhone', android: 'Android'})} */}
                {props.title}
            </Text>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    header: {
        width: '100%',
        paddingTop: 60,
        paddingHorizontal: 20,
        paddingBottom: 30,
        alignItems: "center",
        justifyContent: "center",
    },
    headerIOS: {
        borderBottomWidth: 1,
        backgroundColor: colors.background,
        borderBottomColor: '#aaa',
    },
    headerAndroid: {
        backgroundColor: colors.primary,
    },
    headerTitle: {
        color: Platform.OS === 'ios' ? colors.primary : '#355C7D',
        textAlign: "center",
        fontWeight: 'bold',
        fontFamily: 'openSansBold'
    }
})
