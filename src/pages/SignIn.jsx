import React, { useState } from "react";
import axios from "axios";
import style from "../assets/styles/signUp.module.scss";

const SignIn = () => {
  const [state, setState] = useState({ isValid: true });

  const signInFunc = () => {
    axios.post("http://localhost:4000/app/signin", state).then((res) => {
      setState({ ...state, isValid: res.data.message });
    });
  };
  console.log(state, "state");

  return (
    <div className={style.container}>
      <h1>SignIn</h1>
      <div className={style.form}>
        {!state.isValid ? (
          <span style={{ color: "red" }}>email or password is incorrect</span>
        ) : null}

        <label>
          <span>Email</span>
          <input
            type="email"
            name={"email"}
            onChange={(e) =>
              setState({ ...state, [e.target.name]: e.target.value })
            }
          />
        </label>
        <label>
          <span>Password</span>
          <input
            type="password"
            name={"password"}
            onChange={(e) =>
              setState({ ...state, [e.target.name]: e.target.value })
            }
          />
        </label>
        <div className={style.buttons}>
          <button>Cancel</button>
          <button onClick={signInFunc}>SignIn</button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
