import React, { useState } from "react";
import style from "../assets/styles/signUp.module.scss";
import axios from "axios";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [state, setState] = useState({});
  const onchangeFunc = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  console.log(state, "state");

  const signUpFunc = () => {
    axios
      .post("http://localhost:4000/app/signup", state)
      .then((res) => console.log(res.data, "res~~~"));
  };

  return (
    <div className={style.container}>
      <h1>SignUp</h1>
      <div className={style.form}>
        <label>
          <span>First Name</span>
          <input
            onChange={onchangeFunc}
            placeholder={"First name"}
            type={"text"}
            name={"firstName"}
          />
        </label>
        <label>
          <span>Last name</span>
          <input
            onChange={onchangeFunc}
            placeholder={"Last name"}
            type={"text"}
            name={"lastName"}
          />
        </label>
        <label>
          <span>Email</span>
          <input
            onChange={onchangeFunc}
            placeholder={"Email"}
            type={"email"}
            name={"email"}
          />
        </label>
        <label>
          <span>Phone</span>
          <input
            onChange={onchangeFunc}
            placeholder={"Phone"}
            type={"number"}
            name={"phone"}
          />
        </label>
        <label>
          <span>Password</span>
          <input
            onChange={onchangeFunc}
            placeholder={"Password"}
            type={"password"}
            name={"password"}
          />
        </label>
        <div className={style.buttons}>
          <button>Cancel</button>
          <Link to={"/signIn"}>
            <button onClick={signUpFunc}>SignUp</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
