import React from "react";
import FilterButton from "../FilterButton/FilterButton";
import {
  toggleFavourites,
  toggleRead,
  toggleUnread,
} from "../../features/filter/filterSlice";
import { useSelector } from "react-redux";

const FIlterOptions = () => {
  const filter = useSelector((state) => state.filter);
  return (
    <nav className="filter-button-container">
      <h5>Filter By:</h5>
      <FilterButton
        text={"Read"}
        actionDispatch={toggleRead}
        selected={filter.read}
      />
      <FilterButton
        text={"Unread"}
        actionDispatch={toggleUnread}
        selected={filter.unread}
      />
      <FilterButton
        text={"Favourites"}
        actionDispatch={toggleFavourites}
        selected={filter.favourites}
      />
    </nav>
  );
};

export default FIlterOptions;
