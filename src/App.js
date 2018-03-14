import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import OptionList from './component/optionList';
import Question from './component/question';

const question = [
  {id: "question_id_1", title: "Question title 1", text: "Question text 1", 
  options:[{ id:"1option1", text: "Question 1 Option Text 1" },
    { id:"1option2", text: "Question 1 Option Text 2" },
    { id:"1option3", text: "Question 1 Option Text 3" },
    { id:"1option4", text: "Question 1 Option Text 4" }
  ]},

  {id: "question_id_2", title: "Question title 2", text: "Question text 2",
  options: [
    { id:"2option1", text: "Question 2 Option Text 1" },
    { id:"2option2", text: "Question 2 Option Text 2" },
    { id:"2option3", text: "Question 2 Option Text 3" },
    { id:"2option4", text: "Question 2 Option Text 4" }
  ]},
  
  {id: "question_id_3", title: "Question title 3", text: "Question text 3",
  options: [
    { id:"3option1", text: "Question 3 Option Text 1" },
    { id:"3option2", text: "Question 3 Option Text 2" },
    { id:"3option3", text: "Question 3 Option Text 3" },
    { id:"3option4", text: "Question 3 Option Text 4" }
  ]},

  {id: "question_id_4", title: "Question title 4", text: "Question text 4",
  options: [
    { id:"4option1", text: "Question 4 Option Text 1" },
    { id:"4option2", text: "Question 4 Option Text 2" },
    { id:"4option3", text: "Question 4 Option Text 3" },
    { id:"4option4", text: "Question 4 Option Text 4" }
  ]}
]


class App extends Component {
  constructor(){
    super()
    this.state = {
      quiz: ''
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    axios.get("https://s3-ap-southeast-1.amazonaws.com/grow-fit-stage/uploads/quizapp/quiz.json")
      .then(response => this.setState({quiz: response.data.question_id_1.title}))
  }

  render() {
    return (
      <div style={{width: "250px"}}>
        <button className="button" onClick={this.handleClick}>Click Me</button>
        <p>{this.state.quiz}</p>
        <Question question={question[0]} />
      </div>  
    );
  }
}

export default App;
