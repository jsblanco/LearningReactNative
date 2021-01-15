import React from "react";
import {Text as ReactText, StyleSheet, TextStyle} from 'react-native';
import colours from "../../../constants/colours";

const Text = (props: { style?: TextStyle, numberOfLines?: number, children: React.ReactNode }) => {

    return <ReactText {...props} style={{...styles.text, ...props.style}}>
        {props.children}
    </ReactText>
}

export default Text;

const styles = StyleSheet.create({
    text: {
        paddingBottom: 5,
        fontFamily: 'openSans',
        color: colours.text.regular
    },
})
