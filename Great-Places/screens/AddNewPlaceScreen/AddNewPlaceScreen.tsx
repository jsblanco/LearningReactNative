import React, {useCallback, useEffect, useReducer, useState} from 'react';
import {Alert, ScrollView, View} from 'react-native';
import styles from './AddNewPlaceScreen.styles';
import {useDispatch} from "react-redux";
import {StackScreenProps} from "@react-navigation/stack";
import {addNewPlace} from "../../store/actions/places.actions";
import H1 from "../../components/basicComponents/H1/H1";
import ImageSelector from "../../components/ImageSelector/ImageSelector";
import Button from "../../components/basicComponents/Button/Button";
import FormControl from "../../components/basicComponents/FormControl/FormControl";
import LocationPicker, {LocationType} from "../../components/LocationPicker/LocationPicker";

type Props = StackScreenProps<StackNavigation, 'AddNew'>;
const AddNewPlaceScreen = ({route, navigation}: Props) => {
    const dispatch = useDispatch()
    const [formState, formDispatch] = useReducer(formReducer, {
        inputValues: {title: '', imageUri: '', location: undefined},
        inputValidities: {title: false, imageUri: false, location: false},
        formIsValid: false,
    })
    const [formWasSubmitted, setFormWasSubmitted] = useState(false)

    const inputHandler = useCallback((key: string, value: string, isValid: boolean) => {
        formDispatch({type: FORM_UPDATE, value: value, isValid: isValid, input: key})
    }, [formDispatch])

    const locationPickedHandler = useCallback((pickedLocation: LocationType) => {
        formDispatch({type: FORM_UPDATE, value: pickedLocation, isValid: true, input: 'location'})
    }, [])

    // useEffect(()=>console.log(formState), [formState])

    const saveChanges = useCallback(() => {
        setFormWasSubmitted(true)
        if (!formState.formIsValid) {
            Alert.alert('Missing inputs', 'Please input all product data, then press Submit', [{text: 'Ok'}])
            return
        }
        dispatch(addNewPlace.request(formState.inputValues))
        navigation.navigate('List')
    }, [dispatch, formState, formDispatch])

    return (
        <ScrollView>
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
                <ImageSelector onImageTaken={((imageUri: string) => inputHandler('imageUri', imageUri, true))}/>
                <LocationPicker route={route} onLocationPicked={locationPickedHandler}/>
                <View style={styles.actionRow}>
                    <Button onPress={saveChanges}>
                        Save place
                    </Button>
                </View>
            </View>
        </ScrollView>
    )
}

export default AddNewPlaceScreen;


type ReducerStateType = {
    inputValues: {
        title: string,
        imageUri: string,
        location?: LocationType,
    },
    inputValidities: {
        title: boolean,
        imageUri: boolean,
        location: boolean,
    },
    formIsValid: boolean
}

type ActionsType = {
    type: string,
    value: string | LocationType,
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
