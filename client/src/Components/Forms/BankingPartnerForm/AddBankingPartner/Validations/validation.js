import * as yup from "yup";
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];
export const Validation = yup.object().shape({
  bank_name: yup.string()
    .required("required"),
    description: yup.string()
    .required("required")
});