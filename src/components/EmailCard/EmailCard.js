import React from "react";

const EmailCard = () => {
  return (
    <div className="email-card email-card">
      <div className="avatar-wrapper">
        <h1 className="avatar">F</h1>
      </div>
      <div className="email-card-details">
        <h3 className="email-card-text">
          From:{" "}
          <span className="email-card-text email-card-text-bold">
            Foo Bar {"<foo.bar@gmail.com>"}
          </span>
        </h3>
        <h3 className="email-card-text">
          Subject:{" "}
          <span className="email-card-text email-card-text-bold">
            Lorem Ipsum
          </span>
        </h3>
        <h3 className="email-card-text truncate">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, hic!
        </h3>
        <h3 className="email-card-text">abcdefghijklmnop</h3>
      </div>
    </div>
  );
};

export default EmailCard;
