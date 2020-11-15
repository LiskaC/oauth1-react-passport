import React from "react";
import "../Styles/Input.css";

function Input(props) {
    return (
        <input className="input" placeholder={props.placeholder} onChange={props.handleInputChange} />  

    )
}

export default Input;