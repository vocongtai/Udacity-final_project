import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Card = ({ question, author, formatDate }) => {
  return (
    <Fragment>
      <Link to={"questions/" + question.id}>
        <li className="grid-item">
          <img src= {author?.avatarURL} alt="author" className="avatar"></img>
          <span>Author: {author.id}</span>
          <p className="center">Option 1: {question.optionOne.text}</p>
          <p className="center">Option 2: {question.optionTwo.text}</p>
          <div>{formatDate(question.timestamp)}</div>
          <button className="button-show">Show</button>
        </li>
      </Link>
    </Fragment>
  );
};

const mapStateToProp = () => ({});

export default connect(mapStateToProp)(Card);
