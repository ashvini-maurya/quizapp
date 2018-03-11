import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import OptionList from './component/optionList';


const options = [
  { id:"1option1", text: "Question 1 Option Text 1" },
  { id:"1option2", text: "Question 1 Option Text 2" },
  { id:"1option3", text: "Question 1 Option Text 3" },
  { id:"1option4", text: "Question 1 Option Text 4" }
];


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
        <OptionList options={options} />
      </div>  
    );
  }
}

export default App;
