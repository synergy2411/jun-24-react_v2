import { useSelector } from "react-redux";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

function Todos() {
  const { todos } = useSelector((store) => store.todoReducer);

  return (
    <div className="container">
      <h1>My Todo List</h1>
      <AddTodo />

      <br />

      <ul className="list-group">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default Todos;
