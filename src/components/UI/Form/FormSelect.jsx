import React from "react";
import css from "./FormSelect.module.css";

const FormSelect = ({ formik, selectName, optionsArr }) => {
  return (
    <>
      <select
        name={selectName}
        onChange={formik.handleChange}
        value={formik.values[selectName]}
        className={`${css.select} ${
          formik.touched[selectName] && formik.errors[selectName] && css.error
        }`}
      >
        <option label={`Select a ${selectName}`} value={""} />
        {optionsArr.map((item) => (
          <option key={item.id} value={item.id} label={item.name} />
        ))}
      </select>
      {formik.touched[selectName] && formik.errors[selectName] && (
        <p>{formik.errors[selectName]}</p>
      )}
    </>
  );
};

export default FormSelect;
