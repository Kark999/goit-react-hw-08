import { contactsReducer } from "./contactsSlice/contactsSlice";
import { filtersReducer } from "./filtersSlice/filtersSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});
