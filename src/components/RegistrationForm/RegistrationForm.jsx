import c from "./RegistrationForm.module.css";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { register } from "../../redux/auth/operations";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(7, "Password must be at least 7 characters")
      .required("Password is required"),
  });

  const handleSubmit = (values, options) => {
    console.log("Registration Form Values:", values);
    dispatch(register(values));
    options.resetForm();
  };

  return (
    <div className={c.formContainer}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage
              name="name"
              component="div"
              className={c.errorMessage}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage
              name="email"
              component="div"
              className={c.errorMessage}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage
              name="password"
              component="div"
              className={c.errorMessage}
            />
          </div>
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
