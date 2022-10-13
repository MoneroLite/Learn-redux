import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoReducer";
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

const rootReducer = combineReducers({
    todo: todoReducer
})

export const store = configureStore({
    reducer: rootReducer
})
