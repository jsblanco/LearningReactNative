import {StyleSheet} from "react-native";

export default StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 250,
        width: '100%',
        backgroundColor: '#c9c9c9',
        borderRadius: 15,
        overflow: 'hidden',
        marginBottom: 15,
    },
    content: {
        flex: 1,
        width: '100%',
    },
    mealImage: {
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end',
    },
    mealRow: {
        flexDirection: "row",
        width: '100%',
    },
    mealHeader: {
        height: '87%',
    },
    titleContainer: {
        paddingVertical: 5,
        paddingHorizontal: 12,
        backgroundColor: 'rgba(0,0,0,0.4)',
    },
    mealTitle: {
        textAlign: "center",
        fontFamily: 'openSansBold',
        fontSize: 20,
        color: 'white',
    },
    mealDetails: {
        height: '15%',
        paddingHorizontal: 20,
        justifyContent: "space-between",
        alignItems: 'center'
    },
    detailsEntry: {
        textTransform: "capitalize"
    }
})
