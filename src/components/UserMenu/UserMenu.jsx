import { useSelector } from "react-redux";
// import { selectIsLogOut } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  //   const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <button className={css.logoutBtn} type="button">
        Logout
      </button>
    </div>
  );
};

// onClick={() => dispatch(selectIsLogOut())}
export default UserMenu;
