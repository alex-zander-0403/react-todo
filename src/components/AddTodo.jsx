import { useState } from "react";

//
function AddTodo({ onAdd }) {
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (value.trim() !== "") {
      onAdd(value);
      setValue("");
    }
  }

  //
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        placeholder="введите новую задачу"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Добавить</button>
    </form>
  );
}

export default AddTodo;
