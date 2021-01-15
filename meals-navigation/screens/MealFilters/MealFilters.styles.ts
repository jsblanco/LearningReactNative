import {StyleSheet} from "react-native";

export default StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontFamily: 'openSansBold',
        fontSize: 22,
        marginTop: 20,
        marginHorizontal: 20,
        marginBottom: 15,
        textAlign: 'center'
    },
    filterPairing: {
        flexDirection: "row",
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '80%',
    },
    filterName: {
      fontFamily: 'openSans'
    },
})
