import React from "react";
import LoginForm from "../components/LoginForm/LoginForm";
import css from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className={css.body}>
      <h2 className={`container ${css.title}`}>My Account</h2>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
