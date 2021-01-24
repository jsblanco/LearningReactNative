import colours from "../constants/colours";
import {Platform} from "react-native";


const styles = {
    headerStyle: {
        elevation: 10,
        backgroundColor: Platform.OS !== 'android' ? colours.background : colours.primary,
    },
    headerTintColor: Platform.OS === 'android' ? colours.background : colours.primary,
    headerTitleStyle: {
        color: Platform.OS === 'android' ? colours.background : colours.primary,
        fontWeight: '900',
        fontFamily: 'openSansBold',
    },
    headerBackTitleStyle: {
        fontFamily: 'openSans'
    }
}

export default styles;
