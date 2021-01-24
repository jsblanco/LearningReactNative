import React from 'react';
import {Platform, View} from 'react-native';
import Button from '../../components/basicComponents/Button/Button'
import styles from './PlacesListScreen.styles';
import Text from "../../components/basicComponents/Text/Text";
import {StackScreenProps} from "@react-navigation/stack";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../../components/basicComponents/HeaderButton/HeaderButton";


type Props = StackScreenProps<StackNavigation, 'List'>;

const PlacesListScreen = ({route, navigation}: Props) => {


    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item title={'Add place!'} iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
                          onPress={() => {
                              return navigation.navigate('AddNew');
                          }}/>
                </HeaderButtons>
            ),
        });
    }, [navigation]);


    return (
        <View style={styles.screen}>
            <Text>PlacesListScreen works!</Text>
            <Button onPress={() => navigation.navigate('Details')}>Go!</Button>
        </View>
    )
}

export default PlacesListScreen;
