import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import OptionList from './component/optionList';
import Question from './component/question';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      ques_no: 0,
      question: []
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.skipQuestion = this.skipQuestion.bind(this);
  }

  componentDidMount(){
    axios
    .get("https://s3-ap-southeast-1.amazonaws.com/grow-fit-stage/uploads/quizapp/quiz.json")
    .then(response => {

      const responseArr = Object.values(response.data);
      const newQuestion = responseArr.map(q => {
        return {
          id: "question_key",
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

  skipQuestion(e){
    console.log(e);
    this.setState({ques_no: this.state.ques_no >= this.state.question.length ? this.state.ques_no : this.state.ques_no + 1})
  }

  render() {
    if (!this.state.question) return <p>failed</p>
    return (
      <div style={{width: "250px"}}>
        <Question question={this.state.question[this.state.ques_no]} onSkip={this.skipQuestion} />
      </div>  
    );
  }
}

export default App;
