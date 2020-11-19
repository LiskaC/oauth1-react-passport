import React, { useState } from "react";
import axios from "axios";
import Button from '../../../Components/Button';
import Input from '../../../Components/Input';
import BackButton from "../../../Components/BackButton";

function RegisterPage(props) {
    
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
 
    //input edits
    const handleRegisterUsernameInputChange = (e) => {
        setRegisterUsername(e.target.value);
        console.log("registered username: " + registerUsername);
    }
    const handleRegisterPasswordInputChange = (e) => {
        setRegisterPassword(e.target.value);
        console.log("registered password: " + registerPassword);
    }

    //button clicks
    const register = () => { console.log("Clicked register button")
      axios({
        method: "post",
        data: {
          username: registerUsername,
          password: registerPassword,
        },
        withCredentials: true,
        url: "http://localhost:5000/auth/register",
      }).then((res) => console.log(res))
      .catch((err) => console.log(err));
      
    };
  
    return (
      <div className="Register">

      <div>
        <h1>Register</h1>
        <Input placeholder="username" onChange={handleRegisterUsernameInputChange} />  
        <Input placeholder="password" onChange={handleRegisterPasswordInputChange} />
        <Button handleClick={register} buttonText={"Submit"} />
      </div>
 
 <BackButton history={props.history} />
  
      </div>
    );
}

export default RegisterPage;