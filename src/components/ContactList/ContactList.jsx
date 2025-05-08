import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

import { selectFilteredContacts } from "../../redux/contacts/selectors";
// import { selectFilteredContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const filteredData = useSelector(selectFilteredContacts);

  return (
    <ul className={s.itemContainer}>
      {filteredData.map((contact) => (
        <li key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
