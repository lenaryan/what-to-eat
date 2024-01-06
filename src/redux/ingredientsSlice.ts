import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IngredientsType } from '../shared/types'
import { fetchIngredients } from '../shared/api'

export interface IngredientsState {
  ingredients: IngredientsType[]
}

const initialState: IngredientsState = {
  ingredients: [],
}

export const ingredientsSlice = createSlice({
  name: 'ingredientsSlice',
  initialState,
  reducers: {
    addIngredientToList: (state, action: PayloadAction<IngredientsType>) => {
      state.ingredients.push({id: action.payload.id, title: action.payload.title});
    },
    removeIngredientFromList: (state, action: PayloadAction<string>) => {
      state.ingredients = state.ingredients.filter((prod: IngredientsType) => prod.title !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchIngredients.fulfilled, (state, action) => {
        state.ingredients = action.payload;
    })
  },
})

export const { addIngredientToList, removeIngredientFromList } = ingredientsSlice.actions

export default ingredientsSlice.reducer