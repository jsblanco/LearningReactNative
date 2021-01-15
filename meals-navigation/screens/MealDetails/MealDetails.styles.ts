import {Dimensions, StyleSheet} from "react-native";

export default StyleSheet.create({
    screen: {
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: Dimensions.get('window').height * 0.4,
    },
    quickDetails: {
        flexDirection: "row",
        paddingTop: 10,
        paddingBottom: 5,
        paddingHorizontal: 20,
        justifyContent: "space-between",
        alignItems: 'center',
        backgroundColor: '#ddd',
    },
    detailsEntry: {
        textTransform: "capitalize"
    },
    title: {
        width: '100%',
        paddingTop: 15,
        paddingBottom: 10,
        textAlign: "center",
        fontFamily: 'openSansBold',
        borderBottomWidth: 1,
        borderColor: '#aaa',
    },
    listEntry: {
        paddingHorizontal: 20,
    }
})
