import React from "react";
import { useDispatch } from "react-redux";

const FilterButton = ({ text, actionDispatch, selected }) => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(actionDispatch());
  };
  return (
    <button
      className={`btn filter-btn ${selected && "filter-btn-selected"}`}
      onClick={clickHandler}
    >
      {text}
    </button>
  );
};

export default FilterButton;
