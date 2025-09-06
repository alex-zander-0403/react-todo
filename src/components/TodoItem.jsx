function TodoItem({ todo, onDelete }) {
  //
  return (
    <div>
      <div>
        <button>готово</button>
        <div>{todo.text}</div>
      </div>

      <button onClick={() => onDelete(todo.id)}>Удалить</button>
    </div>
  );
}

export default TodoItem;
