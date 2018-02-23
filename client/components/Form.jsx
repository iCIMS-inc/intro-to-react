import React from 'react';

const Form = ({value, handleOnChange, handleOnSubmit}) => {
  return (
    <form onSubmit={handleOnSubmit}>
      <input type="text" value={value} onChange={handleOnChange} />
      <button type="submit">Add</button>
    </form>
  )
}

export default Form;

