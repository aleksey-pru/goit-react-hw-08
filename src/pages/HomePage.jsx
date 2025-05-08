import { BeatLoader } from "react-spinners";
import ContactForm from "../components/ContactForm/ContactForm";
import SearchBox from "../components/SeacrhBox/SearchBox";
import { useSelector } from "react-redux";
import { selectError, selectLoading } from "../redux/contacts/selectors";

const HomePage = () => {
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  return (
    <div>
      <h1 className={"text-6xl text-center hover:text-2xl"}>Phonebook</h1>
      <ContactForm />
      {isLoading && !error && (
        <BeatLoader
          style={{
            textAlign: "center",
          }}
          color="#ffffff"
        />
      )}
    </div>
  );
};

export default HomePage;
