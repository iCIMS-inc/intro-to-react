import React, { Component } from 'react';
import AddTodoForm from './AddTodoForm.jsx';
import TodoList from './TodoList.jsx';
import initialTodos from '../mocks/todos.js';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      todos: initialTodos
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnChange(event) {
    this.setState({ inputValue: event.target.value })
  }

  handleOnSubmit(event) {
    event.preventDefault();

    const newTodo = {
      text: this.state.inputValue,
      key: (new Date()).getTime()
    }

    this.setState({
      inputValue: '',
      todos: [...this.state.todos, newTodo]
    });
  }

  render() {
    return (
      <div>
        <h1>To-Do App</h1>
        <AddTodoForm 
          value={this.state.inputValue}
          handleOnChange={this.handleOnChange}
          handleOnSubmit={this.handleOnSubmit}  />
        <TodoList todos={this.state.todos} />
      </div>
    )
  }
}

export default TodoApp;

