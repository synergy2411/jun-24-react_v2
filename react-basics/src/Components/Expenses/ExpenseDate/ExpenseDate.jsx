import PropTypes from "prop-types";

function ExpenseDate({ createdAt }) {
  const month = createdAt.toLocaleString("en-US", { month: "long" });
  const day = createdAt.toLocaleString("en-US", { day: "numeric" });
  const year = createdAt.getFullYear();

  return (
    <p>
      Date : {month} {day}, {year}
    </p>
  );
}

export default ExpenseDate;

ExpenseDate.propTypes = {
  createdAt: PropTypes.instanceOf(Date).isRequired,
};
