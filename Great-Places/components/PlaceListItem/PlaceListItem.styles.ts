import {StyleSheet} from "react-native";
import {Colors} from "react-native/Libraries/NewAppScreen";
import colours from "../../constants/colours";

export default StyleSheet.create({
    placeItem: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingVertical: 15,
        paddingHorizontal: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#ccc',
        borderColor: colours.primary,
        borderWidth: 1
    },
    infoContainer: {
        marginLeft: 25,
        width: 250,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    title: {
        color: 'black',
        fontSize: 18,
        marginBottom: 5
    },
    address: {
        color: '#666',
        fontSize: 16
    }
});
