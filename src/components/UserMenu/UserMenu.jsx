import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <div className="flex gap-3">
      <span>Welcome, {user.name}</span>
      <button
        onClick={() => dispatch(logoutThunk())}
        className="btn btn-primary"
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
