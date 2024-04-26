import { Suspense, lazy } from "react";
import Loader from "./components/Loader/Loader";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import "./App.css";

const HomePage = lazy(() => import("./pages/HomePage"));
const RegistrationPage = lazy(() => import("./pages/RegistrationPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function App() {
  return (
    <div>
      <Layout>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </div>
  );
}

export default App;

// import ContactForm from "./components/ContactForm/ContactForm";
// import SearchBox from "./components/SearchBox/SearchBox";
// import ContactList from "./components/ContactList/ContactList";
// import Loader from "./components/Loader/Loader";
// import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
// import "./App.css";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { fetchContacts } from "./redux/contactsOps";

// function App() {
//   const dispatch = useDispatch();
//   const loading = useSelector((state) => state.contacts.loading);
//   const error = useSelector((state) => state.contacts.error);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <div>
//       <h1>Phonebook</h1>
//       <ContactForm />
//       <SearchBox />
//       {loading && <Loader />}
//       {error && <ErrorMessage />}
//       <ContactList />
//     </div>
//   );
// }

// export default App;
