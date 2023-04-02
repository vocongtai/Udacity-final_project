import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

const PriaveSecurity = ({ children, userLogin }) => {
  const redirectUrl = window.location.href
    .toString()
    .split(window.location.host)[1];

  return userLogin ? (
    children
  ) : (
    <Navigate to={`/login/?redirectTo=${redirectUrl}`} />
  );
};

const mapStateToProp = ({ authedUser }) => ({
  userLogin: !!authedUser,
});

export default connect(mapStateToProp)(PriaveSecurity);
