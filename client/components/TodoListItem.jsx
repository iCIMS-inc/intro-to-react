import React from 'react';

const TodoListItem = ({todo}) => {
  return (
    <div>
      <input id={todo.id} type="checkbox" />
      {todo.text}
    </div>
  )
}

export default TodoListItem;

