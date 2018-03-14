import React from 'react';
import OptionList from '../optionList';

function Question({ question, onSkip }){
    console.log(question);
    return (<div>
            <div>
                {question.title}
                {question.text}
            </div>

            <div>
                <OptionList options={question.options} />
                <button className="button" onClick={() => onSkip(question.id)}>Skip</button>
            </div>
        </div>
    );
}

export default Question