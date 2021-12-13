import React from "react";

const FormSelect = ({ formik, selectName, optionsArr }) => {
  return (
    <select
      name={selectName}
      onChange={formik.handleChange}
      value={formik.values[selectName]}
    >
      <option label={`Select a ${selectName}`} value={""} />
      {optionsArr.map((item) => (
        <option key={item.id} value={item.id} label={item.name} />
      ))}
    </select>
  );
};

export default FormSelect;
