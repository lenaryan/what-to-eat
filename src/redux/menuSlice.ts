import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { DayMenu, MealsArrayType } from "../shared/types"
import { fetchMenu } from "../shared/api"

interface MenuState {
    menu: DayMenu[],
    breakfastList: MealsArrayType[],
    lunchList: MealsArrayType[],
    dinnerList: MealsArrayType[]
}

const initialState: MenuState = {
    menu: [],
    breakfastList: [],
    lunchList: [],
    dinnerList: []
}

export const menuSlice = createSlice({
    name: 'menuSlice',
    initialState,
    reducers: {
        setMenu: (state, action: PayloadAction<DayMenu[]>) => {
            state.menu = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMenu.fulfilled, (state, action) => {
            state.menu = action.payload;
        })
    }
})

export const { setMenu } = menuSlice.actions

export default menuSlice.reducer;