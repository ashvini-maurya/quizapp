import React from 'react';
import OptionList from '../optionList'

// function radioClicked(id) {
//     alert(id)
// }

const Option = (props) => <div style={{border: "1px solid gray", width: "250px", padding: "10px", display: "inline-flex", "marginLeft": "20px", "backgroundColor": "#EBEBEB"}}>
        <input type="radio" name="action" key={props.id} onClick={() => console.log(props.id)}></input>
        <h6>{props.name}</h6>
    </div>

export default Option