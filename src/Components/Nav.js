import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { logoutHandle } from "../Actions/authedUser";

const Nav = ({ dispatch, authedUserID }) => {
  const navigate = useNavigate();

  const logOutHandle = (event) => {
    event.preventDefault();
    dispatch(logoutHandle());
    navigate("/login");
  };

  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/leaderboard">LeaderBoard</Link>
        </li>
        <li>
          <Link to="/new">New Poll</Link>
        </li>
      </ul>
      <div className="logout-container">
        <span className="logout-user">{authedUserID}</span>
        <button onClick={logOutHandle} className="logout-btn">
          Log out
        </button>
      </div>
    </nav>
  );
};

const mapStateToProp = ({ authedUser }) => ({
  authedUserID: authedUser.id,
});

export default connect(mapStateToProp)(Nav);
