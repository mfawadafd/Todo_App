import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./Todo.css"; // import the CSS file

export default function TodoApp() {
  const [todos, setTodos] = useState([{ Task: "Simple Task", id: uuidv4(), isdone: false }]);
  const [NewTodos, setNewtodos] = useState("");

  const addNewTask = () => {
    if (NewTodos.trim() === "") return;
    setTodos((prevTodos) => [...prevTodos, { Task: NewTodos, id: uuidv4(), isdone: false }]);
    setNewtodos("");
  };

  const updatedtodovalue = (event) => setNewtodos(event.target.value);

  const deleteTodo = (id) => setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));

  const MarkAsDoneAll = () =>
    setTodos((prevTodos) => prevTodos.map((todo) => ({ ...todo, isdone: true })));

  const MarkAsDoen = (id) =>
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isdone: true } : todo
      )
    );

  return (
    <div className="todo-container">
      <h2 className="title">📝 To-Do List</h2>
      <div className="input-group">
        <input
          className="input-task"
          placeholder="Add a task..."
          value={NewTodos}
          onChange={updatedtodovalue}
        />
        <button className="btn add-btn" onClick={addNewTask}>
          ➕ Add
        </button>
      </div>
      <ul className="task-list">
        {todos.map((todo) => (
          <li key={todo.id} className="task-item">
            <span className={todo.isdone ? "task done" : "task"}>{todo.Task}</span>
            <div className="btn-group">
              <button className="btn delete-btn" onClick={() => deleteTodo(todo.id)}>
                🗑 Delete
              </button>
              <button className="btn done-btn" onClick={() => MarkAsDoen(todo.id)}>
                ✅ Done
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button className="btn mark-all-btn" onClick={MarkAsDoneAll}>
        ✔️ Mark All as Done
      </button>
    </div>
  );
}
