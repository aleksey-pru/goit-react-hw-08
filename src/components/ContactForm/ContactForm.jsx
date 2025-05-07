import { Field, Form, Formik, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import s from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const FeedbackSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
});

const initialValues = {
  username: "",
  phone: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();
  const handleAddContact = (data, actions) => {
    const newContact = {
      name: data.username,
      phone: data.phone,
    };
    dispatch(addContact(newContact));
    actions.resetForm();
  };
  const nameFieldId = useId();
  const phoneFieldId = useId();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleAddContact}
      validationSchema={FeedbackSchema}
    >
      <Form>
        <div className={s.fieldWrapper}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field type="text" name="username" id={nameFieldId} />
          <ErrorMessage
            className={s.errorMessage}
            name="username"
            component="span"
          />
        </div>
        <div className={s.fieldWrapper}>
          <label htmlFor={phoneFieldId}>Phone</label>
          <Field type="text" name="phone" id={phoneFieldId} />
          <ErrorMessage
            className={s.errorMessage}
            name="phone"
            component="span"
          />
        </div>
        <button className={s.submitBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
