function ExpenseFilter({ onYearSelect }) {
  return (
    <select
      className="form-control"
      onChange={(event) => onYearSelect(event.target.value)}
    >
      <option value="">Select Year</option>
      <option value="2022">2022</option>
      <option value="2023">2023</option>
      <option value="2024">2024</option>
    </select>
  );
}

export default ExpenseFilter;
