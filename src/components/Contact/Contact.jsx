import { useDispatch } from "react-redux";
import s from "./Contact.module.css";
import { deleteContact, updateContact } from "../../redux/contacts/operations";
import { useState } from "react";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [updatedName, setUpdatedName] = useState(name);
  const [updatedNumber, setUpdatedNumber] = useState(number);

  const handleUpdate = () => {
    const updates = { name: updatedName, phone: updatedNumber };
    dispatch(updateContact({ id, updates }));
    setIsEditing(false);
  };

  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
  };
  return (
    <label htmlFor={id} className={s.label}>
      {isEditing ? (
        <div className={s.contact}>
          <input
            type="text"
            value={updatedName}
            onChange={(e) => setUpdatedName(e.target.value)}
          />
          <input
            type="text"
            value={updatedNumber}
            onChange={(e) => setUpdatedNumber(e.target.value)}
          />
          <button className={s.button} onClick={handleUpdate}>
            Save
          </button>
          <button className={s.button} onClick={() => setIsEditing(false)}>
            Cancel
          </button>
        </div>
      ) : (
        <div className={s.contact}>
          <span>{name}</span>
          <span>{number}</span>
          <button className={s.button} onClick={() => setIsEditing(true)}>
            Edit
          </button>
          <button className={s.button} onClick={handleDeleteContact}>
            Delete
          </button>
        </div>
      )}
    </label>

    // <label htmlFor={id} className={s.lable}>
    //   <div className={s.contact}>
    //     <span>{name}</span>
    //     <span>{number}</span>
    //   </div>
    //   <button className={s.button} onClick={handleDeleteContact}>
    //     Delete
    //   </button>
    // </label>
  );
};

export default Contact;
