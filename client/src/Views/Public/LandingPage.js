import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/Link.css"

function LandingPage() {
    return (
        <div>
         <h1>This is the landing page</h1>
        <Link className="Link" to="/login">Login</Link>
        <Link className="Link" to="/register">Register</Link>
        <Link className="Link" to="/forgotpassword">Forgot Password?</Link>

        </div>
    )
};

export default LandingPage;