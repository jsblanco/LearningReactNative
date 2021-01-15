import React, {useState} from 'react';
import {View} from 'react-native';
import {DrawerActions} from "@react-navigation/native";
import {DrawerParamsList} from "../../navigation/types";
import {DrawerScreenProps} from "@react-navigation/drawer";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../../components/HeaderButton/HeaderButton";
import Text from "../../components/basicComponents/Text/Text";
import Switch from "../../components/basicComponents/Switch/Switch";
import styles from './MealFilters.styles';
import colours from "../../constants/colours";
import {Ionicons} from "@expo/vector-icons";
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faBreadSlice, faCheese, faLeaf, faSeedling} from '@fortawesome/free-solid-svg-icons'

type Props = DrawerScreenProps<DrawerParamsList, 'Filters'>;

const MealFiltersScreen = ({route, navigation}: Props) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item
                        title={'Menu'}
                        iconName={'ios-menu'}
                        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}
                    />
                </HeaderButtons>
            )
        });
    }, [navigation]);

    const [isGlutenFree, setIsGlutenFree] = useState(false)
    const [isLactoseFree, setIsLactoseFree] = useState(false)
    const [isVegetarian, setIsVegetarian] = useState(false)
    const [isVegan, setIsVegan] = useState(false)

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Search for specific meals</Text>
            <Switch label={'Gluten-free'} state={isGlutenFree} onChange={setIsGlutenFree}
                    icon={<FontAwesomeIcon icon={faBreadSlice} color={isGlutenFree ? colours.brightAccent : '#ccc'}/>}/>
            <Switch label={'Lactose-free'} state={isLactoseFree} onChange={setIsLactoseFree}
                    icon={<FontAwesomeIcon icon={faCheese} color={isLactoseFree ? colours.brightAccent : '#ccc'}/>}/>
            <Switch label={'Vegetarian'} state={isVegetarian} onChange={setIsVegetarian}
                    icon={<FontAwesomeIcon icon={faLeaf} color={isVegetarian ? colours.brightAccent : '#ccc'}/>}/>
            <Switch label={'Vegan'} state={isVegan} onChange={setIsVegan}
                    icon={<FontAwesomeIcon icon={faSeedling} color={isVegan ? colours.brightAccent : '#ccc'}/>}/>
        </View>
    )
}

export default MealFiltersScreen;
