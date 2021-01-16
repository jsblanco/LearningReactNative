import React from 'react';
import {View} from 'react-native';
import styles from './ListItem.styles';
import Text from "../basicComponents/Text/Text";

const ListItem = ({value}: { value: string }) => {

    return (
        <View style={styles.screen}>
            <Text style={styles.text}>{value}</Text>
        </View>
    )
}


export default ListItem;
