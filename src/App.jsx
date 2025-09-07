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
  const [theme, setTheme] = useState(getInitialTheme());

  function getInitialTheme() {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme) {
      return savedTheme;
    } else if (prefersDark) {
      return "dark";
    } else {
      const hours = new Date().getHours();
      if (hours >= 19 || hours <= 7) {
        return "dark";
      } else {
        return "light";
      }
    }
  }

  function toggleTheme() {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  }

  // -------------------

  function onDelete(id) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  function onAdd(text) {
    const newTodo = { id: Date.now(), text };
    setTodos([...todos, newTodo]);
  }

  //
  return (
    <div
      data-theme={theme}
      className="flex flex-col min-h-screen justify-center items-center bg-page-light dark:bg-page-dark p-6"
    >
      <div className="mb-6">
        <div className="flex items-center cursor-pointer">
          <button onClick={toggleTheme} className="relative">
            <div className="w-14 h-7 rounded-full shadow-inner transition-colors duration-300 bg-gray-300 dark:bg-zinc-700"></div>
            <div className="absolute top-0.5 left-0.5 h-6 w-6 bg-white rounded-full shadow-md transform transition-transform duration-300 translate-x-0 dark:translate-x-7"></div>
          </button>
        </div>
      </div>

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
  );
}

export default App;
