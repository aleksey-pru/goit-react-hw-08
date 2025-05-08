import { Field, Form, Formik, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import s from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

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
      <Form className={"w-sm flex flex-col"}>
        <div>
          <div className={"flex flex-col"}>
            <label
              className={
                "text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight mb-3"
              }
              htmlFor={nameFieldId}
            >
              Name
            </label>
            <Field
              className={"input"}
              type="text"
              name="username"
              id={nameFieldId}
            />
            <ErrorMessage
              className={"text-red-500 dark:text-red-400 mt-2 text-sm"}
              name="username"
              component="span"
            />
          </div>
          <div className={"flex flex-col mb-5"}>
            <label
              className={
                "text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight mb-3"
              }
              htmlFor={phoneFieldId}
            >
              Phone
            </label>
            <Field
              className={"input"}
              type="text"
              name="phone"
              id={phoneFieldId}
            />
            <ErrorMessage
              className={"text-red-500 dark:text-red-400 mt-2 text-sm"}
              name="phone"
              component="span"
            />
          </div>
        </div>
        <button
          className={"flex justify-center btn w-30 mb-10 hover:bg-red-700"}
          type="submit"
        >
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
