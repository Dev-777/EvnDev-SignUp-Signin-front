import React from "react";
import { Link } from "react-router-dom";
import * as B from "react-bootstrap";

const Navigation = () => {
  return (
    <B.Nav
      defaultActiveKey={"link-1"}
      variant="pills"
      className={"h-100 w-50  d-flex align-items-center justify-content-end"}
    >
      <B.NavItem>
        <B.NavLink eventKey="link-1">
          <Link className={"link-router"} to={"/home"}>
            HOME
          </Link>
        </B.NavLink>
      </B.NavItem>
      <B.NavItem>
        <B.NavLink eventKey="link-2">
          <Link className={"link-router"} to={"/signin"}>
            SIGNIN
          </Link>
        </B.NavLink>
      </B.NavItem>
      <B.NavItem>
        <B.NavLink eventKey="link-3">
          <Link className={"link-router"} to={"/signup"}>
            SIGNUP
          </Link>
        </B.NavLink>
      </B.NavItem>
      <B.NavItem>
        <B.NavLink eventKey="link-4">
          <Link className={"link-router"} to={"/find"}>
            FIND
          </Link>
        </B.NavLink>
      </B.NavItem>
    </B.Nav>
  );
};

export default Navigation;
