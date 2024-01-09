import { createSlice } from "@reduxjs/toolkit";
import { ListType } from "../shared/types";
import { fetchShoppingList } from "../shared/api";

interface shoppingState {
    shoppingList: ListType[],
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
            state.shoppingList = action.payload
        })
    }
});

export default shoppingSlice.reducer;