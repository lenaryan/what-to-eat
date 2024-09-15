import { createClient } from "@supabase/supabase-js";
import { SUPABASE_KEY, SUPABASE_URL } from "./constants";
import { DayMenu } from "./types";
import { createAsyncThunk } from "@reduxjs/toolkit";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// TODO: create policies in database???

export const fetchIngredients = createAsyncThunk('fetchIngredients', async () => {
    const { data: ingredients } = await supabase.from('ingredients').select('*');
    
    return ingredients ?? [];
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
    const { data: shoppingList } = await supabase.from('shopping_list').select('*');
    
    return shoppingList ?? [];
});

export const setShoppingListToBase = (shoppingList: string[]) => {
    // localStorage.setItem('shopping-list', shoppingList.join(';'));
};