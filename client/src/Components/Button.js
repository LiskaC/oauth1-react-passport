import React from "react";
import "../Styles/Button.css";

function Button(props) {
    return (
        <button className="button" onClick={props.handleClick}>
            {props.buttonText}
        </button>
    )
}

export default Button;