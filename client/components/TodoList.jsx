import React from 'react';
import TodoListItem from './TodoListItem.jsx';

const TodoList = ({todos}) => {
  const todoList = todos.map((todo) => {
    return (
      <TodoListItem todo={todo} key={todo.id} />
    )
  });

  return (
    <div>
      {todoList}
    </div>
  )
}

export default TodoList;

