import React from 'react';
import TodoItem from './TodoItem';
import DeleteAllButton from './DeleteAllButton';

const TodoList = ({ todos, toggleTodo, deleteTodo, deleteAllTodos }) => {
  return (
    <div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
      <DeleteAllButton deleteAllTodos={deleteAllTodos} />
    </div>
  );
};

export default TodoList;
