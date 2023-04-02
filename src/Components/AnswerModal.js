import React from "react";
import { connect } from "react-redux";
import Card from "./Card";

const AnswerModal = ({ questions, listQuestion, formatDate, title, users }) => {
  return (
    <div>
      <div id="modal">
        <header>
          <h3>{title}</h3>
        </header>
        <section>
          <ul className="grid-container">
            {questions.filter(listQuestion).map((question) => {
              return (
                <Card
                  key={question.id}
                  question={question}
                  formatDate={formatDate}
                  author={users[question.author]}
                  questions={questions}
                />
              );
            })}
          </ul>
        </section>
      </div>
    </div>
  );
};

const mapStateToProp = () => ({});

export default connect(mapStateToProp)(AnswerModal);
