import { useDispatch } from "react-redux";

import { deleteTodo } from "../../store/slices/todos";

/* eslint-disable react/prop-types */
function TodoItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <li
      onClick={() => dispatch(deleteTodo(todo.id))}
      className="list-group-item"
    >
      {todo.label.toUpperCase()}
    </li>
  );
}

export default TodoItem;
