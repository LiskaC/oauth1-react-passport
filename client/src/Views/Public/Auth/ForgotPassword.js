import React, { useState } from "react";
import axios from "axios";
import Button from '../../../Components/Button';
import Input from '../../../Components/Input';
import BackButton from "../../../Components/BackButton";

function ForgotPasswordPage(props) {
    return (
        <div className="ForgotPasswordPage">
<h1>You're a numpty</h1>
<BackButton history={props.history} />
        </div>
    );
}

export default ForgotPasswordPage;