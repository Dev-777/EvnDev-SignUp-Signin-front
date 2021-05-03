import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "../assets/styles/signUp.module.scss";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

const SignIn = () => {
  const initialState = {
    isValid: true,
    redirect: false,
  };
  const [state, setState] = useState(initialState);
  const history = useHistory();
  const dispatch = useDispatch();

  const signInFunc = () => {
    axios
      .post("http://localhost:4000/app/signin", state)
      .then((res) => {
        dispatch({ type: "USER", payload: res.data.lastName });
        localStorage.setItem("token", res.data.token);
        setState({ ...state, redirect: true });
      })
      .catch(() => setState({ ...state, isValid: false }));
  };

  useEffect(() => {
    if (state.redirect) {
      history.push("/userprofile");
    }
  });

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
