import React, { useState } from "react";
//import axios from "axios";
import Button from '../../Components/Button';
import Input from '../../Components/Input';

function LoginPage() {
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
 
    //input edits
    const handleRegisterUsernameInputChange = (e) => {
        setRegisterUsername(e.target.value);
        console.log("registered username: " + registerUsername);
    }
    const handleRegisterPasswordInputChange = (e) => {
        setRegisterPassword(e.target.value);
        console.log("registered password: " + registerPassword);
    }
    const handleLoginUsernameInputChange = (e) => {
        setLoginUsername(e.target.value);
        console.log("login username: " + loginUsername);
    }
    const handleLoginPasswordInputChange = (e) => {
        setLoginPassword(e.target.value);
        console.log("login password: " + loginPassword);
    }


    //button clicks
    const register = () => { console.log("Clicked register button")
        /*
      axios({
        method: "post",
        data: {
          username: registerUsername,
          password: registerPassword,
        },
        withCredentials: true,
        url: "http://localhost/5000/register", //so long as this is being run locally | GETTING CONNECTION ERROR
      }).then((res) => console.log(res))
      .catch((err) => console.log(err));
      */
    };
    const login = () => {console.log("Clicked login button")};
    const getUser = () => {console.log("Clicked get User button")};
  
    return (
      <div className="Login">

      <div>
        <h1>Register</h1>
        <Input placeholder="username" handleInputChange={handleRegisterUsernameInputChange} />  
        <Input placeholder="password" handleInputChange={handleRegisterPasswordInputChange} />
        <Button handleClick={register} buttonText={"Submit"} />
      </div>
  
  
      <div>
        <h1>Login</h1>
        <Input placeholder="username" onChange={handleLoginUsernameInputChange} />  
        <Input placeholder="password" onChange={handleLoginPasswordInputChange}/>
        <Button handleClick={login} buttonText={"Submit"} />
      </div>
  
  
      <div>
        <h1>Get User</h1>
        <Button handleClick={getUser} buttonText={"Submit"} />
      </div>
  
      </div>
    );
}

export default LoginPage;