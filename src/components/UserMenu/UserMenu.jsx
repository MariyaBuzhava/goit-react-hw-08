import c from "./UserMenu.module.css";

import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <div className={c.userMenu}>
      <p className={c.userName}>Welcome, {user.name}</p>
      <button
        type="button"
        className={c.exitButton}
        onClick={() => dispatch(logout())}
      >
        Exit
      </button>
    </div>
  );
};

export default UserMenu;
