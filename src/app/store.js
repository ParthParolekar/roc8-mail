import { configureStore } from "@reduxjs/toolkit";
import emailsReducer from "../features/emails/emailsSlice";
import singleEmailReducer from "../features/singleEmail/singleEmailSlice";
export const store = configureStore({
  reducer: {
    emails: emailsReducer,
    singleEmail: singleEmailReducer,
  },
});
