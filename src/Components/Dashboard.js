import React, { Fragment } from "react";
import { connect } from "react-redux";
import {Navigate} from 'react-router-dom'
import { formatDate } from "../Utils/helper";
import AnswerModal from "./AnswerModal";

const Dashboard = ({ questions, authedUser, users }) => {


  if( !questions || !authedUser || !users){
    return <Navigate to="/login"/>
  }

    console.log(questions);

  // filter questions unanswered
  const questionUnaswerd = (question) =>
    !question.optionOne.votes.includes(authedUser.id) &&
    !question.optionTwo.votes.includes(authedUser.id);

  //filter question answered
  const questionAswerd = (question) =>
    question.optionOne.votes.includes(authedUser.id) ||
    question.optionTwo.votes.includes(authedUser.id);

  const titleNewQuestions = "New Questions";
  const titleAnsweredQuestion = "Answered Questions";

  console.log("question unanswer: ", questions.filter(questionUnaswerd));


  return (
    <Fragment>
      <AnswerModal
        questions={questions}
        listQuestion={questionUnaswerd}
        formatDate={formatDate}
        title={titleNewQuestions}
        users={users}
      />
      <AnswerModal
        questions={questions}
        listQuestion={questionAswerd}
        formatDate={formatDate}
        title={titleAnsweredQuestion}
        users={users}
      />
    </Fragment>
  );
};

const mapStateToProp = ({ authedUser, questions, users }) => ({
  authedUser,
  questions: Object.values(questions).sort((a, b) => b.timestamp - a.timestamp),
  users,
});

export default connect(mapStateToProp)(Dashboard);
