import s from "./Contact.module.css";
import { FaPhone } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ data: { id, name, phone } }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between border border-white1 shadow-md rounded-xl p-2 text-white bg-gray-800">
      <div className="flex flex-col text-center gap-0.5">
        <p className="flex items-baseline gap-2">
          <BsPersonFill />
          {name}
        </p>

        <p className="flex items-baseline gap-2">
          <FaPhone />
          {phone}
        </p>
      </div>
      <button
        className="btn btn-primary"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
