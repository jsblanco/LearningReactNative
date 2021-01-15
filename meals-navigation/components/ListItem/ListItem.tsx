import React from 'react';
import {View} from 'react-native';
import styles from './ListItem.styles';
import Text from "../basicComponents/Text/Text";

const ListItem = ({itemKey, value}: { value: string, itemKey: number }) => {

    return (
        <View style={styles.screen} key={itemKey}>
            <Text style={styles.text}>{value}</Text>
        </View>
    )
}


export default ListItem;
