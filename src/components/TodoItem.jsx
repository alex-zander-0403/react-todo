import { useState } from "react";

//
function TodoItem({ todo, onDelete }) {
  //
  const [isCompleted, setIsCompleted] = useState(false);
  
  //
  return (
    <div className="flex items-center justify-between gap-15 p-3 rounded-lg bg-page-light dark:bg-page-dark shadow-sm hover:shadow-md transition-shadow duration-300 border-gray-100">
      <div className="flex items-center gap-15">
        <button>готово</button>
        <div>{todo.text}</div>
      </div>

      <button onClick={() => onDelete(todo.id)}>Удалить</button>
    </div>
  );
}

export default TodoItem;
