import React from "react";
import css from "./FormInput.module.css";

const FormInput = ({ item, formik }) => {
  return (
    <>
      <h4 className={css.label}>{item.placeholder}:</h4>
      {item.name === "image" ? (
        <input
          name={item.name}
          className={
            formik.touched[item.name] && formik.errors[item.name] && css.error
          }
          onChange={(e) => formik.setFieldValue("image", e.target.files[0])}
          type={item.type}
          onBlur={formik.handleBlur}
          placeholder={item.placeholder}
        />
      ) : (
        <input
          name={item.name}
          onChange={formik.handleChange}
          className={
            formik.touched[item.name] && formik.errors[item.name] && css.error
          }
          value={formik.values[item.name]}
          type={item.type}
          onBlur={formik.handleBlur}
          placeholder={item.placeholder}
        />
      )}

      {formik.touched[item.name] && formik.errors[item.name] && (
        <p>{formik.errors[item.name]}</p>
      )}
    </>
  );
};

export default FormInput;
