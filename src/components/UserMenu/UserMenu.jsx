import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { selectUser } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const onLogout = () => {
    dispatch(!selectIsLoggedIn());
  };

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <button
        className={css.logoutBtn}
        type="button"
        onClick={() => dispatch(onLogout())}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
