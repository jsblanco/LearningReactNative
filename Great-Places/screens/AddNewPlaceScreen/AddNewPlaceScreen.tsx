import React from 'react';
import {View} from 'react-native';
import styles from './AddNewPlaceScreen.styles';
import Text from "../../components/basicComponents/Text/Text";
import FormControl from "../../components/basicComponents/FormControl/FormControl";
import Button from "../../components/basicComponents/Button/Button";

const AddNewPlaceScreen = (props: any) => {

    return (
        <View style={styles.screen}>
            <Text>AddNewPlaceScreen works!</Text>

            <FormControl label={'Name'} inputName={'xxx'} value={'xxx'} isValid={false} inputHandler={()=>{}}/>
            <Button onPress={() => {
            }}>Save place</Button>
        </View>
    )
}

export default AddNewPlaceScreen;
