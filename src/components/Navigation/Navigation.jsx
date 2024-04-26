import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./Navigation.module.css";

export const Navigation = () => {
  const { isLoggedIn } = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

// import { NavLink } from "react-router-dom";
// import clsx from "clsx";
// import { Routes, Route } from "react-router-dom";
// import Loader from "../Loader/Loader";
// import { Suspense, lazy } from "react";
// import css from "./Navigation.module.css";

// const HomePage = lazy(() => import("../../pages/HomePage"));
// const RegistrationPage = lazy(() => import("../../pages/RegistrationPage"));
// const LoginPage = lazy(() => import("../../pages/LoginPage"));
// const ContactsPage = lazy(() => import("../../pages/ContactsPage"));
// const NotFoundPage = lazy(() => import("../../pages/NotFoundPage"));

// const getNavLinkClassName = ({ isActive }) =>
//   clsx(css.navLink, { [css.active]: isActive });

// const Navigation = () => {
//   return (
//     <div>
//       <header className={css.header}>
//         <nav className={css.nav}>
//           <NavLink className={getNavLinkClassName} to="/">
//             Home
//           </NavLink>
//           <NavLink className={getNavLinkClassName} to="/register">
//             Register
//           </NavLink>
//           <NavLink className={getNavLinkClassName} to="/login">
//             Log In
//           </NavLink>
//           <NavLink className={getNavLinkClassName} to="/contacts">
//             Contacts
//           </NavLink>
//         </nav>
//       </header>
//       <main>
//         <Suspense fallback={<Loader />}>
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/register" element={<RegistrationPage />} />
//             <Route path="/login" element={<LoginPage />} />
//             <Route path="/contacts" element={<ContactsPage />} />
//             <Route path="*" element={<NotFoundPage />} />
//           </Routes>
//         </Suspense>
//       </main>
//     </div>
//   );
// };

// export default Navigation;
