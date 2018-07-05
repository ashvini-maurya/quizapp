import React from "react";
import OptionList from "../OptionList/OptionList";
import "./Option.css";

function nextQuestion(e) {
  // console.log(this);
  // console.log("option button clicked");
  // console.log(e);
  // this.setState({ques_no: this.state.ques_no >= this.state.question.length ? this.state.ques_no : this.state.ques_no + 1})
  console.log("inside nextQuestion");
}

function Option(props) {
  return (
    <div className="option">
      <input
        type="radio"
        name="action"
        key={props.id}
        onClick={e => nextQuestion(e)}
      />
      <h6>{props.name}</h6>
    </div>
  );
}

export default Option;
