import React from "react";
import { FormikHandler, initValuesFunc } from "../../helpers/formikHelper";
import Form from "../UI/Form";
import * as Yup from "yup";

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
  const formik = FormikHandler(initInputs, validationSchema, "check");

  return (
    <div>
      <Form arr={formFields} formik={formik} target={"Login"} />
    </div>
  );
};

export default LoginForm;
