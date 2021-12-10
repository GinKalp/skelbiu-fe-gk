import React from "react";
import { Link } from "react-router-dom";
import css from "./NavBar.module.css";

const NavBar = () => {
  return (
    <ul className={css.wrapper}>
      <li style={{ float: "left" }}>
        <img src="img/logo.png" alt="" />
      </li>
      <li>
        <Link to={"/my-account"}>My Account</Link>
      </li>
      <li>
        <Link to={"/register"}>Register</Link>
      </li>
      <li>
        <Link to={"/login"}>Login</Link>
      </li>
    </ul>
  );
};

export default NavBar;
