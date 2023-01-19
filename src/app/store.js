import { configureStore } from "@reduxjs/toolkit";
import emailsReducer from "../features/emails/emailsSlice";
import singleEmailReducer from "../features/singleEmail/singleEmailSlice";
import filterReducer from "../features/filter/filterSlice";
export const store = configureStore({
  reducer: {
    emails: emailsReducer,
    singleEmail: singleEmailReducer,
    filter: filterReducer,
  },
});
