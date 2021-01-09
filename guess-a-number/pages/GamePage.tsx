import React, {useState, useRef, useEffect} from "react";
import {View, StyleSheet, Button, Alert} from 'react-native';
import Text from './components/Text'
import Card from "./components/Card";
import NumberContainer from "./components/NumberContainer";
import DefaultStyles from '../constants/default-styles';


const generateRandomNumber = (min: number, max: number, exclude: number): number => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNumber = Math.floor(Math.random() * (max - min) + min);
    if (exclude === randomNumber) return generateRandomNumber(min, max, exclude);
    return randomNumber;
}

const GamePage = (props: any) => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomNumber(1, 100, +props.userNumber))
    const [roundsPlayed, setRoundsPlayed] = useState(0);
    const currentMin = useRef(1)
    const currentMax = useRef(99)
    const {userNumber, onGameEnd} = props;

    useEffect(() => {
        if (+currentGuess === +userNumber) {
            onGameEnd(roundsPlayed)
        }
    }, [currentGuess, userNumber, onGameEnd])

    const isUserNumberHigherThanGuess = (bool: boolean) => {
        if (currentGuess > userNumber && bool || currentGuess < userNumber && !bool) {
            return Alert.alert('Are you sure?', 'You may need to check your maths there mate...', [{
                text: 'Ooops',
                style: 'cancel'
            }])
        }
        bool
            ? currentMin.current = +currentGuess
            : currentMax.current = +currentGuess
        setCurrentGuess(generateRandomNumber(currentMin.current, currentMax.current, +currentGuess))
        setRoundsPlayed(roundsPlayed => 1 + roundsPlayed)
    }

    return (
        <View style={styles.screen}>
            <Text>Is this your number?</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.card}>
                <Text style={{textAlign: 'center', ...DefaultStyles.p}}>Your number is...</Text>
                <View style={styles.actionsRow}>
                    <View style={{flex: 1, paddingRight: 5}}>
                        <Button title={'Lower'} onPress={() => isUserNumberHigherThanGuess(false)}/>
                    </View>
                    <View style={{flex: 1, paddingLeft: 5}}>
                        <Button title={'Higher'} onPress={() => isUserNumberHigherThanGuess(true)}/>
                    </View>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center",
    },
    card: {
        marginTop: 30,
    },
    actionsRow: {
        width: 300,
        maxWidth: '80%',
        flexDirection: "row",
        justifyContent: 'space-evenly',
        marginTop: 10,
    }
})

export default GamePage;
