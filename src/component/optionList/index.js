import React from 'react';
import Option from '../option';
import _ from 'lodash';

function OptionList(props){
    const newVar = _.get(props, 'options', []);
    console.log("optionlist");
    console.log(props);
    return (
        <div>
            {newVar.map(o => <Option id={o.id} key={o.id} name={o.text} />)}
        </div>
    );
}

export default OptionList;