import React from "react";
import "../Styles/Button.css";

function BackButton(props) {
    return ( 
    <div>
        <button className="Button" onClick={props.history.goBack} >Go Back</button>
    </div> )
}

export default BackButton;