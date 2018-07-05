import React from "react";
import OptionList from "../OptionList/OptionList";
import "./Option.css";

function Option(props) {
  return (
    <div className="option">
      <input
        type="radio"
        name="action"
        key={props.id}
        onClick={e => props.nextQuestion(e)}
      />
      <h6>{props.name}</h6>
    </div>
  );
}

export default Option;
