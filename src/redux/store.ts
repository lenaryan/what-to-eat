import { configureStore } from '@reduxjs/toolkit';
import ingredientsReducer from './ingredientsSlice';
import shoppingReducer from './shoppingSlice';
import menuReducer from './menuSlice';

export const store = configureStore({
  reducer: {
    ingredientsSlice: ingredientsReducer,
    shoppingSlice: shoppingReducer,
    menuSlice: menuReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch