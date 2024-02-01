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

export const fetchMenu = createAsyncThunk('fetchMenu', async () => {
    const { data } = await supabase.from('menu').select();
    return data ?? [];
});

export const setMenuToBase = async (menu: DayMenu[]) => {
    // TODO: THINK ABOUT PLACING ANOTHER MENUS
    await supabase.from('menu').delete().gt('id', 0);
    await supabase.from('menu').insert(menu).select();
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

export const fetchBreakfastList = async () => {
    const { data } = await supabase.from('breakfast_list').select('dish,ingredients');
    return data ?? [];
};

export const fetchLunchList = async () => {
    const { data } = await supabase.from('lunch_list').select('dish,ingredients');
    return data ?? [];
};

export const fetchDinnerList = async () => {
    const { data } = await supabase.from('dinner_list').select('dish,ingredients');
    return data ?? [];
};