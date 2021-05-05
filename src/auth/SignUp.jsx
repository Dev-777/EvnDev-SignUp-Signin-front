import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { CommonLoading } from "react-loadingg";
import Input from "../components/Input";

const SignUp = () => {
  const history = useHistory();
  const initialState = {
    firstName: " ",
    lastName: " ",
    email: " ",
    phone: " ",
    password: " ",
    showLoading: false,
  };
  const [state, setState] = useState(initialState);
  const { firstName, lastName, email, phone, password } = state;

  const onchangeFunc = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const signUpFunc = () => {
    if (firstName && lastName && email && phone.length > 1 && password) {
      setState({ ...state, showLoading: true });
      axios
        .post("http://localhost:4000/app/signup", state)
        .then(() => setState({ ...state, showLoading: true }))
        .then(() => history.push("/signIn"));
    }
  };

  const validation = (fieldName) => {
    return state[fieldName] ? null : (
      <span style={{ color: "red" }}>required</span>
    );
  };

  const disabled = () => {
    return !(
      firstName.length > 1 &&
      lastName.length > 1 &&
      email.length > 1 &&
      phone.length > 1 &&
      password.length > 1
    );
  };

  return (
    <div className={"bg-secondary h-100 d-flex justify-content-center "}>
      <div
        className={
          "bg-light w-25 h-75 mt-5  d-flex flex-column align-items-center rounded p-4"
        }
      >
        <h1 className={"mt-1 mb-3"}>SignUp</h1>
        {state.showLoading ? <CommonLoading /> : null}
        <div className={"d-flex flex-column w-100"}>
          <Input
            name={"firstName"}
            type={"text"}
            label={"FirstName"}
            placeholder={"FirstName"}
            onchangeFunc={onchangeFunc}
            validation={validation}
          />
          <Input
            name={"lastName"}
            type={"text"}
            placeholder={"LastName"}
            label={"LastName"}
            onchangeFunc={onchangeFunc}
            validation={validation}
          />
          <Input
            name={"email"}
            type={"email"}
            placeholder={"Email"}
            label={"Email"}
            onchangeFunc={onchangeFunc}
            validation={validation}
          />
          <Input
            name={"phone"}
            type={"number"}
            placeholder={"Phone"}
            label={"Phone"}
            onchangeFunc={onchangeFunc}
            validation={validation}
          />
          <Input
            name={"password"}
            type={"password"}
            placeholder={"Password"}
            label={"Password"}
            onchangeFunc={onchangeFunc}
            validation={validation}
          />

          <div className={"d-flex mt-3 justify-content-end "}>
            <button
              className={"btn btn-lg btn-default bg-secondary mr-4 text-light"}
            >
              Cancel
            </button>
            <button
              className={"btn btn-lg btn-default bg-success mr-4 text-light"}
              disabled={disabled()}
              onClick={signUpFunc}
            >
              SignUp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
