import {StyleSheet} from "react-native";

export default StyleSheet.create({
    screen: {
        flex: 1,
        margin: 10,
        height: 150,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    container: {
        flex:1,
        borderRadius: 10,
        overflow: "hidden",
    },
    title: {
        textAlign: "center",
        fontFamily: "openSansBold"
    }
})
