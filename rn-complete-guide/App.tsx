import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, FlatList} from 'react-native';
import GoalEntry from './components/GoalEntry/GoalEntry'
import GoalInput from "./components/GoalInput/GoalInput";

export default function App() {

    const [goalsList, setGoalsList] = useState<{ id: string, value: string }[]>([]);
    const [viewGoalInput, setViewGoalInput] = useState<boolean>(false)

    const addNewGoal = (inputGoal: string) => {
        !!inputGoal && setGoalsList(goalsList => [{
                id: new Date().getTime() + "",
                value: inputGoal
            }, ...goalsList]);
        setViewGoalInput(!viewGoalInput)
    }

    const deleteGoal = (goalId: string) => {
        console.log('Deleting: '+goalId)
        setGoalsList(goalsList =>
            goalsList.filter(goal => goal.id != goalId))
    }


    return (
        <View style={styles.screen}>
            <View style={styles.headerView}>
                <Text style={styles.title}>Goal annotator!</Text>
                <Button title={"Add a new goal"} onPress={()=>setViewGoalInput(!viewGoalInput)}/>
                <GoalInput viewGoalInput={viewGoalInput} cancelAddGoal={()=>setViewGoalInput(false)} addNewGoal={addNewGoal}/>
            </View>
            <FlatList
                style={styles.goalsList}
                data={goalsList}
                keyExtractor={(item, index) => item.id}
                renderItem={itemData => <GoalEntry
                    goal={itemData.item.value}
                    onDelete={() => deleteGoal(itemData.item.id)}
                    // onDelete={deleteGoal.bind(this, itemData.item.id)}
                />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        height: '100%',
    },
    headerView: {
        paddingTop: 100,
        paddingHorizontal: 5,
        backgroundColor: '#eeeee0',
        alignItems: 'center',
        paddingBottom: 20,
        borderBottomWidth: 1,
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        marginBottom: 10
    },
    goalsList: {
        backgroundColor: '#eeeef9',
        paddingHorizontal: 30,
    },
})
