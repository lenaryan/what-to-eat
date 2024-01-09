import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { fetchIngredients } from '../shared/api'
import { ListType } from '../shared/types'

interface IngredientsState {
  ingredients: ListType[]
}

const initialState: IngredientsState = {
  ingredients: [],
}

export const ingredientsSlice = createSlice({
  name: 'ingredientsSlice',
  initialState,
  reducers: {
    addIngredientToList: (state, action: PayloadAction<ListType>) => {
      state.ingredients.push({ title: action.payload.title });
    },
    removeIngredientFromList: (state, action: PayloadAction<string>) => {
      state.ingredients = state.ingredients.filter((prod: ListType) => prod.title !== action.payload);
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