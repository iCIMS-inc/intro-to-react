import React from 'react';
import TodoListItem from './TodoListItem.jsx';

const TodoList = ({todos}) => {
  const todoList = todos.map((todo) => {
    return (
      <TodoListItem todo={todo.text} key={todo.key} />
    )
  });

  return (
    <div>
      {todoList}
    </div>
  )
}

export default TodoList;

