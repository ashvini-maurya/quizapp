import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

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
      <div>
        <button className="button" onClick={this.handleClick}>Click Me</button>
        <p>{this.state.quiz}</p>
      </div>  
    );
  }
}

export default App;
