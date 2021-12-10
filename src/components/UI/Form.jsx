import React from "react";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";

const Form = ({ arr, formik, target, selectName, optionsArr }) => {
  return (
    <form onSubmit={formik.handleSubmit}>
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
      <button type={"submit"}>{target}</button>
    </form>
  );
};

export default Form;
