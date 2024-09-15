import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IngredientsType } from '../shared/types'
import { fetchShoppingList } from '../shared/api'

export interface IngredientsState {
  shoppingList: IngredientsType[]
}

const initialState: IngredientsState = {
  shoppingList: [],
}

export const shoppingListSlice = createSlice({
  name: 'shoppingListSlice',
  initialState,
  reducers: {
    addItemToShoppingList: (state, action: PayloadAction<IngredientsType>) => {
      state.shoppingList.push({id: action.payload.id, title: action.payload.title});
    },
    removeItemFromShoppingList: (state, action: PayloadAction<string>) => {
      state.shoppingList = state.shoppingList.filter((prod: IngredientsType) => prod.title !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchShoppingList.fulfilled, (state, action) => {
        state.shoppingList = action.payload;
    })
  },
})

export const { addItemToShoppingList, removeItemFromShoppingList } = shoppingListSlice.actions

export default shoppingListSlice.reducer