import React, {useEffect, useReducer} from 'react';
import {TextInput, View} from 'react-native';
import styles from './FormControl.styles';
import Text from "../Text/Text";
import {FormControlType} from "./FormControlTypes";


const INPUT_CHANGE = 'INPUT_CHANGE';
const LOST_FOCUS = 'LOST_FOCUS';
const inputReducer = (state: any, {type, value, isValid}: { type: string, value?: string, isValid?: boolean }) => {
    switch (type) {
        case INPUT_CHANGE:
            return {
                ...state,
                value: value,
                isValid: isValid,
            }
        case LOST_FOCUS:
            return {
                ...state,
                isTouched: true
            }
        default:
            return {...state};
    }
}

const FormControl = ({
                         label,
                         value,
                         inputName,
                         isValid,
                         inputHandler,
                         min,
                         max,
                         minLength,
                         maxLength,
                         email,
                         required,
                         multiline = false,
                         autoCorrect = true,
                         secureTextEntry = false,
                         keyboardType = 'default',
                         autoCompleteType = 'off',
                         autoCapitalize = 'sentences',
                     }: FormControlType) => {

    const [state, dispatch] = useReducer(inputReducer, {
        value: value ? value : '',
        isValid: isValid,
        isTouched: false
    });

    const stringChangeHandler = (input: string) => {

        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const numberRegex = /^-?\d*(\.\d+)?$/

        let isValid = true;
        if ((required && input.trim().length === 0)
            || (email && !emailRegex.test(input.toLowerCase()))
            || (typeof min === "number" && +input < min)
            || (typeof max === "number" && +input > max)
            || (typeof minLength === "number" && input.length < minLength)
            || (typeof maxLength === "number" && input.length > maxLength)
            || ((keyboardType === "numeric" || keyboardType === "number-pad" || keyboardType === "decimal-pad") && !numberRegex.test(input))) {
            isValid = false;
        }

        dispatch({type: INPUT_CHANGE, value: input, isValid: isValid})
    }

    const lostFocusHandler = () => {
        dispatch({
            type: LOST_FOCUS,
        })
    }

    useEffect(() => {
        !!state.isTouched && inputHandler(inputName, state.value, state.isValid)
    }, [inputHandler, state])

    // @ts-ignore
    return (
        <View style={styles.formControl}>
            <Text style={styles.label}>{label.toUpperCase().slice(0, 1) + label.toLowerCase().slice(1)}:</Text>
            <TextInput
                value={state.value}
                style={styles.input}
                multiline={multiline}
                autoCorrect={autoCorrect}
                keyboardType={keyboardType}
                autoCapitalize={autoCapitalize}
                onChangeText={stringChangeHandler}
                autoCompleteType={autoCompleteType}
                onBlur={lostFocusHandler}
                secureTextEntry={secureTextEntry}
            />
            {state.isTouched && !state.isValid &&
            <Text style={styles.warning}>Please input a valid {label.toLowerCase()}</Text>}
        </View>
    )
}

export default FormControl;
