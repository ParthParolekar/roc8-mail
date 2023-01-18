import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DateAndTime from "../DateAndTime/DateAndTime";
import Avatar from "../Avatar/Avatar";
import { useSelector } from "react-redux";

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

  const clickHandler = () => {
    navigate(`/${id}`, { state: user });
  };
  useEffect(() => {
    if (emails.emailCache.read.includes(id)) {
      setRead(true);
    }
  }, [emails.emailCache.read]);
  return (
    <div
      className={`email-card ${read && "email-card-read"}`}
      onClick={clickHandler}
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
        <DateAndTime time={date} />
      </div>
    </div>
  );
};

export default EmailCard;
