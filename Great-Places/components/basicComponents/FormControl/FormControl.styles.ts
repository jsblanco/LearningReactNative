import {StyleSheet} from "react-native";

export default StyleSheet.create({
    screen: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    formControl: {
        width: '100%',
    },
    label: {
        marginVertical: 8,
        fontFamily: 'openSansBold',
    },
    input: {
        padding: 5,
        width: '100%',
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    warning: {
        color: 'tomato',
        fontFamily: 'openSans',
        textAlign: 'center',
    }
})
