import React, {useState} from 'react'
import {Button, StyleSheet, Text, TextInput, View} from "react-native";

export default function GoalInput(props: { addNewGoal: (e: string) => void }) {

    const [inputGoal, setInputGoal] = useState("")
    const addNewGoal = () => {
        props.addNewGoal(inputGoal);
        setInputGoal("")
    }

    return (
        <View style={styles.inputView}>
            <TextInput style={styles.goalInput}
                       value={inputGoal}
                       onChangeText={goal => setInputGoal(goal)}
                       placeholder="Course goal"/>
            <Button
                onPress={addNewGoal}
                title="Add goal!"/>
        </View>
    )

}

const styles = StyleSheet.create({
    inputView: {
        flexDirection: 'row',
        width: "100%",
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    goalInput: {
        borderWidth: 1,
        borderColor: '#000',
        width: '70%',
        padding: 5,
        borderRadius: 10,
        backgroundColor: '#eee'
    },
});
