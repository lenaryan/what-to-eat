import { createClient } from "@supabase/supabase-js";
import { SUPABASE_KEY, SUPABASE_URL, defaultShoppingList, ingredientsList } from "./constants";
import { DayMenu } from "./types";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export const getIngredientsFromBase = () => {
    const ingredients = localStorage.getItem('ingredients');
    return ingredients ? ingredients.split(';') : ingredientsList;
};

export const setIngredientsToBase = (ingredientsList: string[]) => {
    localStorage.setItem('ingredients', ingredientsList.join(';'));
};

export const getMenuFromBase = () => {
    const menu = localStorage.getItem('menu');
    if (!menu) return [];
    const menuArray = menu.split(';');
    return menuArray.map(item => JSON.parse(item));
};

export const setMenuToBase = (menu: DayMenu[]) => {
    const stringifiedArray = menu.map(item => JSON.stringify(item));
    localStorage.setItem('menu', stringifiedArray.join(';'));
};

export const getShoppingListFromBase = () => {
    const shoppingList = localStorage.getItem('shopping-list');
    return shoppingList ? shoppingList.split(';') : defaultShoppingList;
};

export const setShoppingListToBase = (shoppingList: string[]) => {
    localStorage.setItem('shopping-list', shoppingList.join(';'));
};