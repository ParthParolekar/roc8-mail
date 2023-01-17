import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const FETCH_URL = "https://flipkart-email-mock.now.sh/?id=";

const initialState = {
  email: {},
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const getEmailData = createAsyncThunk(
  "singleEmail/fetch",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`${FETCH_URL}${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const singleEmailSlice = createSlice({
  name: "singleEmail",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getEmailData.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getEmailData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.email = action.payload;
    });
    builder.addCase(getEmailData.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.email = [];
      state.isError = true;
      state.message = "Something went wrong";
    });
  },
});

export default singleEmailSlice.reducer;
