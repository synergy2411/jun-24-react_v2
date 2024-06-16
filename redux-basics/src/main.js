import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

// REDUCER
function reducer(state = initialState, action) {
  if (action.type === "INCREMENT") {
    return {
      ...state,
      counter: state.counter + 1,
    };
  } else if (action.type === "DECREMENT") {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }
  return state;
}
// STORE
const store = configureStore({
  reducer,
});

// SUBSCRIPTION
store.subscribe(() => {
  console.log(store.getState());
});

// ACTION
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
