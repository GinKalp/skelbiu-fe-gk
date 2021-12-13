import React from "react";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import css from "./RegisterPage.module.css";

const RegisterPage = () => {
  return (
    <div className={css.body}>
      <h2 className={`container ${css.title}`}>My Account</h2>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
