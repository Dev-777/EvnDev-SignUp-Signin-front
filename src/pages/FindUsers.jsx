import React, { useEffect, useState } from "react";
import axios from "axios";

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
  return (
    <div>
      {state.logged ? (
        <div>
          <input
            type="text"
            onChange={(e) => setState({ ...state, inputValue: e.target.value })}
            onKeyPress={(e) => (e.key === "Enter" ? find() : null)}
          />
          <button onClick={find}>find</button>
          <div>
            <h1>{state.existUser}</h1>
          </div>
        </div>
      ) : (
        <h1>to find users, first you must signUp</h1>
      )}
    </div>
  );
};

export default FindUsers;
