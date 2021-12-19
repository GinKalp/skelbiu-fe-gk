import React, { useEffect, useState } from "react";
import { FormikHandler, initValuesFunc } from "../../helpers/formikHelper";
import * as Yup from "yup";
import Form from "../UI/Form/Form";
import Title from "../UI/Title/Title";
import css from "./ListingForm.module.css";
import { getFetch } from "../../helpers/fetchHelper";

const formFields = [
  { name: "title", placeholder: "Enter title", type: "text" },
  { name: "body", placeholder: "Enter body", type: "text" },
  { name: "price", placeholder: "Enter price", type: "number" },
  { name: "image", placeholder: "Enter image", type: "file" },
];

let initInputs = initValuesFunc(formFields);

const validationSchema = Yup.object({
  title: Yup.string()
    .min(2, "minimum 2 characters")
    .max(15, "maximum 15 characters")
    .required(),
  body: Yup.string().min(4, "minimum 4 characters").required(),
  price: Yup.number().required(),
  image: Yup.string().min(4, "minimum 4 characters"),
});

const ListingForm = ({ item }) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    (async () => {
      const dbData = await getFetch("/listings/categories");
      // console.log(dbData);
      setCategories(dbData.data);
    })();
    return () => {
      setCategories([]);
    };
  }, []);

  let formik;
  if (item) {
    formik = FormikHandler(
      {
        ...initInputs,
        ...item,
        price: item.price.toFixed(2),
      },
      validationSchema,
      "listing",
      `listings/update/${item.id}`
    );
  } else {
    formik = FormikHandler(
      initInputs,
      validationSchema,
      "listing",
      "listings/add-new"
    );
  }

  return (
    <div className={css.wrapper}>
      <Title title={item ? "Update an item" : "Add new item"} />
      <Form
        selectName={"category"}
        optionsArr={categories}
        arr={formFields}
        formik={formik}
        target={!item ? "Add" : "Update"}
      />
    </div>
  );
};

export default ListingForm;
