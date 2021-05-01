import React from "react";
import SignUp from "./pages/SignUp";
import "../src/assets/styles/global.scss";
import { Route, Link } from "react-router-dom";
import SignIn from "./pages/SignIn";

const App = () => {
  return (
    <div className="App">
      <div>
        <Link to={"/signin"}>
          <button>SignIn</button>
        </Link>
        <Link to={"/signup"}>
          <button>SignUp</button>
        </Link>
      </div>

      <Route exact path={"/signup"}>
        <SignUp />
      </Route>
      <Route exact path={"/signin"}>
        <SignIn />
      </Route>
    </div>
  );
};

export default App;
