import React, {useCallback, useReducer, useState} from 'react';
import {Alert, View} from 'react-native';
import styles from './AddNewPlaceScreen.styles';
import Text from "../../components/basicComponents/Text/Text";
import FormControl from "../../components/basicComponents/FormControl/FormControl";
import Button from "../../components/basicComponents/Button/Button";
import {useDispatch} from "react-redux";
import {StackScreenProps} from "@react-navigation/stack";
import {addNewPlace} from "../../store/actions/places.actions";
import H1 from "../../components/basicComponents/H1/H1";

type Props = StackScreenProps<StackNavigation, 'AddNew'>;
type ReducerStateType = {
    inputValues: {
        title: string,
    },
    inputValidities: {
        title: boolean,
    },
    formIsValid: boolean
}

type ActionsType = {
    type: string,
    value: string,
    isValid: boolean,
    input: string,
}

const FORM_UPDATE = 'FORM_UPDATE';
const formReducer = (state: ReducerStateType, a: ActionsType) => {
    let updatedValues, updatedValidities;
    let updatedFormIsValid = true;
    if (a.type === FORM_UPDATE) {
        updatedValues = {
            ...state.inputValues,
            [a.input]: a.value,
        }
        updatedValidities = {
            ...state.inputValidities,
            [a.input]: a.isValid,
        }
        for (let key in updatedValidities) {
            // @ts-ignore
            updatedFormIsValid = updatedFormIsValid && updatedValidities[key]
        }
        return {
            ...state,
            inputValues: updatedValues,
            inputValidities: updatedValidities,
            formIsValid: updatedFormIsValid
        };
    }
    return {...state}
}

const AddNewPlaceScreen = ({route, navigation}: Props) => {
    const dispatch = useDispatch()
    const [formState, formDispatch] = useReducer(formReducer, {
        inputValues: {
            title: '',
        },
        inputValidities: {
            title: false,
        },
        formIsValid: false,
    })
    const [formWasSubmitted, setFormWasSubmitted] = useState(false)

    const inputHandler = useCallback((key: string, value: string, isValid: boolean) => {
        console.log({key, value, isValid})
        formDispatch({
            type: FORM_UPDATE,
            value: value,
            isValid: isValid,
            input: key
        })
    }, [formDispatch])


    const saveChanges = useCallback(() => {
        setFormWasSubmitted(true)
        if (!formState.formIsValid) {
            Alert.alert('Missing inputs', 'Please input all product data, then press Submit', [{text: 'Ok'}])
            return
        }
        dispatch(addNewPlace.request(formState.inputValues.title))
        navigation.navigate('List')
    }, [dispatch, formState, formDispatch])

    return (
        <View style={styles.screen}>
            <H1>Add a new place</H1>
            <FormControl
                label={'Title'}
                inputName={"title"}
                value={formState.inputValues.title}
                isValid={formState.inputValidities.title}
                formWasSubmitted={formWasSubmitted}
                inputHandler={inputHandler}
                minLength={5}
                required
            />
            <View style={styles.actionRow}>
                <Button onPress={saveChanges}>
                    Save place
                </Button>
            </View>
        </View>
    )
}

export default AddNewPlaceScreen;
