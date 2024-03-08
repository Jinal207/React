import { configureStore } from "@reduxjs/toolkit";
// import { counterSlice } from './adminslice'
import counterReducer from "./adminslice";

export const store = configureStore({
  reducer: {
    abc: counterReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
