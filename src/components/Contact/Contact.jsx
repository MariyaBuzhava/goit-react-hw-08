import { useDispatch } from "react-redux";
import s from "./Contact.module.css";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
  };
  return (
    <label htmlFor={id} className={s.lable}>
      <div className={s.contact}>
        <span>{name}</span>
        <span>{number}</span>
      </div>
      <button className={s.button} onClick={handleDeleteContact}>
        Delete
      </button>
    </label>
  );
};

export default Contact;
