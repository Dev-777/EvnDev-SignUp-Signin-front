import React from "react";

const Input = ({ onchangeFunc, placeholder, type, name, validation }) => {
  return (
    <label className={"d-flex flex-column mb-3"}>
      <span className={"mb-1"}>{placeholder}</span>
      <input
        className={"w-75 form-control"}
        onChange={onchangeFunc}
        placeholder={placeholder}
        type={type}
        name={name}
      />
      {validation ? validation(name) : null}
    </label>
  );
};

export default Input;
