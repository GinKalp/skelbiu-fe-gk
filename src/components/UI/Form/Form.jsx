import React from "react";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import css from "./Form.module.css";
import Button from "../Button/Button";

const Form = ({ arr, formik, target, selectName, optionsArr }) => {
  return (
    <form className={css.form} onSubmit={formik.handleSubmit}>
      {arr.map((item) => (
        <FormInput key={item.name} item={item} formik={formik} />
      ))}
      {selectName && (
        <>
          <br />
          <FormSelect
            formik={formik}
            selectName={selectName}
            optionsArr={optionsArr}
          />
        </>
      )}
      <br />
      <Button type={"submit"}>{target}</Button>
    </form>
  );
};

export default Form;
