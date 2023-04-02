import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from "../Utils/Data";

//initialData from Data.js
export function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions,
    })
  );
}

// call _saveQuestion Data.js
export function saveQuestion(optionOneText, optionTwoText, author) {
  return _saveQuestion({ optionOneText, optionTwoText, author });
}

export function saveQuestionAnswer(authedUserid, qid, answer) {
  return _saveQuestionAnswer({
    authedUser: authedUserid,
    qid,
    answer,
  });
}
