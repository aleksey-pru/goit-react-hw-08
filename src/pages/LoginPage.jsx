import { useSelector } from "react-redux";
import LoginForm from "../components/LoginForm/LoginForm";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { Navigate } from "react-router-dom";

const LoginPage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (isLoggedIn) {
    return <Navigate to="/" />;
  }
  return (
    <div
      className={
        "color: rgb(248, 240, 240) bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5 w-sm"
      }
    >
      <LoginForm />
    </div>
  );
};

export default LoginPage;
