import React from "react";
import "../Styles/Button.css";

function BackButton(props) {
    console.log(props)
    return ( 
    <div>
        <button className="Button" onClick={props.history.goBack} >Go Back</button>
    </div> )
}

export default BackButton;