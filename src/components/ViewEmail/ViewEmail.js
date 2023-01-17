import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { getEmailData } from "../../features/singleEmail/singleEmailSlice";
import DateAndTime from "../DateAndTime/DateAndTime";
import Avatar from "../Avatar/Avatar";

const ViewEmail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const location = useLocation();

  const singleEmail = useSelector((state) => state.singleEmail);

  const {
    subject,
    date,
    from: { email, name },
  } = location.state;
  useEffect(() => {
    const getEmailBody = async () => {
      dispatch(getEmailData(id));
    };
    getEmailBody();
  }, [dispatch, id]);

  return (
    <aside className="view-email-wrapper">
      {singleEmail.isLoading && "Lodaing..."}
      {singleEmail.isSuccess && !singleEmail.isLoading && (
        <div className="view-email">
          <Avatar initial={name[0].toUpperCase()} />
          <div className="view-email-details">
            <div className="view-email-info">
              <h1 className="view-email-subject">{subject}</h1>
              <DateAndTime time={date} />
            </div>
            <p>{singleEmail.email.body}</p>
          </div>
        </div>
      )}
    </aside>
  );
};

export default ViewEmail;
