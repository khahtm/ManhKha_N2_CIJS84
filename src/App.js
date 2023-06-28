import React, { useState } from 'react';
import Tab from './components/Tab';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [activeTab, setActiveTab] = useState('all');

  const addTodo = (content) => {
    const newTodo = {
      id: Date.now(),
      content,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const deleteAllTodos = () => {
    setTodos([]);
  };

  const filteredTodos = () => {
    switch (activeTab) {
      case 'active':
        return todos.filter((todo) => !todo.completed);
      case 'complete':
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };

  return (
    <div className="todo-app">
      <h1>#todo</h1>
      <div className="tab-container">
        <Tab
          title="All"
          isActive={activeTab === 'all'}
          onClick={() => setActiveTab('all')}
        />
        <Tab
          title="Active"
          isActive={activeTab === 'active'}
          onClick={() => setActiveTab('active')}
        />
        <Tab
          title="Complete"
          isActive={activeTab === 'complete'}
          onClick={() => setActiveTab('complete')}
        />
      </div>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={filteredTodos()}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        deleteAllTodos={deleteAllTodos}
      />
    </div>
  );
};

export default App;
