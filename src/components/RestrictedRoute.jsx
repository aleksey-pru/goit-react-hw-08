import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { Navigate } from "react-router-dom";
import toast from "react-hot-toast";

const RestrictedRoute = ({ component, redirectTo = "/" }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (isLoggedIn) {
    // toast.success("You are already logged in");
    return <Navigate to={redirectTo} />;
  }
  return component;
};

export default RestrictedRoute;
