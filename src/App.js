import React from "react";
import SignUp from "./auth/SignUp";
import "../src/assets/styles/global.scss";
import { Route } from "react-router-dom";
import SignIn from "./auth/SignIn";
import UserProfile from "./pages/UserProfile";
import FindUsers from "./pages/FindUsers";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Route exact path={"/home"} component={Home} />
      <Route exact path={"/signup"} component={SignUp} />
      <Route exact path={"/signin"} component={SignIn} />
      <Route exect path={"/userprofile"} component={UserProfile} />
      <Route exect path={"/find"} component={FindUsers} />
    </div>
  );
};

export default App;
