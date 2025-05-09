import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { Navigate } from "react-router-dom";
import toast from "react-hot-toast";

const PrivateRoute = ({ children }) => {
  console.log("PRIVATE ROUTE LOGIC");
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (!isLoggedIn) {
    toast.error("Log in first to see your contacts");
    return <Navigate to="/login" />;
  }
  return children;
};

export default PrivateRoute;
