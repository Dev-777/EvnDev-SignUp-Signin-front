import React from "react";

const Input = ({
  onchangeFunc,
  onKeyPressFunc,
  placeholder,
  label,
  type,
  name,
  validation,
}) => {
  return (
    <label className={"d-flex flex-column mb-3"}>
      <span className={"mb-1"}>{label}</span>
      <input
        className={"w-75 form-control"}
        onChange={onchangeFunc ? onchangeFunc : null}
        placeholder={placeholder}
        type={type}
        name={name}
        onKeyPress={onKeyPressFunc ? onKeyPressFunc : null}
      />
      {validation ? validation(name) : null}
    </label>
  );
};

export default Input;
