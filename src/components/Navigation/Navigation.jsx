import clsx from "clsx";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import AuthNav from "../AuthNav/AuthNav";

const Navigation = () => {
  const setActiveClass = ({ isActive }) => {
    return clsx(isActive && "text-red-500");
  };
  const isAuthenticated = useSelector(selectIsLoggedIn);
  return (
    <div>
      <nav className={"flex justify-between gap-2 text-2xl"}>
        <NavLink className={setActiveClass} to="/">
          Home
        </NavLink>
        <NavLink className={setActiveClass} to="/contacts">
          Contacts
        </NavLink>
        {isAuthenticated ? <UserMenu /> : <AuthNav />}
        {/* <NavLink className={setActiveClass} to="/login">
          Login
        </NavLink>
        <NavLink className={setActiveClass} to="/register">
          Register
        </NavLink> */}
      </nav>
    </div>
  );
};

export default Navigation;
