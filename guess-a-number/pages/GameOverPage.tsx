import React from "react";
import {View, StyleSheet, Image, ScrollView, Dimensions} from 'react-native';
// @ts-ignore
import Button from "./components/Button";
import Card from "./components/Card";
import Text from './components/Text'
import NumberContainer from "./components/NumberContainer";
import colors from "../constants/colors";
import DefaultStyles from "../constants/default-styles";

const GameOverPage = (props: any) => {


    return (
        <ScrollView>
            <View style={styles.screen}>
                <Text style={DefaultStyles.header}>Game over!</Text>
                <View style={styles.imageView}>
                    <Image
                        style={styles.image}
                        resizeMode='cover'
                        fadeDuration={1000}
                        //source={{uri: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_495142964_198701.jpg'}}
                        source={require('../assets/success.png')}
                    />
                </View>
                <Card style={styles.card}>
                    <Text style={styles.cardTitle}>Your number was:</Text>
                    <NumberContainer>
                        {props.userNumber}
                    </NumberContainer>
                    <Text>
                        <Text>It took me </Text>
                        <Text style={{fontWeight: 'bold', color: colors.secondary}}>{props.playedRounds} tries</Text>
                        <Text> to guess your number!</Text>
                    </Text>
                    <View style={{width: "100%", marginTop: 20, alignItems: "center"}}>
                        <Button buttonStyle={{width: Dimensions.get('window').width * 0.9, maxWidth: 200}}
                                       onPress={props.restart}>
                            Play again!
                        </Button>
                    </View>
                </Card>
            </View>
        </ScrollView>
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
        width: '100%',
        marginVertical: Dimensions.get('window').height / 20,
        alignItems: 'center'
    },
    cardTitle: {
        textAlign: "center"
    },
    imageView: {
        width: Dimensions.get('window').width * 0.5,
        height: Dimensions.get('window').width * 0.5,
        borderRadius: Dimensions.get('window').width * 0.5 / 2,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%',
    }
})

export default GameOverPage;
