import { createSlice } from "@reduxjs/toolkit";

const initialState = { read: false, unread: false, favourites: false };

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    toggleRead: (state) => {
      if (state.read === false) {
        state.read = true;
        state.unread = false;
        state.favourites = false;
      } else {
        state.read = false;
      }
    },
    toggleUnread: (state) => {
      if (state.unread === false) {
        state.unread = true;
        state.read = false;
        state.favourites = false;
      } else {
        state.unread = false;
      }
    },
    toggleFavourites: (state) => {
      if (state.favourites === false) {
        state.favourites = true;
        state.unread = false;
        state.read = false;
      } else {
        state.favourites = false;
      }
    },
  },
});

export const { toggleRead, toggleUnread, toggleFavourites } =
  filterSlice.actions;

export default filterSlice.reducer;
