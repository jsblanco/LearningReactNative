import {StyleSheet} from "react-native";

export default StyleSheet.create({
    screen: {
        flex: 1,
        margin: 10,
        height: 150,
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
        overflow: "hidden",
    },
    container: {
        flex:1,
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        alignItems: "flex-end",
        justifyContent: "flex-end",
    },
    title: {
        fontFamily: "openSansBold",
        textAlign: "right",
        fontSize: 18,
    }
})
