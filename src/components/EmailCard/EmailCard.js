import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import DateAndTime from "../DateAndTime/DateAndTime";
import Avatar from "../Avatar/Avatar";
import FavouriteButton from "../FavouriteButton/FavouriteButton";

const EmailCard = ({ user }) => {
  const navigate = useNavigate();
  const emails = useSelector((state) => state.emails);

  const [read, setRead] = useState(false);

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

  useEffect(() => {
    if (emails.emailCache.read.includes(id)) {
      setRead(true);
    }
  }, [emails.emailCache.read, id]);

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
          <FavouriteButton id={id} />
        </div>
      </div>
    </div>
  );
};

export default EmailCard;
