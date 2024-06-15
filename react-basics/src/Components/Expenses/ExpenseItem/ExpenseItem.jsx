import PropTypes from "prop-types";
import ExpenseDate from "../ExpenseDate/ExpenseDate";

function ExpenseItem({ id, amount, title, createdAt, onDeleteExpense }) {
  return (
    <div className="col-4">
      <div className="card">
        <div className="card-header">
          <h5>{title.toUpperCase()}</h5>
        </div>
        <div className="card-body">
          <p>Amount : {amount}</p>
          <ExpenseDate createdAt={createdAt} />
          <div className="float-end">
            <button
              className="btn btn-sm btn-outline-danger"
              onClick={() => onDeleteExpense(id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;

ExpenseItem.propTypes = {
  id: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.instanceOf(Date).isRequired,
};
