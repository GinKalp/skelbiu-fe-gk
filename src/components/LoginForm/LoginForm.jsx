import React from "react";
import { FormikHandler, initValuesFunc } from "../../helpers/formikHelper";
import Form from "../UI/Form/Form";
import * as Yup from "yup";
import Title from "../UI/Title/Title";
import css from "./LoginForm.module.css";

const formFields = [
  { name: "username", placeholder: "Enter username", type: "text" },
  { name: "password", placeholder: "Enter password", type: "password" },
];

const validationSchema = Yup.object({
  username: Yup.string()
    .min(4, "minimum 4 characters")
    .max(15, "maximum 15 characters")
    .required(),
  password: Yup.string()
    .min(4, "minimum 4 characters")
    .max(15, "maximum 15 characters")
    .required(),
});

const initInputs = initValuesFunc(formFields);

const LoginForm = () => {
  const formik = FormikHandler(
    initInputs,
    validationSchema,
    "post",
    "auth/login"
  );

  return (
    <div className={`container ${css.wrapper}`}>
      <Title title={"Login"} />
      <Form arr={formFields} formik={formik} target={"Login"} />
    </div>
  );
};

export default LoginForm;
