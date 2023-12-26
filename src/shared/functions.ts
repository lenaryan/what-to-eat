import { getIngredientsFromBase } from "./api";
import { dishes } from "./constants"
import { MealsArrayType } from "./types";

export const generateMeal = () => {
    // собрать все нужные ингредиенты в массив
    // пройтись по каждому блюду в массиве приёма пищи
    // чем больше ингредиентов из состава есть дома, тем больше вероятность, что будем есть это блюдо
    // переменная, считающая максимальный процент совпавших ингредиентов
    // переменная, запоминающая блюдо с максимальным числом совпавших ингредиентов
    // массив, запоминающий, что надо докупить
    let whatToBuy: string[] = [];
    const ingredientsInFridge = getIngredientsFromBase();

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

const getDishForMeal = (meal: string, ingredientsInFridge: string[]) => {
    const key = meal + "List";
    let maxPercent = 0;
    let dishWmaxPercent: string = '';
    let whatToBuy: string[] = [];

    dishes[key].forEach((dish: MealsArrayType) => {
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

    return { dish: dishWmaxPercent, whatToBuy };
}