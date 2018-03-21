import React from 'react';
import OptionList from '../optionList';
import _ from 'lodash';

function Question(props){
    console.log("inside Question componennt")
    console.log(props);
    const  { question, onSkip } = props;
    return (<div style={{width: "580px", "marginLeft": "50px" }}>
                <div>
                    <h2>{_.get(question, 'title', '')}:</h2>
                    {_.get(question, 'text', '')}
                </div>
                <br />

                <div>
                    <OptionList options={_.get(question, 'options', [])} style={{float: "right"}} /><br />
                    <button className="button" onClick={() => onSkip(_.get(question, 'id', ''))} style={{float: "right"}}>Skip</button>
                </div>
            </div>
    );
}

export default Question