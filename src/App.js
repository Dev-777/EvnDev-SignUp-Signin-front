import React from "react";
import SignUp from "./auth/SignUp";
import "../src/assets/styles/global.scss";
import { Route } from "react-router-dom";
import SignIn from "./auth/SignIn";
import UserProfile from "./pages/UserProfile";
import Navigation from "./components/Navigation";
import FindUsers from "./pages/FindUsers";

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Route exact path={"/signup"} component={SignUp} />
      <Route exact path={"/signin"} component={SignIn} />
      <Route exect path={"/userprofile"} component={UserProfile} />
      <Route exect path={"/homeReducer"} component={FindUsers} />
    </div>
  );
};

export default App;
