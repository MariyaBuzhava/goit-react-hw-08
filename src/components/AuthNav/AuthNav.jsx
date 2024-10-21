import { NavLink } from "react-router-dom";
import c from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <div>
      <NavLink to="/login" className={c.link}>
        Login
      </NavLink>
      <NavLink to="/register" className={c.link}>
        Register
      </NavLink>
    </div>
  );
};

export default AuthNav;
