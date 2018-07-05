import React from "react";
import OptionList from "../OptionList/OptionList";
import _ from "lodash";
import "./Question.css";

function Question(props) {
  const { question, onSkip } = props;
  return (
    <div className="question">
      <div>
        <h2>{_.get(question, "title", "")}:</h2>
        {_.get(question, "text", "")}
      </div>
      <br />

      <div>
        <OptionList
          options={_.get(question, "options", [])}
          className="options-list"
          nextQuestion={props.nextQuestion}
        />
        <br />
        <button
          className="button"
          onClick={() => onSkip(_.get(question, "id", ""))}
        >
          Skip
        </button>
      </div>
    </div>
  );
}

export default Question;
