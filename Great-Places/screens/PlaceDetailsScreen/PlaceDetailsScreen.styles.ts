import {Dimensions, StyleSheet} from "react-native";

export default StyleSheet.create({
    screen: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        paddingTop: 30,
        paddingBottom: 10,
        paddingHorizontal: 20,
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
    },
    address: {
        paddingTop: 10,
        paddingBottom: 30,
        paddingHorizontal: 20,
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height *0.5,
    }
})
