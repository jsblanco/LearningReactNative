export type AutoCompleteType = "cc-csc" | "cc-exp" | "cc-exp-month" | "cc-exp-year" | "cc-number" | "email" | "name" | "password" | "postal-code" | "street-address" | "tel" | "username" | "off" | undefined;
export type KeyboardType =
    "default"
    | "email-address"
    | "numeric"
    | "phone-pad"
    | "number-pad"
    | "decimal-pad"
    | "visible-password"
    | "ascii-capable"
    | "numbers-and-punctuation"
    | "url"
    | "name-phone-pad"
    | "twitter"
    | "web-search"
    | undefined
export type AutoCapitalizeType = "sentences" | "none" | "words" | "characters" | undefined
export type FormControlType = {
    label: string,
    inputName: string,
    value: string,
    isValid: boolean,
    inputHandler: (key: string, value: string, isValid: boolean) => void,
    multiline?: boolean,
    keyboardType?: KeyboardType,
    autoCapitalize?: AutoCapitalizeType,
    autoCompleteType?: AutoCompleteType,
    autoCorrect?: boolean
    required?: boolean
    email?: boolean
    min?: number
    max?: number
    minLength?: number
    maxLength?: number
    secureTextEntry?: boolean
}
