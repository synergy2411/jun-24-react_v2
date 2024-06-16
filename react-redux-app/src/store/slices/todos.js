import { createSlice } from "@reduxjs/toolkit";

const initialTodoState = {
  todos: [
    { id: "t001", label: "pot the plants" },
    { id: "t002", label: "renew car insurance" },
    { id: "t003", label: "buy some pulses" },
  ],
};

const todoSlice = createSlice({
  name: "todos",
  initialState: initialTodoState,
  reducers: {
    createTodo: (state, action) => {
      let newTodo = {
        id: "t00" + state.todos.length + 1,
        label: action.payload,
      };
      state.todos.push(newTodo); // immer.js
    },
    deleteTodo: (state, action) => {
      const position = state.todos.findIndex(
        (todo) => todo.id === action.payload
      );
      state.todos.splice(position, 1);
    },
  },
});

export const { createTodo, deleteTodo } = todoSlice.actions;

const todoReducer = todoSlice.reducer;

export default todoReducer;
