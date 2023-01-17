import React from "react";
import DateAndTime from "../DateAndTime/DateAndTime";
import { useNavigate } from "react-router-dom";

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
    navigate(`/${id}`);
  };
  return (
    <div className="email-card email-card" onClick={clickHandler}>
      <div className="avatar-wrapper">
        <h1 className="avatar">{name[0].toUpperCase()}</h1>
      </div>
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
        <h3 className="email-card-text">
          <DateAndTime time={date} />
        </h3>
      </div>
    </div>
  );
};

export default EmailCard;
