import { AppBar } from "../AppBar/AppBar";
import css from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <header className={css.header}>
        <AppBar />
        {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
