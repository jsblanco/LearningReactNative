import React from "react";
import {Text as ReactText, StyleSheet, TextStyle} from 'react-native';
import colours from "../../../constants/colours";

const H1 = (props: { style?: TextStyle, numberOfLines?: number, children: React.ReactNode }) => {

    return <ReactText {...props} style={{...styles.text, ...props.style}}>
        {props.children}
    </ReactText>
}

export default H1;

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        paddingBottom: 15,
        fontFamily: 'openSansBold',
        color: colours.text.regular
    },
})
