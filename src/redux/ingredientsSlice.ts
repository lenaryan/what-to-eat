import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { fetchIngredients } from '../shared/api'
import { getObjectToStringArray } from '../shared/functions'

interface IngredientsState {
  ingredients: string[]
}

const initialState: IngredientsState = {
  ingredients: [],
}

export const ingredientsSlice = createSlice({
  name: 'ingredientsSlice',
  initialState,
  reducers: {
    addIngredientToList: (state, action: PayloadAction<string>) => {
      state.ingredients.push(action.payload);
    },
    removeIngredientFromList: (state, action: PayloadAction<string>) => {
      state.ingredients = state.ingredients.filter((prod: string) => prod !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchIngredients.fulfilled, (state, action) => {
        state.ingredients = getObjectToStringArray(action.payload);
    })
  },
})

export const { addIngredientToList, removeIngredientFromList } = ingredientsSlice.actions

export default ingredientsSlice.reducer