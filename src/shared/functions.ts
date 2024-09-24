import { fetchIngredients } from "./api";
import { breakfastList, dinnerList, lunchList } from "./constants";
import { IngredientsType, MealsArrayType } from "./types";

// TODO: add 'level of hard' field for lazy days?

export const generateMeal = () => {
    let whatToBuy: string[] = [];
    const ingredientsInFridge = fetchIngredients(); // TODO: get ingredients from state

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
        case 'breakfast': return breakfastList;
        case 'lunch': return lunchList;
        case 'dinner': return dinnerList;
        default: return lunchList;
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

export const isRepeatingItem = (list: IngredientsType[], newItem: string) => {
    const foundIndex = list.findIndex(item => item.title.toLowerCase() === newItem.toLowerCase());
    return foundIndex > -1;
}

export const capitalizeFirstLetter = (text: string) => {
    return text.charAt(0).toUpperCase() + text.toLowerCase().slice(1);
}