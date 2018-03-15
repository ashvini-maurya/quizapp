import React from 'react';
import OptionList from '../optionList';

function Question({ question, onSkip }){
    console.log(question);
    return (<div style={{width: "580px", "marginLeft": "50px" }}>
                <div>
                    <h2>{question.title}:</h2>
                    {question.text}
                </div>
                <br />

                <div>
                    <OptionList options={question.options} style={{float: "right"}} /><br />
                    <button className="button" onClick={() => onSkip(question.id)} style={{float: "right"}}>Skip</button>
                </div>
            </div>
    );
}

export default Question