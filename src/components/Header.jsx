import React from "react";
import Navigation from "./Navigation";
import * as Bootstrap from "react-bootstrap";

const Header = () => {
  return (
    <Bootstrap.Container
      className={"bg-dark mw-100 p-2 d-flex justify-content-end"}
      style={{ height: "90px" }}
    >
      <Navigation />
    </Bootstrap.Container>
  );
};

export default Header;
