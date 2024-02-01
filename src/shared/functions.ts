import { fetchBreakfastList, fetchDinnerList, fetchLunchList } from "./api";
import { ListType, MealsArrayType } from "./types";

export const generateMeal = (ingredientsInFridge: string[]) => {
    let whatToBuy: string[] = [];

    const { dish: breakfastDish, whatToBuy: buyForBreakfast } = getDishForMeal('breakfast', ingredientsInFridge);
    const { dish: lunchDish, whatToBuy: buyForLunch } = getDishForMeal('lunch', ingredientsInFridge);
    const { dish: dinnerDish, whatToBuy: buyForDinner } = getDishForMeal('dinner', ingredientsInFridge);

    whatToBuy = Array.from(new Set([...buyForBreakfast, ...buyForLunch, ...buyForDinner]));
    
    return {
        menu: {
            breakfast: breakfastDish,
            lunch: lunchDish,
            dinner: dinnerDish,
        },
        whatToBuy
    }
}

const getCurrentMealArray = (meal: string): MealsArrayType[] => {
    switch (meal) {
        case 'breakfast': return fetchBreakfastList();
        case 'lunch': return fetchLunchList();
        case 'dinner': return fetchDinnerList();
        default: return fetchLunchList();
    }
}

const getDishForMeal = (meal: string, ingredientsInFridge: string[]) => {
    let maxPercent = 0;
    let dishWmaxPercent: string = '';
    let whatToBuy: string[] = [];

    const currentMealArray = getCurrentMealArray(meal);

    currentMealArray.forEach((dish: MealsArrayType) => {
        let inFridge = 0;
        const toBuy: string[] = [];
        dish.ingredients.forEach((dishIngredient: string) => {
            if (ingredientsInFridge.includes(dishIngredient)) {
                inFridge++;
            } else {
                toBuy.push(dishIngredient)
            }
        })
        const percent = inFridge / dish.ingredients.length;
        if (maxPercent < percent) {
            maxPercent = percent;
            dishWmaxPercent = dish.dish;
            whatToBuy = [...toBuy];
        }
    })

    if (!dishWmaxPercent) {
        return getRandomDish(meal, ingredientsInFridge);
    }

    return { dish: dishWmaxPercent, whatToBuy };
}

const getRandomDish = (meal: string, ingredientsInFridge: string[]) => {
    const whatToBuy: string[] = [];
    const currentMealArray = getCurrentMealArray(meal);

    const randomDishIndex = Math.floor(Math.random() * (currentMealArray.length));

    const randomDish = currentMealArray[randomDishIndex];

    randomDish.ingredients.forEach((dishIngredient: string) => {
        if (!ingredientsInFridge.includes(dishIngredient)) {
            whatToBuy.push(dishIngredient)
        }
    })

    return { dish: randomDish.dish, whatToBuy };
}

export const isRepeatingItem = (list: string[], newItem: string) => {
    const foundIndex = list.findIndex(item => item === newItem);
    return foundIndex > -1;
}

export const getObjectToStringArray = (list: ListType[]) => {
    const newList: string[] = [];
    list.forEach(item => newList.push(item.title));
    return newList;
}

export const getStringToObjectArray = (list: string[]) => {
    const newList: ListType[] = [];
    list.forEach(item => newList.push({ title: item }));
    return newList;
}