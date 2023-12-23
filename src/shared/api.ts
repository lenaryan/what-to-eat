import { defaultShoppingList, ingredientsList } from "./constants";
import { DayMenu } from "./types";

export const getIngredientsList = () => {
    const ingredients = localStorage.getItem('ingredients');
    return ingredients ? ingredients.split(',') : ingredientsList;
};

export const setIngredientsList = (ingredientsList: string[]) => {
    localStorage.setItem('ingredients', ingredientsList.join(','));
};

export const getMenuFromBase = () => {
    const menu = localStorage.getItem('menu');
    return menu ? menu.split(',') : [];
};

// TODO: stringify json before adding to LocalStorage???
export const setMenuToBase = (menu: DayMenu[]) => {
    localStorage.setItem('menu', menu.join(','));
};

export const getShoppingListFromBase = () => {
    const shoppingList = localStorage.getItem('shopping-list');
    return shoppingList ? shoppingList.split(',') : defaultShoppingList;
};

export const setShoppingListToBase = (shoppingList: string[]) => {
    localStorage.setItem('shopping-list', shoppingList.join(','));
};