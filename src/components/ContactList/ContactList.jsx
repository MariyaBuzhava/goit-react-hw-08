import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import c from "./ContactList.module.css";
import {
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contacts/selectors";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);

  if (loading) {
    return <p>Loading...</p>;
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
