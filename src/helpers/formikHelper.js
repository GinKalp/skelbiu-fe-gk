import { useFormik } from "formik";
import { postFetch, postImage } from "./fetchHelper";
import { toast } from "react-hot-toast";
import { useAuthCtx } from "../store/authContext";

const url = process.env.REACT_APP_URL;

export function initValuesFunc(arr) {
  const obj = {};
  arr.forEach((item) => {
    obj[item.name] = "";
  });
  // console.log(obj);
  return obj;
}

export function FormikHandler(initInputs, validationSchema, type, urlEnd) {
  const { login } = useAuthCtx();
  return useFormik({
    initialValues: initInputs,
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      // console.log(values);

      if (type === "image") {
        const formData = new FormData();
        formData.append("title", values.title);
        formData.append("body", values.body);
        formData.append("price", values.price);
        formData.append("user_id", 1);
        formData.append("category_id", 1);
        formData.append("image", values.image);
        // no header needed

        console.log(formData.get("image"));
        const dbData = await postImage(`${url}/${urlEnd}`, formData);
        if (dbData.msg) {
          toast.success(`data sent`);
          console.log(dbData);
          // resetForm({ values: "" });
        }
      }
      try {
        if (type === "post") {
          const dbData = await postFetch(`${url}/${urlEnd}`, values);
          console.log(dbData);
          if (dbData.data.token) {
            login(dbData.data.token, dbData.data.username);
            resetForm({ values: "" });
            return;
          }
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
