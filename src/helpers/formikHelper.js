import { useFormik } from "formik";
import { postFetch, postImage, postListing } from "./fetchHelper";
import { toast } from "react-hot-toast";
import { useAuthCtx } from "../store/authContext";
import { useHistory } from "react-router-dom";

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
  const history = useHistory();
  const { login, authData } = useAuthCtx();
  return useFormik({
    initialValues: initInputs,
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm, setFieldError }) => {
      // console.log(values);

      if (type === "image") {
        const formData = new FormData();
        formData.append("title", values.title);
        formData.append("body", values.body);
        formData.append("price", values.price);
        // formData.append("user_id", 1);
        formData.append("category_id", 1);
        formData.append("image", values.image);
        // no header needed

        // console.log(formData.get("image"));
        const dbData = await postListing(
          `${url}/${urlEnd}`,
          formData,
          authData.token
        );
        if (dbData.msg) {
          toast.success(`Listing added`);
          // console.log(dbData);
          history.go(0);
          return;
          // resetForm({ values: "" });
        }
        if (dbData.error) {
          console.log(dbData);
          dbData.error.map((item) => {
            setFieldError(item.field, item.errorMsg);
          });
        }
      }
      try {
        if (type === "post") {
          const dbData = await postFetch(`${url}/${urlEnd}`, values);
          console.log(dbData);
          if (dbData.data?.token) {
            login(dbData.data.token, dbData.data.username);
            resetForm({ values: "" });
            history.push("/my-account");
            return;
          }
          if (dbData.msg) {
            toast.success(`User registered`);
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
