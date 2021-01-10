import React from "react";
import {Dimensions, StyleSheet, Text, View} from 'react-native';

import colors from '../../constants/colors'

const Header = (props: { title: string }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>
                {props.title}
            </Text>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: Dimensions.get('window').height > 600 ? 180 : 50,
        paddingTop: 60,
        paddingHorizontal: 20,
        paddingBottom: 30,
        backgroundColor: colors.primary,
        alignItems: "center",
        justifyContent: "center"
    },
    headerTitle: {
        color: '#355C7D',
        textAlign: "center",
        fontWeight: 'bold',
        fontSize: Dimensions.get('window').height > 600 ? 32: 20,
        fontFamily: 'openSansBold'
    }
})
