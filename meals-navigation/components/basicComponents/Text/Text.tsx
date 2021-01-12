import React from "react";
import {Text as ReactText, StyleSheet, TextStyle} from 'react-native';

const Text = (props: { style?: TextStyle, children: React.ReactNode  }) => {

    return <ReactText {...props} style={{...styles.text, ...props.style}}>
        {props.children}
    </ReactText>
}

export default Text;

const styles = StyleSheet.create({
    text: {
        paddingBottom: 5,
        fontFamily: 'openSans'
    },
})
