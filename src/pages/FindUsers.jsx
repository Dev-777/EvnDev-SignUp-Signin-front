import React, { useEffect, useState } from "react";
import axios from "axios";
import Input from "../components/Input";

const FindUsers = () => {
  const [state, setState] = useState({
    logged: false,
    existUser: "",
    inputValue: "",
  });

  useEffect(() => {
    axios
      .post("http://localhost:4000/app/checkoutToken", {
        token: localStorage.getItem("token"),
      })
      .then((res) => setState({ ...state, logged: true, allUsers: res.data }));
  }, []);

  const find = () => {
    const index = state.allUsers.indexOf(state.inputValue);
    if (index) {
      setState({ ...state, existUser: state.allUsers[index] });
    }
  };
  const onchangeFunc = (e) => {
    setState({ ...state, inputValue: e.target.value });
  };
  const onKeyPressFunc = (e) => {
    if (e.key === "Enter") {
      find();
    }
  };

  return (
    <div className={"d-flex bg-secondary h-100 d-flex justify-content-center "}>
      {state.logged ? (
        <div
          className={
            "w-25 h-25 mt-5 d-flex justify-content-center flex-column p-4 "
          }
        >
          <div className={"d-flex align-items-center"}>
            <Input
              type={"text"}
              placeholder={"Find"}
              onchangeFunc={onchangeFunc}
              onKeyPressFunc={onKeyPressFunc}
            />
            <button
              className={"btn btn-lg btn-default bg-success text-light mb-2"}
              onClick={find}
            >
              Find
            </button>
          </div>
          <div className={"text-warning"}>
            <h1>{state.existUser}</h1>
          </div>
        </div>
      ) : (
        <h1 className={"text-warning mt-5"}>
          to find users, first you must signUp
        </h1>
      )}
    </div>
  );
};

export default FindUsers;
