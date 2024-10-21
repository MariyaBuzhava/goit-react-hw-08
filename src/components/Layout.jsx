import { Outlet } from "react-router-dom";
import AppBar from "./AppBar/AppBar.jsx";

const Layout = ({ isLoggedIn, user }) => {
  return (
    <div>
      <AppBar isLoggedIn={isLoggedIn} user={user} />
      <Outlet />
    </div>
  );
};

export default Layout;
