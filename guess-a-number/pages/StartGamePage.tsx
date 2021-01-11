import React, {useState, useEffect} from "react";
import {
    StyleSheet,
    View,
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
    Dimensions,
    ScrollView,
    KeyboardAvoidingView,
} from 'react-native';
// @ts-ignore
import Button from './components/Button';
import Card from "./components/Card";
import Input from "./components/Input";
import Text from "./components/Text";
import NumberContainer from "./components/NumberContainer";

import colors from '../constants/colors'

const StartGamePage = (props: { startGame: (e: number) => void }) => {

    const [enteredValue, setEnteredValue] = useState('');
    const [userConfirmed, setUserConfirmed] = useState(false);
    const [selectedValue, setSelectedValue] = useState(0);
    const [buttonWidth, setButtonWidth] = useState(Dimensions.get('window').width / 3)

    useEffect(() => {
        const updateLayout = () => setButtonWidth(Dimensions.get('window').width / 3)
        Dimensions.addEventListener('change', updateLayout)

        return () => {
            Dimensions.removeEventListener('change', updateLayout)
        }
    })

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
            <Button buttonStyle={{...styles.button, width: buttonWidth}}
                           onPress={() => props.startGame(selectedValue)}> Start playing now! </Button>
        </Card>)

    return (
        <ScrollView>
            <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30}>
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
                                <View style={{...styles.button, width: buttonWidth}}>
                                    <Button
                                        onPress={resetEnteredValue}
                                        buttonStyle={{backgroundColor: colors.secondary}}
                                    >
                                        Reset
                                    </Button>
                                </View>
                                <View style={{...styles.button, width: buttonWidth}}>
                                    <Button
                                        onPress={confirmEnteredValue}
                                        buttonStyle={{backgroundColor: colors.tertiary}}
                                    >
                                        Select
                                    </Button>
                                </View>
                            </View>
                        </Card>
                        {confirmedOutput}
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ScrollView>
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
        fontSize: Dimensions.get('window').height > 600 ? 24 : 18,
        marginVertical: Dimensions.get('window').height > 600 ? 20 : 10,
        fontFamily: 'openSansBold'
    },
    inputRow: {
        width: '85%',
        maxWidth: '95%',
        minWidth: 300,
        alignItems: 'center',
    },
    actionsRow: {
        width: '100%',
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 10,
    },
    button: {
        paddingRight: 5
    },
    confirmationCard: {
        marginTop: Dimensions.get('window').height > 600 ? 40 : 30,
        alignItems: 'center'
    },
    confirmationCardTitle: {
        textAlign: "center"
    },
})
