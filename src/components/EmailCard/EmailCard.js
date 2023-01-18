import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DateAndTime from "../DateAndTime/DateAndTime";
import Avatar from "../Avatar/Avatar";
import { toggleFavourite } from "../../features/emails/emailsSlice";

const EmailCard = ({ user }) => {
  const navigate = useNavigate();
  const emails = useSelector((state) => state.emails);
  const dispatch = useDispatch();

  const [read, setRead] = useState(false);
  const [favourite, setFavourite] = useState(false);

  const {
    id,
    from: { email, name },
    date,
    subject,
    short_description,
  } = user;

  const clickHandler = (e) => {
    if (e.target.nodeName !== "BUTTON") {
      navigate(`/${id}`, { state: user });
    }
  };

  const toggleFavouriteHandler = () => {
    dispatch(toggleFavourite(id));
  };

  useEffect(() => {
    if (emails.emailCache.read.includes(id)) {
      setRead(true);
    }
  }, [emails.emailCache.read, id]);

  useEffect(() => {
    if (emails.emailCache.favourite.includes(id)) {
      setFavourite(true);
    } else {
      setFavourite(false);
    }
  }, [emails.emailCache.favourite, id]);

  return (
    <div
      className={`email-card ${read && "email-card-read"}`}
      onClick={(e) => clickHandler(e)}
    >
      <Avatar initial={name[0].toUpperCase()} />

      <div className="email-card-details">
        <h3 className="email-card-text">
          From:{" "}
          <span className="email-card-text email-card-text-bold">
            {`${name} <${email}>`}
          </span>
        </h3>

        <h3 className="email-card-text">
          Subject:{" "}
          <span className="email-card-text email-card-text-bold">
            {subject}
          </span>
        </h3>

        <h3 className="email-card-text truncate">{short_description}</h3>

        <div className="email-card-flex">
          <DateAndTime time={date} />
          <button className="favourite-button" onClick={toggleFavouriteHandler}>
            {favourite ? "★" : "☆"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailCard;
