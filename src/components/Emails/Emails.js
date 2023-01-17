import React, { useEffect } from "react";
import EmailCard from "../EmailCard/EmailCard";
import { useDispatch, useSelector } from "react-redux";
import { getEmails } from "../../features/emails/emailsSlice";

const Emails = () => {
  const dispatch = useDispatch();
  const emails = useSelector((state) => state.emails);

  useEffect(() => {
    const fetchAllEmails = async () => {
      dispatch(getEmails());
    };
    fetchAllEmails();
  }, [dispatch]);
  return (
    <div className="emails">
      {emails?.emails?.list?.map((email) => (
        <EmailCard key={email.id} user={email} />
      ))}
    </div>
  );
};

export default Emails;
