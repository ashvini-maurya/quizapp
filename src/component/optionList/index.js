import React from 'react';
import Option from '../option';

function OptionList(props){
    return (
        <div>
            {props.options.map(o => <Option id={o.id} key={o.id} name={o.text} />)}
        </div>
    );
}

export default OptionList;