import Meal from "../../models/Meal";
import {CATEGORIES, MEALS} from "../../data/dummyData";
import * as constants from '../constants/mealsConstants'
import Category from "../../models/Category";

type StateType = {
    meals: Meal[],
    filteredMeals: Meal[]
    favouriteMeals: Meal[],
    categories: Category[],
}

const initialState: StateType = {
    meals: MEALS,
    favouriteMeals: [],
    filteredMeals: MEALS,
    categories: CATEGORIES,
}

const mealsReducer = (state: StateType = initialState, {type, payload}: { type: string, payload: any }) => {
    switch (type) {
        case constants.TOGGLE_FAVOURITE:
            const mealIndex = state.meals.findIndex(meal => meal.id === payload.mealId);
            if (mealIndex < 0) return {...state};
            const favIndex: number = state.favouriteMeals.findIndex(meal => meal.id === payload.mealId)
            if (favIndex >= 0) {
                const updatedFavourites = [...state.favouriteMeals];
                updatedFavourites.splice(favIndex, 1)
                return {...state, favouriteMeals: updatedFavourites}
            }
            return {...state, favouriteMeals: [...state.favouriteMeals, state.meals[mealIndex]]};
        case constants.SET_FILTERS:
            const filteredMeals: Meal[] = state.meals.filter(meal => {
                return !(payload.lactoseFree && !meal.isLactoseFree
                    || payload.glutenFree && !meal.isGlutenFree
                    || payload.vegetarian && !meal.isVegetarian
                    || payload.vegan && !meal.isVegan);
            })
            return {...state, filteredMeals: filteredMeals}
        default:
            return {...state};
    }
}

export default mealsReducer;
