import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import c from "./ContactList.module.css";
import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contactsSlice";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Oops! Something went wrong. Please try again later.</p>;
  }

  return (
    <div className={c.contactList}>
      {filteredContacts.map((contact) => (
        <Contact key={contact.id} {...contact} />
      ))}
    </div>
  );
};

export default ContactList;
