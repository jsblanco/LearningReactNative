import React from "react";
import {StyleSheet, Text, View, TouchableOpacity} from "react-native";

export default function GoalEntry(props: { goal: string, onDelete: ()=>void }) {

    return (
        <TouchableOpacity onLongPress={props.onDelete}>
            <View style={styles.goal}>
                <Text>
                    {props.goal}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    goal: {
        padding: 15,
        marginTop: 5,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: 'black',
        backgroundColor: 'white',
    }
})
