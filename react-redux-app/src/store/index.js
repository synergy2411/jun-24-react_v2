import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/todos";
import authReducer from "./slices/auth";

const store = configureStore({
  reducer: {
    todoReducer,
    authReducer,
  },
});

export default store;
