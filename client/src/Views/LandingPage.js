import React from "react";
import { Link } from "react-router-dom";
import Button from "../Components/Button";
import '../Styles/Link.css';

function handleClick(e) {
    console.log("Clicked Landing Page button")
   }

function LandingPage() {
    return (
        <div>
         <h1>This is the landing page</h1>
        <Button handleClick={handleClick} buttonText={"Hello there"}/>
        <Link className="Link" to="/login">Login</Link>
        </div>
    )
};

export default LandingPage;