import React from "react";

const Input = props => {
  return (
    <div>
      <form onSubmit={props.onFormSubmit}>
        <input type="text" onChange={props.onInputChange} />
        <button type="submit">Buscar</button>
      </form>
    </div>
  );
};

export default Input;
