import { PayloadAction, createSlice } from "@reduxjs/toolkit";
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
    reducers: {
        setShoppingList: (state, action: PayloadAction<string[]>) => {
            state.shoppingList = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchShoppingList.fulfilled, (state, action) => {
            state.shoppingList = getObjectToStringArray(action.payload);
        })
    }
});

export const { setShoppingList } = shoppingSlice.actions

export default shoppingSlice.reducer;