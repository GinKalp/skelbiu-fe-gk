import React from "react";
import * as Yup from "yup";
import { FormikHandler, initValuesFunc } from "../../helpers/formikHelper";
import Form from "../UI/Form";

const formFields = [
  { name: "username", placeholder: "Enter username", type: "text" },
  { name: "password", placeholder: "Enter password", type: "password" },
  { name: "repeatPassword", placeholder: "Repeat password", type: "password" },
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
  repeatPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

const initInputs = initValuesFunc(formFields);

const RegisterForm = () => {
  const formik = FormikHandler(initInputs, validationSchema, "check");

  return (
    <div>
      <Form arr={formFields} formik={formik} target={"Register"} />
    </div>
  );
};

export default RegisterForm;
