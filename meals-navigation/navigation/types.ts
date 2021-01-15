import Category from "../models/Category";

export type DrawerParamsList = {
    Home: undefined,
    Filters: undefined
}

export type MealsStackParamList = {
    Categories: undefined;
    Meals: { categoryId: string };
    MealDetails: { mealId: string };
};

export type FavouritesStackParamList = {
    FavouritesList: undefined;
    MealDetails: { mealId: string };
};

export type FiltersStackParamList = {
    FiltersScreen: undefined;
};
