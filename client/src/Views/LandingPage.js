import React, { useState, useEffect } from "react";
import Button from "../Components/Button";

function handleClick(e) {
    alert("button clicked!")
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