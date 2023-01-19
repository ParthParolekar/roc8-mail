import React, { useEffect, useState } from "react";
import { toggleFavourite } from "../../features/emails/emailsSlice";
import { useDispatch, useSelector } from "react-redux";

const FavouriteButton = ({ id }) => {
  const emails = useSelector((state) => state.emails);
  const dispatch = useDispatch();

  useEffect(() => {
    if (emails.emailCache.favourite.includes(id)) {
      setFavourite(true);
    } else {
      setFavourite(false);
    }
  }, [emails.emailCache.favourite, id]);

  const [favourite, setFavourite] = useState(false);

  const toggleFavouriteHandler = () => {
    dispatch(toggleFavourite(id));
  };
  return (
    <button className="favourite-button" onClick={toggleFavouriteHandler}>
      {favourite ? "★" : "☆"}
    </button>
  );
};

export default FavouriteButton;
