import { useReducer } from "react";

function reducer(state, action) {
  if (action.type === "INCREMENT") {
    return {
      ...state,
      counter: state.counter + 1,
    };
  } else if (action.type === "ADD_COUNTER") {
    return {
      ...state,
      counter: state.counter + action.payload,
    };
  } else if (action.type === "STORE_RESULT") {
    let doubleCounter = state.counter * 2;
    return {
      ...state,
      result: [doubleCounter, ...state.result],
    };
  }
  return state;
}

function UseReducerDemo() {
  const [state, dispatch] = useReducer(reducer, { counter: 0, result: [] });

  return (
    <>
      <h1>Use Reducer in action</h1>
      <p className="display-4">Counter : {state.counter}</p>
      <hr />

      <button
        className="btn btn-primary"
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        Increase
      </button>
      <button
        className="btn btn-secondary"
        onClick={() => dispatch({ type: "ADD_COUNTER", payload: 5 })}
      >
        Add (5)
      </button>

      <hr />
      <button
        className="btn btn-success"
        onClick={() => dispatch({ type: "STORE_RESULT" })}
      >
        Store Result
      </button>

      <ul>
        {state.result.map((res, idx) => (
          <li key={idx}>{res}</li>
        ))}
      </ul>
    </>
  );
}

export default UseReducerDemo;
