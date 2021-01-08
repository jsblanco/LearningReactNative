import React from "react";
import {View, StyleSheet, Button} from 'react-native';
import Text from './components/Text'
import NumberContainer from "./components/NumberContainer";
import Card from "./components/Card";
import colors from "../constants/colors";

const GameOverPage = (props: any) => {


    return (
        <View style={styles.screen}>
            <Text>Game over!</Text>
            <Card style={styles.card}>
                <Text style={styles.cardTitle}>Your number was:</Text>
                <NumberContainer>
                    {props.userNumber}
                </NumberContainer>
                <Text>It took us {props.playedRounds} tries to guess your number!</Text>

                <View style={{width: "100%", marginTop: 20}}>
                    <Button title={"Play again!"} onPress={props.restart}/>
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
        backgroundColor: colors.background,
    },
    card: {
        marginTop: 80,
        alignItems: 'center'
    },
    cardTitle: {
        textAlign: "center"
    },
})

export default GameOverPage;
