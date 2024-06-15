import { useState } from "react";
import { v4 } from "uuid";
import "./AddExpense.css";

function AddExpense({ onAddNewExpense }) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredCreatedAt, setEnteredCreatedAt] = useState("");

  const titleChangeHandler = (event) => setEnteredTitle(event.target.value);

  const submitHandler = (event) => {
    event.preventDefault();
    let newExpense = {
      id: v4(),
      title: enteredTitle,
      amount: Number(enteredAmount),
      createdAt: new Date(enteredCreatedAt),
    };
    onAddNewExpense(newExpense);
  };
  return (
    <div className="backdrop">
      <div className="the-modal">
        <h4 className="text-center">What you spend today?</h4>
        <form onSubmit={submitHandler}>
          {/* title */}
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              name="title"
              id="title"
              placeholder=""
              onChange={titleChangeHandler}
              value={enteredTitle}
            />
            <label htmlFor="title">Title:</label>
          </div>

          {/* amount */}
          <div className="form-floating mb-3">
            <input
              type="number"
              className="form-control"
              name="amount"
              id="amount"
              placeholder=""
              step="0.1"
              min="0.5"
              value={enteredAmount}
              onChange={(event) => setEnteredAmount(event.target.value)}
            />
            <label htmlFor="amount">Amount:</label>
          </div>

          {/* createdAt */}
          <div className="form-floating mb-3">
            <input
              type="date"
              className="form-control"
              name="created-at"
              id="created-at"
              placeholder=""
              min="2022-04-10"
              max="2025-03-31"
              value={enteredCreatedAt}
              onChange={(event) => setEnteredCreatedAt(event.target.value)}
            />
            <label htmlFor="created-at">Date</label>
          </div>

          {/* buttons */}
          <div className="row">
            <div className="col-6">
              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Add
                </button>
              </div>
            </div>
            <div className="col-6">
              <div className="d-grid">
                <button className="btn btn-secondary">Reset</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddExpense;
