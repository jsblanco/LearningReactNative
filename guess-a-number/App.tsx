import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import Header from './pages/components/Header'
import StartGamePage from "./pages/StartGamePage";
import GamePage from "./pages/GamePage";
import GameOverPage from "./pages/GameOverPage";
import colors from "./constants/colors";


export default function App() {
    const [userNumber, setUserNumber] = useState(0)
    const [roundsUntilGuess, setRoundsUntilGuess] = useState(0);
    const [fontsLoaded] = useFonts({
        'openSans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'openSansBold': require('./assets/fonts/OpenSans-Bold.ttf'),
        // 'inconsolata': require('./assets/fonts/Inconsolata-ExtraCondensed.ttf'),
        // 'inconsolataBold': require('./assets/fonts/Inconsolata-ExpandedBlack.ttf')
    });

    const startGameHandler = (selectedNumber: number) => {
        setUserNumber(selectedNumber)
    }

    const gameStartHandler = (chosenNumber: number) => {
        setUserNumber(chosenNumber);
        setRoundsUntilGuess(0);
    }

    const gameEndHandler = (roundsPlayed: number) => {
        setRoundsUntilGuess(roundsPlayed)
    }

    const restartGame = () => {
        setUserNumber(0);
        setRoundsUntilGuess(0);
    }

    let content = <StartGamePage startGame={gameStartHandler}/>
    if (!!userNumber && roundsUntilGuess <= 0) {
        content = <GamePage userNumber={+userNumber} onGameEnd={gameEndHandler}/>
    } else if (roundsUntilGuess > 0) {
        content = <GameOverPage playedRounds={roundsUntilGuess} userNumber={userNumber} restart={restartGame}/>
    }


    if (!fontsLoaded) {
        return <AppLoading/>;
    } else {
        return (
            <View style={styles.screen}>
                <Header title="Uncle Jorge's Extraordinaire Number Guesser!"/>
                {content}
            </View>
        );
}
    }

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        color: 'white',
        backgroundColor: colors.background
    }
});
