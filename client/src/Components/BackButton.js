import React from "react";

function BackButton(props) {
    
    return ( 
    <div>
        <button className="BackButton" onClick={props.history.goBack} >Go Back</button>
    </div> )
}

export default BackButton;