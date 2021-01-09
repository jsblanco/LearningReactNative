import React from "react";
import {StyleSheet, Text, View} from 'react-native';

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
        height: 170,
        paddingTop: 80,
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
        fontSize: 24,
        fontFamily: 'openSansBold'
    }
})
