import React from "react";
import {View, StyleSheet} from 'react-native';
import Text from './Text';
import Card from "./Card";
import Color from '../../constants/colors'

const NumberContainer = (props: { children: React.ReactNode }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.number}>{props.children}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: Color.tertiary,
        borderRadius: 50,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: "center",
    },
    number: {
        color: 'white',
        padding: 0,
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom:-3,
        marginLeft: -2
    }
})

export default NumberContainer;

