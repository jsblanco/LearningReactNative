import React, {useState} from 'react'
import {Button, StyleSheet, Text, TextInput, View, Modal} from "react-native";

export default function GoalInput(props: { viewGoalInput: boolean, cancelAddGoal: () => void, addNewGoal: (e: string) => void }) {

    const [inputGoal, setInputGoal] = useState("")
    const addNewGoal = () => {
        props.addNewGoal(inputGoal);
        setInputGoal("")
    }

    return (
        <Modal visible={props.viewGoalInput}>
            <View style={styles.inputView}>
                <Text style={styles.title}>Add a new goal</Text>
                <TextInput
                    style={styles.goalInput}
                    value={inputGoal}
                    onChangeText={goal => setInputGoal(goal)}
                    placeholder="Course goal"/>
                <View style={styles.actionsRow}>
                    <View style={{width: "40%"}}>
                        <Button
                            color="red"
                            onPress={props.cancelAddGoal}
                            title="   Cancel   "/>
                    </View>
                    <View style={{width: "40%"}}>
                        <Button
                            onPress={addNewGoal}
                            title="  Add goal  "/>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputView: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        marginTop: -100,
        marginBottom: 30,
        fontSize: 25,
        fontWeight: "bold",
    },
    goalInput: {
        borderWidth: 1,
        borderColor: '#424242',
        marginBottom: 50,
        paddingHorizontal: 20,
        width: '100%',
        padding: 5,
        borderRadius: 10,
        backgroundColor: '#eee'
    },
    actionsRow: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-evenly"
    }
});
