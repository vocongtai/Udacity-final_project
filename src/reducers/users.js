import {
  RECEIVE_USERS,
  ADD_QUESTION_USER,
  ADD_ANSWER_USER,
} from "../Actions/users";

//user reducer state default is object

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };

    case ADD_QUESTION_USER:
      return {
        ...state,
        [action.author]: {
          ...state[action.author.id],
          questions: state[action.author.id].questions.concat(action.qid),
        },
      };

    case ADD_ANSWER_USER:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.qid]: action.answer,
          },
        },
      };
    default:
      return state;
  }
}
