import React, { useState } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import {logginHandle} from "../Actions/authedUser"

const Login = ({ dispatch, userLogin }) => {
  const [userName, setUserName] = useState("tylermcginnis");
  const [passWord, setPassword] = useState("abc321");

  if(userLogin){
    const params=new URLSearchParams(window.location.search);
    const redirectURL=params.get('redirectTo');
    return <Navigate to={redirectURL ?redirectURL : "/"}/>
  }

  const userNameHandle = (event) => {
    //
    const username = event.target.value;
    setUserName(username);
  };

  const passwordHandle = (event) => {
    //
    const password = event.target.value;
    setPassword(password);
  };

  const loginHandle = (event) => {
    //
    event.preventDefault();
    dispatch(logginHandle(userName,passWord))

    setUserName("");
    setPassword("");
  };

  return (
    <div className="login-container">
        <h1 className="center" data-testid="login-header">Welcome to Poll Page App! </h1>
      <form onSubmit={loginHandle} className="login-form">
        <label className="center" data-testid="userName-label">Username: </label>
        <input
          type="text"
          placeholder="Input Username ...."
          name="userName"
          id="userName"
          onChange={userNameHandle}
          value={userName}
          data-testid="username-input"
        />
        <label className="center" data-testid="password-label">Password: </label>
        <input
          type="password"
          placeholder="***"
          name="password"
          id="password"
          onChange={passwordHandle}
          value={passWord}
          data-testid="password-input"
        />
        <button className="btn-login" data-testid="login-btn">Login</button>
      </form>
    </div>
  );
};

const mapStateToProps = ({ authedUser }) => {
  return {
    userLogin: !!authedUser,
  };
};

export default connect(mapStateToProps)(Login);
