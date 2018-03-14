import React from 'react';
import OptionList from '../optionList';

function Question({ question }){
    console.log(question);
    return (<div>
            <div>
                {question.title}
                {question.text}
            </div>

            <div>
                <OptionList options={question.options} />
            </div>
        </div>
    );
}

export default Question