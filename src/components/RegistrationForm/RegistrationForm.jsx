import css from "./RegistrationForm.module.css";
import { useId } from "react";
// import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const registrationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Too Short!")
    .max(50, "Too Long!"),
  email: Yup.string()
    .required("You must enter your email")
    .min(2, "Too Short!")
    .max(50, "Too Long!"),
  password: Yup.string()
    .required("Password is required")
    .min(7, "Too Short!")
    .max(50, "Too Long!"),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    onAddContact(values);

    actions.resetForm();
  };

  const nameFieldId = useId();
  const numberFieldId = useId();

  const onAddContact = (values) => {
    const finalContact = { ...values };
    dispatch(addContact(finalContact));
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={registrationSchema}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor={nameFieldId}>
          Name
        </label>
        <Field className={css.field} type="text" name="name" id={nameFieldId} />
        <ErrorMessage className={css.error} name="name" component="span" />
        <label className={css.label} htmlFor={numberFieldId}>
          Email
        </label>
        <Field
          className={css.field}
          type="email"
          name="email"
          id={numberFieldId}
        />
        <ErrorMessage className={css.error} name="email" component="span" />
        <label className={css.label} htmlFor={numberFieldId}>
          Password
        </label>
        <Field
          className={css.field}
          type="password"
          name="password"
          id={numberFieldId}
        />
        <ErrorMessage className={css.error} name="password" component="span" />
        <button className={css.formBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
