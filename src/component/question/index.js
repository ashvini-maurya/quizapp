import React from 'react';
import OptionList from '../optionList';
import _ from 'lodash';
import './question.css';

function Question(props) {
  // console.log("inside Question componennt")
  // console.log(props);
  const { question, onSkip } = props;
  return (<div className="question">
    <div>
      <h2>{_.get(question, 'title', '')}:</h2>
      {_.get(question, 'text', '')}
    </div>
    <br />

    <div>
      <OptionList options={_.get(question, 'options', [])} className="options-list" /><br />
      <button className="button" onClick={() => onSkip(_.get(question, 'id', ''))}>Skip</button>
    </div>
  </div>
  );
}

export default Question