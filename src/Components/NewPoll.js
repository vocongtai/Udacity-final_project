import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleAddQuestion } from "../Actions/questions";

const NewPoll = ({ dispatch,questions }) => {

  const navigate =useNavigate();

  const [firstOption, setFirstOption] = useState("");
  const [secondOption, setSecondOption] = useState("");

  const firstOptionHandle = (event) => {
    const firstOption = event.target.value;
    setFirstOption(firstOption);
  };

  const secondOptionHandle = (event) => {
    const secondOption = event.target.value;
    setSecondOption(secondOption);


  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(handleAddQuestion(firstOption, secondOption));

    navigate("/");
    setFirstOption("");
    setSecondOption("");
  };

  return (
    <div>
      <h1 className="center">New Poll</h1>
      <form onSubmit={handleSubmit} className="new-poll">
        <label htmlFor="firstOption">First Option: </label>
        <input
          type="text"
          id="firstOption"
          onChange={firstOptionHandle}
          placeholder="First Option..."
          value={firstOption}
        />
        <label htmlFor="secondOption">Second Option: </label>
        <input
          type="text"
          id="secondOption"
          onChange={secondOptionHandle}
          placeholder="Second Option..."
          value={secondOption}
        />
        <button className="btn-submit" disabled={firstOption ==="" && secondOption === "" }>Submit</button>
      </form>
    </div>
  );
};

const mapStateToProp=({questions})=>({
  questions,
})

export default connect(mapStateToProp)(NewPoll);
