import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const FETCH_URL = "https://flipkart-email-mock.now.sh/";

const initialState = {
  emails: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const getEmails = createAsyncThunk("emails/fetch", async () => {
  try {
    const response = await axios.get(FETCH_URL);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const emailsSlice = createSlice({
  name: "emails",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getEmails.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getEmails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.emails = action.payload;
    });
  },
});

export default emailsSlice.reducer;
