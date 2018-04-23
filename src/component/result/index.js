import React from 'react';
import './result.css';

function Result(props) {
  console.log("result component called");
  return (
    <div className="result">
      <p>We will display here the result of the Quizz!</p>
    </div>
  )
}

export default Result;