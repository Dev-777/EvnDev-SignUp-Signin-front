import React, { useState } from "react";
import style from "../assets/styles/signUp.module.scss";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { CommonLoading } from "react-loadingg";

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
        .then((res) => console.log(res.data, "res~~~"))
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
    <div className={style.container}>
      <h1>SignUp</h1>
      {state.showLoading ? <CommonLoading /> : null}
      <div className={style.form}>
        <label>
          <span>First Name</span>
          <input
            onChange={onchangeFunc}
            placeholder={"First name"}
            type={"text"}
            name={"firstName"}
          />
          {validation("firstName")}
        </label>
        <label>
          <span>Last name</span>
          <input
            onChange={onchangeFunc}
            placeholder={"Last name"}
            type={"text"}
            name={"lastName"}
          />
          {validation("lastName")}
        </label>
        <label>
          <span>Email</span>
          <input
            onChange={onchangeFunc}
            placeholder={"Email"}
            type={"email"}
            name={"email"}
          />
          {validation("email")}
        </label>
        <label>
          <span>Phone</span>
          <input
            onChange={onchangeFunc}
            placeholder={"Phone"}
            type={"number"}
            name={"phone"}
          />
          {validation("phone")}
        </label>
        <label>
          <span>Password</span>
          <input
            onChange={onchangeFunc}
            placeholder={"Password"}
            type={"password"}
            name={"password"}
          />
          {validation("password")}
        </label>
        <div className={style.buttons}>
          <button>Cancel</button>
          <button disabled={disabled()} onClick={signUpFunc}>
            SignUp
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
