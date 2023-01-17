import React from "react";
import { useNavigate } from "react-router-dom";
import DateAndTime from "../DateAndTime/DateAndTime";
import Avatar from "../Avatar/Avatar";

const EmailCard = ({ user }) => {
  const navigate = useNavigate();

  const {
    id,
    from: { email, name },
    date,
    subject,
    short_description,
  } = user;

  const clickHandler = () => {
    navigate(`/${id}`, { state: user });
  };

  return (
    <div className="email-card email-card" onClick={clickHandler}>
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
        <DateAndTime time={date} />
      </div>
    </div>
  );
};

export default EmailCard;
