import { useDispatch, useSelector } from "react-redux";
import ContactList from "../components/ContactList/ContactList";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contacts/operations";
import { BeatLoader } from "react-spinners";
import ContactForm from "../components/ContactForm/ContactForm";
import { selectError, selectLoading } from "../redux/contacts/selectors";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <ContactForm />
      {isLoading && !error && (
        <BeatLoader className="text-center" color="#ffffff" />
      )}
      <ContactList />
    </div>
  );
};

export default ContactsPage;
