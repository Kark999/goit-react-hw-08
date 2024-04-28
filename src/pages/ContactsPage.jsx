import ContactList from "../components/ContactList/ContactList";
import Loader from "../components/Loader/Loader";

const ContactsPage = () => {
  return (
    <div>
      <Loader />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
