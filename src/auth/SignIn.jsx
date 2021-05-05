import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Input from "../components/Input";

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
  const onchangeFunc = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <div className={"bg-secondary h-100 d-flex justify-content-center "}>
      <div
        className={
          "bg-light w-25 h-50 mt-5  d-flex flex-column align-items-center rounded p-4"
        }
      >
        <h1 className={"mt-1 mb-3"}>SignIn</h1>

        <div className={"d-flex flex-column w-100"}>
          {!state.isValid ? (
            <span className={"text-danger"}>
              email or password is incorrect
            </span>
          ) : null}
          <Input
            name={"email"}
            type={"email"}
            placeholder={"Email"}
            label={"Email"}
            onchangeFunc={onchangeFunc}
          />
          <Input
            name={"password"}
            type={"password"}
            placeholder={"Password"}
            label={"Password"}
            onchangeFunc={onchangeFunc}
          />
          <div className={"d-flex mt-3 justify-content-end "}>
            <button
              className={"btn btn-lg btn-default bg-secondary mr-4 text-light"}
            >
              Cancel
            </button>
            <button
              className={"btn btn-lg btn-default bg-success mr-4 text-light"}
              onClick={signInFunc}
            >
              SignUp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
