import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import s from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const newContact = { ...values };
    dispatch(addContact(newContact));
    resetForm();
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name must be less than 50 characters")
      .required("Name is required"),
    number: Yup.string()
      .min(5, "Number should be at least 5 characters")
      .required("Phone number is required")
      .matches(
        /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/,
        "Phone number is not valid, use xxx-xx-xx format"
      ),
  });

  return (
    <div className={s.formWrapper}>
      <Formik
        initialValues={{ name: "", number: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={s.form}>
          <label className={s.label}>
            <span>Name</span>
            <Field name="name" type="text" className={s.input} />
            <ErrorMessage name="name" component="div" />
          </label>
          <label className={s.label}>
            <span>Number</span>
            <Field name="number" type="tel" className={s.input} />
            <ErrorMessage name="number" component="div" />
          </label>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
