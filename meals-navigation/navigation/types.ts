import Category from "../models/Category";

export type StackParamList = {
    Categories: undefined;
    Meals: { categoryId: string };
    MealDetails: { mealId: string };
};

export type FavouritesStackParamList = {
    FavouritesList: undefined;
    MealDetails: { mealId: string };
};
