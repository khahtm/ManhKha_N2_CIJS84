import React from 'react';
import TrashIcon from './TrashIcon';

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  const handleToggle = () => {
    toggleTodo && toggleTodo(todo.id);
  };

  const handleDelete = () => {
    deleteTodo && deleteTodo(todo.id);
  };

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggle}
      />
      <span className="todo-content">{todo.content}</span>
      <TrashIcon onClick={handleDelete} />
    </li>
  );
};

export default TodoItem;
