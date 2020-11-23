import React from "react";
import "../Styles/Button.css";

function BackButton({history}) {
    return ( 
    <div>
        <button className="Button" onClick={history.goBack} >Go Back</button>
    </div> )
}

export default BackButton;