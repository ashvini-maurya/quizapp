import React, { Component } from "react";
import "./App.css";
import axios from "axios";

import OptionList from "./components/OptionList/OptionList";
import Question from "./components/Question/Question";
import Result from "./components/Result/Result";

class App extends Component {
  state = {
    ques_no: 0,
    question: []
  };

  componentDidMount() {
    axios
      .get("https://api.myjson.com/bins/hcbs4")
      .then(response => {
        const responseArr = Object.values(response.data);
        const newQuestion = responseArr.map(q => {
          return {
            id: q.id,
            title: q.title,
            text: q.text,
            options: q.options
          };
        });

        const newState = Object.assign({}, this.state, {
          question: newQuestion
        });
        this.setState(newState);
      })
      .catch(error => console.log(error));
  }

  skipQuestion = e => {
    this.setState({
      ques_no:
        this.state.ques_no >= this.state.question.length
          ? this.state.ques_no
          : this.state.ques_no + 1
    });
  };

  render() {
    if (!this.state.question) return <p>failed</p>;
    return (
      <div style={{ width: "250px" }}>
        <Question
          question={this.state.question[this.state.ques_no]}
          onSkip={this.skipQuestion}
        />
        {this.state.ques_no === this.state.question.length && <Result />}
      </div>
    );
  }
}

export default App;
