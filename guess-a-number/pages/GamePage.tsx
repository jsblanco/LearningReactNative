import React, {useState, useRef, useEffect} from "react";
import {View, StyleSheet, Alert, ScrollView, FlatList, Dimensions} from 'react-native';
import {Entypo} from '@expo/vector-icons';
import * as ScreenOrientation from "expo-screen-orientation";

// @ts-ignore
import Button from "./components/Button";
import Card from "./components/Card";
import Text from './components/Text'
import NumberContainer from "./components/NumberContainer";
import Colors from '../constants/colors';
import DefaultStyles from '../constants/default-styles';


const generateRandomNumber = (min: number, max: number, exclude: number): number => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNumber = Math.floor(Math.random() * (max - min) + min);
    if (exclude === randomNumber) return generateRandomNumber(min, max, exclude);
    return randomNumber;
}

const renderListItem = (listLength: number, itemObject: { index: number, item: string }) =>
    < View style={styles.guessListItem}>
        < Text style={styles.guessText}> Round {listLength - itemObject.index}: </Text>
        <Text style={{...styles.guessText, fontFamily: 'openSansBold'}}>{itemObject.item}</Text>
    </View>


const GamePage = (props: any) => {

    // ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    // ScreenOrientation.addOrientationChangeListener()

    const initialGuess = generateRandomNumber(1, 100, +props.userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess)
    const [previousGuesses, setPreviousGuesses] = useState<string[]>([initialGuess.toString()]);
    const [detectedDeviceHeight, setDetectedDeviceHeight] = useState(Dimensions.get('window').height)
    const [detectedDeviceWidth, setDetectedDeviceWidth] = useState(Dimensions.get('window').width)
    const currentMin = useRef(1)
    const currentMax = useRef(99)
    const {userNumber, onGameEnd} = props;

    useEffect(() => {
        const updateLayout = () => {
            setDetectedDeviceHeight(Dimensions.get('window').height)
            setDetectedDeviceWidth(Dimensions.get('window').width)
        }
        Dimensions.addEventListener('change', updateLayout)

        return () => {
            Dimensions.removeEventListener('change', updateLayout)
        }
    })

    useEffect(() => {
        if (+currentGuess === +userNumber) {
            onGameEnd(previousGuesses.length)
        }
    }, [currentGuess, userNumber, onGameEnd])

    const isUserNumberHigherThanGuess = (bool: boolean) => {
        if (currentGuess > userNumber && bool || currentGuess < userNumber && !bool) {
            return Alert.alert('Are you sure?', 'You may need to check your maths there mate...', [{
                text: 'Ooops',
                style: 'cancel'
            }]);
        }
        bool
            ? currentMin.current = 1 + currentGuess
            : currentMax.current = +currentGuess;
        const nextGuess = generateRandomNumber(currentMin.current, currentMax.current, currentGuess);
        setCurrentGuess(nextGuess);
        setPreviousGuesses(previousGuesses => [nextGuess.toString(), ...previousGuesses]);
    }

    if (detectedDeviceHeight < 500) {
        return (
            <View style={styles.screen}>
                <View style={{...styles.actionsRow, alignItems: "center"}}>
                    <Button buttonStyle={{paddingHorizontal: 10}} onPress={() => isUserNumberHigherThanGuess(false)}>
                        <Entypo name='arrow-down' size={24} color={'darkslategray'}/>
                    </Button>
                    <NumberContainer>{currentGuess}</NumberContainer>
                    <Button buttonStyle={{paddingHorizontal: 10}} onPress={() => isUserNumberHigherThanGuess(true)}>
                        <Entypo name='arrow-up' size={24} color={'darkslategray'}/>
                    </Button>
                </View>
                <View>
                    <Text style={styles.guessTitle}>
                        Guess history:
                    </Text>
                </View>
                <FlatList
                    style={styles.pastGuesses}
                    contentContainerStyle={styles.guessList}
                    data={previousGuesses}
                    keyExtractor={(item) => item}
                    renderItem={renderListItem.bind(this, previousGuesses.length)}/>
            </View>
        )
    }

    return (
        <View style={styles.screen}>
            <Text>Is this your number?</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.card}>
                <Text style={{textAlign: 'center', ...DefaultStyles.p}}>Your number is...</Text>
                <View style={styles.actionsRow}>
                    <View style={{flex: 1, paddingRight: 5}}>
                        <Button onPress={() => isUserNumberHigherThanGuess(false)}>
                            <Entypo name='arrow-down' size={24} color={'darkslategray'}/> Lower
                        </Button>
                    </View>
                    <View style={{flex: 1, paddingLeft: 5,}}>
                        <Button onPress={() => isUserNumberHigherThanGuess(true)}>
                            Higher <Entypo name='arrow-up' size={24} color={'darkslategray'}/>
                        </Button>
                    </View>
                </View>
            </Card>
            <View>
                <Text style={styles.guessTitle}>
                    Guess history:
                </Text>
            </View>
            {/*<ScrollView style={{width: '100%'}} contentContainerStyle={styles.guessList}>*/}
            {/*    {previousGuesses.map((guess, index) => renderListItem((previousGuesses.length - index), guess))}*/}
            {/*</ScrollView>*/}
            <FlatList
                style={styles.pastGuesses}
                contentContainerStyle={styles.guessList}
                data={previousGuesses}
                keyExtractor={(item) => item}
                renderItem={renderListItem.bind(this, previousGuesses.length)}/>
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
    },
    pastGuesses: {
        width: Dimensions.get('window').width > 350 ? '60%' : '90%'
    },
    guessList: {
        flexGrow: 1,
        //alignItems: 'center',
        justifyContent: 'flex-end'
    },
    guessListItem: {
        marginBottom: 15,
        padding: 10,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: Colors.tertiary,
    },
    guessTitle: {
        paddingTop: 30,
        marginBottom: 10,
        fontFamily: 'openSansBold',
        fontSize: 22,
        textAlign: 'center',
    },
    guessText: {
        fontSize: 16,
        paddingBottom: 0,
        textAlign: 'center',
    },

})

export default GamePage;
