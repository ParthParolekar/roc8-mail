import React, { useEffect, useState } from "react";
import EmailCard from "../EmailCard/EmailCard";
import { useDispatch, useSelector } from "react-redux";
import { getEmails } from "../../features/emails/emailsSlice";

const Emails = () => {
  const dispatch = useDispatch();
  const emails = useSelector((state) => state.emails.emails.list);
  const emailsState = useSelector((state) => state.emails);
  const emailCache = useSelector((state) => state.emails.emailCache);
  const filter = useSelector((state) => state.filter);
  const [displayData, setDisplayData] = useState(null);

  useEffect(() => {
    const fetchAllEmails = async () => {
      dispatch(getEmails());
    };
    fetchAllEmails();
  }, [dispatch]);

  useEffect(() => {
    setDisplayData(emails);

    if (filter.read && !filter.unread) {
      setDisplayData(
        emails.filter((email) => emailCache.read.includes(email.id))
      );
    }

    if (filter.unread && !filter.read) {
      setDisplayData(
        emails.filter((email) => !emailCache.read.includes(email.id))
      );
    }

    if (filter.favourites) {
      setDisplayData(
        emails.filter((email) => emailCache.favourite.includes(email.id))
      );
    }
  }, [emails, filter, emailCache]);

  return (
    <div className="emails">
      {displayData?.map((email) => (
        <EmailCard key={email.id} user={email} />
      ))}

      {displayData?.length === 0 && (
        <h1>No emails found! Try using different filters.</h1>
      )}

      {emailsState.isLoading && <h3>Loading...</h3>}

      {emailsState.isError && <h3>{emailsState.message}</h3>}
    </div>
  );
};

export default Emails;
