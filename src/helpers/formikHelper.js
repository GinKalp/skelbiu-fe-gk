import { useFormik } from "formik";
import { postFetch, postListing } from "./fetchHelper";
import { toast } from "react-hot-toast";
import { useAuthCtx } from "../store/authContext";
import { useHistory } from "react-router-dom";

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

      if (type === "listing") {
        // console.log(values);
        const formData = new FormData();
        formData.append("title", values.title);
        formData.append("body", values.body);
        formData.append("price", values.price);
        formData.append("category_id", values.category);
        formData.append("image", values.image);
        // no header needed
        // console.log(formData.get("category_id"));
        const dbData = await postListing(
          `/${urlEnd}`,
          formData,
          authData.token
        );
        if (dbData.msg) {
          toast.success(dbData.msg);
          history.push("/");
          return;
        }
        if (dbData.error) {
          dbData.error.map((item) => {
            setFieldError(item.field, item.errorMsg);
            return false;
          });
        }
      }
      try {
        if (type === "post") {
          const dbData = await postFetch(`/${urlEnd}`, values);
          if (dbData.error) {
            if (Array.isArray(dbData.error)) {
              dbData.error.map((item) => {
                setFieldError(item.field, item.errorMsg);
                return false;
              });
              return;
            }
            setFieldError("username", dbData.error);
            return;
          }
          if (dbData.data?.token) {
            // login outcome
            login(dbData.data.token, dbData.data.username);
            resetForm({ values: "" });
            history.push("/my-account");
            return;
          }
          if (dbData.msg) {
            // register outcome
            toast.success(`User registered`);
            resetForm({ values: "" });
            history.push("/login");
          }
        }
        if (type === "check") {
          // for testing
          toast.success("fields valid");
          resetForm({ values: "" });
        }
      } catch (error) {
        // console.log(error);
      }
    },
  });
}
