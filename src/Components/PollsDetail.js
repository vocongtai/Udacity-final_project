import React from "react";
import { connect } from "react-redux";
import { Navigate, useNavigate, useParams,useLocation} from "react-router-dom";
import { handleAddAnswerQuestion } from "../Actions/questions";


const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  };

  return ComponentWithRouterProp;
};



const PollsDetail = ({ dispatch, question, author, authedUser }) => {

  const navigate =useNavigate();

  //check if authedUser is not set then return 404 page
  if (!author || !question || !authedUser) {
    return <Navigate to="/404" />;
  }

  //ishasVoted
  const isHasVoted =
    question.optionOne.votes.includes(authedUser.id) ||
    question.optionTwo.votes.includes(authedUser.id);

  //calculate percent of each choosen

  const countPercent = (optionChoosen, question) => {

    const countTotal =
      question.optionOne.votes.length + question.optionTwo.votes.length;
    switch (optionChoosen) {
      case "optionOne":
        return (question.optionOne.votes.length / countTotal) * 100;
      case "optionTwo":
        return (question.optionTwo.votes.length / countTotal) * 100;
      default:
        return;
    }
  };

  const optionOneHandle = (event) => {
    event.preventDefault();
    dispatch(handleAddAnswerQuestion(question.id, "optionOne"));
    navigate("/");
  };

  const optionTwoHandle = (event) => {
    event.preventDefault();
    dispatch(handleAddAnswerQuestion(question.id, "optionTwo"));
    navigate("/");
  };

  return (
    <div>
      <h1 className="center">Poll By {author.id}</h1>

      <img
        className="img-ava"
        src={author.avatarURL}
        alt={`avatar of ${author.id}`}
      ></img>

      <div>
        <h2 className="center">Would you rather?</h2>
      </div>
      <div className="container">
        <div className="btn-container">
          <div className="btn-option">
            {!isHasVoted && (
              <button onClick={optionOneHandle}>
                <p className="center">{question.optionOne.text}</p>
                <p className="text-underline">Choose this option</p>
              </button>
            )}
            {isHasVoted && (
              <div className="bar">
                <div
                  className={`progress ${
                    countPercent("optionOne", question) >= 50
                      ? "percent-up"
                      : "percent-down"
                  }`}
                  style={{ width: `${countPercent("optionOne", question)}%` }}
                ></div>
                <div className="percent">
                  {isNaN(countPercent("optionOne", question))
                    ? "0"
                    : countPercent("optionOne", question)}
                  %
                </div>
                <div className="progress-text ">{question.optionOne.text}</div>
              </div>
            )}
          </div>
          <div className="btn-option">
            {!isHasVoted && (
              <button onClick={optionTwoHandle}>
                <p className="center">{question.optionTwo.text}</p>
                <p className="text-underline">Choose this option</p>
              </button>
            )}
            {isHasVoted && (
              <div className="bar">
                <div
                  className={`progress ${
                    countPercent("optionTwo", question) >= 50
                      ? "percent-up"
                      : "percent-down"
                  }`}
                  style={{ width: `${countPercent("optionTwo", question)}%` }}
                ></div>
                <div className="percent">
                  {isNaN(countPercent("optionTwo", question))
                    ? "0"
                    : countPercent("optionTwo", question)}
                  %
                </div>
                <div className="progress-text ">{question.optionTwo.text}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

//mapStateToProps func (redux binding)
const mapStateToProps = ({ authedUser, users, questions },props) => {
  try {
    const { id } = props.router.params;
    const question = Object.values(questions).find(
      (question) => question.id === id
    );

    console.log(typeof question.author);
    const author = Object.values(users).find(
      (user) => user.id === question.author
    );
    return { authedUser, question, author };
  } catch (error) {
    return <Navigate to="/404" />;
  }
};

export default withRouter(connect(mapStateToProps)(PollsDetail));
