import React, {useState} from "react";
import {StyleSheet, View, Button, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';
import Card from "./components/Card";
import Input from "./components/Input";
import Text from "./components/Text";
import NumberContainer from "./components/NumberContainer";

import colors from '../constants/colors'

const StartGamePage = (props: { startGame: (e: number) => void }) => {

    const [enteredValue, setEnteredValue] = useState('');
    const [userConfirmed, setUserConfirmed] = useState(false);
    const [selectedValue, setSelectedValue] = useState(0);

    const numberInputHandler = (inputValue: string) => {
        setEnteredValue(inputValue.replace(/[^0-9]/g, ''))
    }
    const resetEnteredValue = () => {
        setUserConfirmed(false);
        setSelectedValue(0);
        setEnteredValue('')
    };
    const confirmEnteredValue = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            setUserConfirmed(false);
            Alert.alert(
                'Invalid number',
                'Please choose a valid number between 1 and 99.',
                [{text: 'Return', style: 'destructive', onPress: resetEnteredValue}]);
            return
        }
        setUserConfirmed(true);
        setSelectedValue(chosenNumber);
        setEnteredValue('');
        Keyboard.dismiss();
    };

    let confirmedOutput;
    if (userConfirmed) confirmedOutput = (
        <Card style={styles.confirmationCard}>
            <Text style={styles.confirmationCardTitle}>You selected:</Text>
            <NumberContainer>{selectedValue}</NumberContainer>
            <Button title={"Start playing now!"} onPress={() => props.startGame(selectedValue)}/>
        </Card>)

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a new game!</Text>
                <Card style={styles.inputRow}>
                    <Text>Select a number: </Text>
                    <Input
                        autoCorrect={false}
                        autoCapitalize='none'
                        keyboardType="number-pad"
                        maxLength={2}
                        onChangeText={numberInputHandler}
                        value={enteredValue}
                    />
                    <View style={styles.actionsRow}>
                        <View style={{flex: 1, paddingRight: 5}}>
                            <Button
                                onPress={resetEnteredValue}
                                title="Reset"
                                color={colors.secondary}
                            />
                        </View>
                        <View style={{flex: 1, paddingLeft: 5}}>
                            <Button
                                onPress={confirmEnteredValue}
                                title="Start game"
                                color={colors.primary}
                            />
                        </View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    )
}

export default StartGamePage;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center",
        backgroundColor: colors.background,
    },
    title: {
        color: 'white',
        fontSize: 24,
        marginVertical: 20,
        fontFamily: 'openSansBold'
    },
    inputRow: {
        width: 350,
        maxWidth: '85%',
        alignItems: 'center',
    },
    actionsRow: {
        width: '100%',
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 10,
    },
    confirmationCard: {
        marginTop: 80,
        alignItems: 'center'
    },
    confirmationCardTitle: {
        textAlign: "center"
    },
})
