import React from "react";
import {StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle} from "react-native";
import colors from '../../constants/colors';

const Button = (props: { onPress: (...args: any[]) => any, buttonStyle?: ViewStyle, textStyle?: TextStyle, children: React.ReactNode }) => {

    return (

        <TouchableOpacity onPress={props.onPress}>
            <View style={{...styles.view, ...props.buttonStyle}}>
                <Text style={{...styles.text, ...props.textStyle}}>
                    {props.children}
                </Text>
            </View>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    view: {
        backgroundColor: colors.primary,
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderWidth: 0,
        borderRadius: 5,
        margin: 2,
    },
    text: {
        color: 'darkslategray',
        fontFamily: 'openSans',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default Button;
