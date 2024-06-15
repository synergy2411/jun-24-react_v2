import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import AddExpense from "./AddExpense/AddExpense";
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";

const INITIAL_EXPENSES = [
  {
    id: "e001",
    title: "grocery",
    amount: 19.9,
    createdAt: new Date("Dec 21, 2022"),
  },
  {
    id: "e002",
    title: "shopping",
    amount: 29.9,
    createdAt: new Date("Mar 2, 2024"),
  },
  {
    id: "e003",
    title: "planting",
    amount: 99.9,
    createdAt: new Date("Aug 1, 2023"),
  },
];

function Expenses() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  let [isShowForm, setIsShowForm] = useState(false);

  const [selYear, setSelYear] = useState("");

  const showFormClickHandler = () => {
    // isShowForm = !isShowForm;        // NEVER EVER CHANGE THE STATE MUTABLY
    setIsShowForm(!isShowForm);
  };

  const addNewExpense = (expense) => {
    setIsShowForm(false);
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  const deleteExpense = (expenseId) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== expenseId)
    );
  };

  const onYearSelect = (selectedYear) => {
    setSelYear(selectedYear);
  };

  let filteredExpenses = expenses;

  if (selYear !== "") {
    filteredExpenses = expenses.filter(
      (expense) => expense.createdAt.getFullYear() === Number(selYear)
    );
  }

  return (
    <div className="container">
      <h1 className="text-center">My Expenses</h1>
      <div className="row mb-4">
        {/* Show Form Button */}
        <div className="col-4 offset-4">
          <div className="d-grid">
            <button
              className="btn btn-secondary"
              onClick={showFormClickHandler}
            >
              Show Form
            </button>
          </div>
        </div>
        {/* Filter */}
        <div className="col-4">
          <ExpenseFilter onYearSelect={onYearSelect} />
        </div>
      </div>

      {isShowForm && <AddExpense onAddNewExpense={addNewExpense} />}

      <div className="row">
        {filteredExpenses.map((expense) => (
          // <ExpenseItem {...expense} />
          <ExpenseItem
            key={expense.id}
            id={expense.id}
            title={expense.title}
            createdAt={expense.createdAt}
            amount={expense.amount}
            onDeleteExpense={deleteExpense}
          />
        ))}
      </div>
    </div>
  );
}

export default Expenses;
