import React from 'react';
import {View, StyleSheet, ViewStyle, Dimensions} from 'react-native';
import colours from "../../../constants/colours";

const Card = (props: { style?: ViewStyle, children: React.ReactNode }) => {

    return (
        <View style={{...styles.card, ...props.style}}>
            {props.children}
        </View>
    )
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        padding: Dimensions.get('window').height > 600 ? 20 : 15,
        shadowColor: 'black',
        shadowOffset: {
            width: 2,
            height: 4
        },
        shadowRadius: 15,
        shadowOpacity: 0.26,
        elevation: 25,
        backgroundColor: colours.background || 'white'
    }
});

export default Card;
