import * as constants from '../constants/mealsConstants';

export const toggleFavourite = (mealId: string) => {
    return {
        type: constants.TOGGLE_FAVOURITE,
        payload: {
            mealId
        }
    }
}

export const setFilters = (payload: { glutenFree: boolean, lactoseFree: boolean, vegetarian: boolean, vegan: boolean }) => {
    return {
        type: constants.SET_FILTERS,
        payload: payload
    }
}
