import React from "react";

const FormInput = ({ item, formik }) => {
  return (
    <>
      <h4>{item.placeholder}:</h4>
      <input
        name={item.name}
        onChange={formik.handleChange}
        value={formik.values[item.name]}
        type={item.type}
        onBlur={formik.handleBlur}
        placeholder={item.placeholder}
      />
      {formik.touched[item.name] && formik.errors[item.name] && (
        <p>{formik.errors[item.name]}</p>
      )}
    </>
  );
};

export default FormInput;
