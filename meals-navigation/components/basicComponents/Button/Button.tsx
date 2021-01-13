import React from "react";
import {
    Dimensions,
    StyleSheet,
    Text,
    TextStyle,
    TouchableOpacity,
    View,
    ViewStyle,
} from "react-native";
import colours from '../../../constants/colours';

const Button = (props: { onPress: (...args: any[]) => any, buttonStyle?: ViewStyle, textStyle?: TextStyle, children: React.ReactNode }) => {

    return (
        <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
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
        backgroundColor: colours.accent,
        paddingVertical: Dimensions.get('window').height > 600 ? 10 : 7,
        paddingHorizontal: 15,
        borderWidth: 0,
        borderRadius: 25,
        margin: 2,

    },
    text: {
        color: colours.text.regular,
        fontFamily: 'openSans',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default Button;
