import React, { Component } from 'react';
import AddTodoForm from './AddTodoForm.jsx';
import TodoList from './TodoList.jsx';
import todos from '../mocks/todos.js';

class TodoApp extends Component {
  render() {
    return (
      <div>
        <h1>To-Do App</h1>
        <AddTodoForm />
        <TodoList todos={todos} />
      </div>
    )
  }
}

export default TodoApp;

