import * as Yup from "yup";

export const signUpValidationSchema = Yup.object({
  email: Yup.string().email("Invalid Email").required("This is required"),
  phone: Yup.string().required("This is required"),
  password: Yup.string()
    .required("This is required")
    .min(8, "Require at least 8 characters"),
});
