import React from 'react';

const TodoListItem = ({todo}) => {
  return (
    <div>
      <input type="checkbox" />
      {todo}
    </div>
  )
}

export default TodoListItem;

