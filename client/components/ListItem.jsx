import React from 'react';

const ListItem = ({todo}) => {
  return (
    <div>
      <input type="checkbox" />
      {todo}
    </div>
  )
}

export default ListItem;

