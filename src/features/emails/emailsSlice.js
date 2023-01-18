import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const FETCH_URL = "https://flipkart-email-mock.now.sh/";

const readEmailId =
  localStorage.getItem("read") !== null
    ? JSON.parse(localStorage.getItem("read"))
    : [];

const favouriteEmailId =
  localStorage.getItem("favourite") !== null
    ? JSON.parse(localStorage.getItem("favourite"))
    : [];

const initialState = {
  emails: [],
  emailCache: { read: readEmailId, favourite: favouriteEmailId },
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const getEmails = createAsyncThunk("emails/fetch", async (thunkAPI) => {
  try {
    const response = await axios.get(FETCH_URL);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const emailsSlice = createSlice({
  name: "emails",
  initialState,
  reducers: {
    readEmail: (state, action) => {
      if (!state.emailCache.read.includes(action.payload)) {
        state.emailCache.read = [...state.emailCache.read, action.payload];
        localStorage.setItem(
          "read",
          JSON.stringify([...state.emailCache.read])
        );
      }
    },
    toggleFavourite: (state, action) => {
      if (!state.emailCache.favourite.includes(action.payload)) {
        state.emailCache.favourite = [
          ...state.emailCache.favourite,
          action.payload,
        ];
      } else {
        state.emailCache.favourite = state.emailCache.favourite.filter(
          (id) => id !== action.payload
        );
      }
      localStorage.setItem(
        "favourite",
        JSON.stringify([...state.emailCache.favourite])
      );
    },
  },
  extraReducers(builder) {
    builder.addCase(getEmails.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getEmails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.emails = action.payload;
    });
    builder.addCase(getEmails.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.emails = [];
      state.isError = true;
      state.message = "Something went wrong";
    });
  },
});

export const { readEmail, toggleFavourite } = emailsSlice.actions;

export default emailsSlice.reducer;
