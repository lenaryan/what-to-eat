import { createSlice } from "@reduxjs/toolkit";
import { fetchShoppingList } from "../shared/api";
import { getObjectToStringArray } from "../shared/functions";

interface shoppingState {
    shoppingList: string[],
}

const initialState: shoppingState = {
    shoppingList: []
}

export const shoppingSlice = createSlice({
    name: 'shoppingSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchShoppingList.fulfilled, (state, action) => {
            state.shoppingList = getObjectToStringArray(action.payload);
        })
    }
});

export default shoppingSlice.reducer;