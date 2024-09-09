"use client";
import { useState } from "react";
import { useFormik } from "formik";
import { Input, Loader } from "@components/ui";
import styles from "./style.module.scss";
import { EnvelopeFill, LockFill, TelephoneFill } from "react-bootstrap-icons";
import { signUpFormInitialValues } from "@utils/formik/initialValues";
import { signUpValidationSchema } from "@utils/formik/validationSchema";
import { BASE_URL } from "@utils/routesConstant";
import { ErrorText } from "@styles/styledComponent";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { showToast } from "@utils/helpers";

const SignupForm = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const formik = useFormik({
    initialValues: signUpFormInitialValues,
    validationSchema: signUpValidationSchema,
    onSubmit: (values) => {
      formSubmitHandler(values);
    },
  });

  async function formSubmitHandler(values) {
    console.log("form submit", values);
    setIsLoading(true);
    try {
      const apiResponse = await axios.post(`${BASE_URL}/v1/user/`, values);
      setIsLoading(false);
      props.isSubmitted(true);
      //   return { response: apiResponse.data, error: false };
    } catch (error) {
      setIsLoading(false);
      showToast("Form Submission Error", "error");
      //   let errorMsg;
      //   if (error.response?.status === 400) {
      //     errorMsg = { status: 400, errorData: error.response.data };
      //   }
      //   return { response: false, error: errorMsg };
    }
  }

  //   function formSubmitHandler(values) {
  //     console.log("form submit", values);
  //     setIsLoading(true);
  //     fetch(`${BASE_URL}/v1/user/`, {
  //       // Adding method type
  //       method: "POST",

  //       // Adding body or contents to send
  //       body: JSON.stringify(values),

  //       // Adding headers to the request
  //       headers: {
  //         "Content-type": "application/json; charset=UTF-8",
  //       },
  //     })
  //       // Converting to JSON
  //       .then((response) => response.json())

  //       // Displaying results to console
  //       .then((json) => console.log(json));
  //   }

  console.log("form submit fsd", isLoading);

  return (
    <div className={styles.signupFormBlock}>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <Input
            label="Email"
            type="email"
            fieldProps={formik.getFieldProps("email")}
            icon={<EnvelopeFill />}
          />
          {formik.touched.email && formik.errors.email && (
            <ErrorText className={styles.errorText}>
              {formik.errors.email}
            </ErrorText>
          )}
        </div>
        <div>
          <Input
            label="Phone"
            type="text"
            name="phone"
            fieldProps={formik.getFieldProps("phone")}
            icon={<TelephoneFill />}
          />
          {formik.touched.phone && formik.errors.phone && (
            <ErrorText className={styles.errorText}>
              {formik.errors.phone}
            </ErrorText>
          )}
        </div>
        <div>
          <Input
            label="Password"
            type="password"
            name="password"
            fieldProps={formik.getFieldProps("password")}
            icon={<LockFill />}
          />
          {formik.touched.password && formik.errors.password && (
            <ErrorText className={styles.errorText}>
              {formik.errors.password}
            </ErrorText>
          )}
        </div>
        <div>
          <button
            type="submit"
            className={
              !(formik.isValid && formik.dirty) || isLoading
                ? "disabledBtn"
                : "submitBtn primaryBtn"
            }
          >
            {isLoading ? <Loader /> : "SIGN UP"}
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SignupForm;
