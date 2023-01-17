import React from "react";

const DateAndTime = ({ time }) => {
  const date = new Date(time).getDate();
  const DD = date.toString().length === 1 ? `0${date}` : date;

  const month = new Date(time).getMonth();
  const MM = month.toString().length === 1 ? `0${month + 1}` : month + 1;

  const year = new Date(time).getFullYear();

  const time12HrFormat = new Date(time).toLocaleTimeString("en-US", {
    hour12: true,
    hour: "numeric",
    minute: "numeric",
  });

  const dateStructure = `${DD}/${MM}/${year} ${time12HrFormat}`;

  return (
    <>
      <h3 className="email-card-text">{dateStructure}</h3>
    </>
  );
};

export default DateAndTime;
