import { useState } from "react";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";

//
const initialTodos = [
  { id: 1, text: "первая задача" },
  { id: 2, text: "вторая задача" },
  { id: 3, text: "третья задача" },
  { id: 4, text: "четвертая задача" },
];

//
function App() {
  //
  const [todos, setTodos] = useState(initialTodos);

  function onDelete(id) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  function onAdd(text) {
    const newTodo = { id: Date.now(), text };
    setTodos([...todos, newTodo]);

    console.log(newTodo);
  }

  //
  return (
    <>
      <div>
        <div>
          <h1>Мои задачи</h1>

          <AddTodo onAdd={onAdd} />

          <div>
            {todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
