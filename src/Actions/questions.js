import { saveQuestion, saveQuestionAnswer } from "../Utils/Api";
import { addQuestionUser, addAnswerUser } from "./users";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_ANSWER_QUESTION = "ADD_ANSWER_QUESTION";

export function receiverQuestion(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function addAnswerQuestion(author, qid, answer) {
  return {
    type: ADD_ANSWER_QUESTION,
    author,
    qid,
    answer,
  };
}

export function handleAddQuestion(firstOption, secondOption) {
  return (dispatch, getState) => {
      const { authedUser } = getState();

      return saveQuestion(firstOption, secondOption, authedUser)
          .then((question) => {
              dispatch(addQuestion(question));
              dispatch(addQuestionUser(question))
          })
  };
}

export function handleAddAnswerQuestion(qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    return saveQuestionAnswer(authedUser.id, qid, answer).then(() => {
      dispatch(addAnswerUser(authedUser.id, qid, answer));
      dispatch(addAnswerQuestion(authedUser.id, qid, answer));
    });
  };
}
