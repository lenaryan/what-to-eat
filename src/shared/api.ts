import { createClient } from "@supabase/supabase-js";
import { SUPABASE_KEY, SUPABASE_URL } from "./constants";
import { DayMenu } from "./types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getStringToObjectArray } from "./functions";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export const fetchIngredients = createAsyncThunk('fetchIngredients', async () => {
    const { data } = await supabase.from('ingredients').select('title');
    return data ?? [];
});

export const setIngredientToBase = async (title: string) => {
    await supabase.from('ingredients').insert([
        { title },
    ]).select()
};

export const deleteIngredientFromBase = async (title: string) => {
    await supabase.from('ingredients').delete().eq('title', title)
}

export const getMenuFromBase = () => {
    // const menu = localStorage.getItem('menu');
    // if (!menu) return [];
    // const menuArray = menu.split(';');
    // return menuArray.map(item => JSON.parse(item));
};

export const setMenuToBase = (menu: DayMenu[]) => {
    // const stringifiedArray = menu.map(item => JSON.stringify(item));
    // localStorage.setItem('menu', stringifiedArray.join(';'));
};

export const fetchShoppingList = createAsyncThunk('fetchShoppingList', async () => {
    const { data } = await supabase.from('shopping_list').select('title');
    return data ?? [];
});

export const setShoppingListToBase = async (shoppingList: string[]) => {
    const newList = getStringToObjectArray(shoppingList);
    await supabase.from('shopping_list').delete().gt('id', 0);
    await supabase.from('shopping_list').insert(newList).select();
};