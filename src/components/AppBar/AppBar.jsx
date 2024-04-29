import Navigation from "../Navigation/Navigation";
import { UserMenu } from "../UserMenu/UserMenu";
import { useSelector } from "react-redux";
import AuthNav from "../AuthNav/AuthNav";
import css from "./AppBar.module.css";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export const AppBar = () => {
  const { isLoggedIn } = useSelector(selectIsLoggedIn);

  return (
    <div className={css.appBar}>
      <Navigation />
      {/* <AuthNav /> */}
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </div>
  );
};
