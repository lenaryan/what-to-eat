import { createClient } from "@supabase/supabase-js";
import { SUPABASE_KEY, SUPABASE_URL, defaultShoppingList } from "./constants";
import { DayMenu, IngredientsType } from "./types";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export const fetchIngredients = async (setIngredients: (value: React.SetStateAction<IngredientsType[]>) => void) => {
    // TODO: set up state!!!
    try {
        const { data: ingredients, error } = await supabase.from('ingredients').select();
        if (ingredients) setIngredients(ingredients);
    } catch (error) {
        console.log(error);
    }
};

export const setIngredientsToBase = (ingredientsList: IngredientsType[]) => {
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