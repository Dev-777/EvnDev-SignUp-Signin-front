import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Link to={"/signin"}>
        <button>SignIn</button>
      </Link>
      <Link to={"/signup"}>
        <button>SignUp</button>
      </Link>
      <Link to={"/homeReducer"}>
        <button>Find User</button>
      </Link>
    </div>
  );
};

export default Navigation;
