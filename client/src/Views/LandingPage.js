import React from "react";
import Button from "../Components/Button";

function handleClick(e) {
    console.log("Clicked Landing Page button")
   }

function LandingPage() {
    return (
        <div>
         <h1>This is the landing page</h1>
        <Button handleClick={handleClick} buttonText={"Hello there"}/>
        </div>
    )
};

export default LandingPage;