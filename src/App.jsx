import "./App.css";

import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SeacrhBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";
import { selectError, selectLoading } from "./redux/contactsSlice";
import { BeatLoader } from "react-spinners";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && !error && (
        <BeatLoader
          style={{
            textAlign: "center",
          }}
          color="#ffffff"
        />
      )}
      <ContactList />
    </div>
  );
}

export default App;
