import { getInitialData } from "../Utils/Api";
import { receiverQuestion } from "./questions";
import { receiverUsers } from "./users";

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiverQuestion(questions));
      dispatch(receiverUsers(users));
    });
  };
}
