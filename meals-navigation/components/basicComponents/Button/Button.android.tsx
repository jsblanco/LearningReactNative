import React from "react";
import {
    Dimensions,
    StyleSheet,
    Text,
    TextStyle,
    TouchableOpacity,
    TouchableNativeFeedback,
    View,
    ViewStyle,
    Platform
} from "react-native";
import colours from '../../../constants/colours';

const Button = (props: { onPress: (...args: any[]) => any, buttonStyle?: ViewStyle, textStyle?: TextStyle, children: React.ReactNode }) => {

    let ButtonComponent: any = TouchableOpacity;

    if (Platform.Version >= 21) {
        ButtonComponent = TouchableNativeFeedback
    }

    return (
        <View style={styles.container}>
            <ButtonComponent onPress={props.onPress}>
                <View style={{...styles.view, ...props.buttonStyle}}>
                    <Text style={{...styles.text, ...props.textStyle}}>
                        {props.children}
                    </Text>
                </View>
            </ButtonComponent>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        borderRadius: 25,
        overflow: 'hidden',
    },
    view: {
        backgroundColor: colours.primary,
        paddingVertical: Dimensions.get('window').height > 600 ? 10 : 7,
        borderWidth: 0,
        borderRadius: 25,
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
