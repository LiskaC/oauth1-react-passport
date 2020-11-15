import React from "react";
import "../Styles/Input.css";

function Input(props) {
    return (
        <input className="Input" placeholder={props.placeholder} onChange={props.handleInputChange} />  

    )
}

export default Input;