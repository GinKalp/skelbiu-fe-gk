import { useFormik } from "formik";
import { postFetch } from "./fetchHelper";
import { toast } from "react-hot-toast";

const url = process.env.URL;

export function initValuesFunc(arr) {
  const obj = {};
  arr.forEach((item) => {
    obj[item.name] = "";
  });
  // console.log(obj);
  return obj;
}

export function FormikHandler(initInputs, validationSchema, type, urlEnd) {
  return useFormik({
    initialValues: initInputs,
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      // console.log(values);
      try {
        if (type === "post") {
          const dbData = await postFetch(`${url}/${urlEnd}`);
          if (dbData.msg) {
            toast.success(`data sent`);
            resetForm({ values: "" });
          }
        }
        if (type === "check") {
          toast.success("fields valid");
          resetForm({ values: "" });
        }
      } catch (error) {
        console.log(error);
      }
    },
  });
}
