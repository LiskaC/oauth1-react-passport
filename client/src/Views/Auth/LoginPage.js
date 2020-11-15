import React, { useState } from "react";
import axios from "axios";

function LoginPage() {
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
  
    const register = () => {
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
    };
    const login = () => {};
    const getUser = () => {};
  
    return (
      <div className="Login">

      <div>
        <h1>Register</h1>
        <input placeholder="username" onChange={e => setRegisterUsername(e.target.value)} />  
        <input placeholder="password" onChange={e => setRegisterPassword(e.target.value)} />
        <button onClick={register}>Submit</button>
      </div>
  
  
      <div>
        <h1>Login</h1>
        <input placeholder="username" onChange={e => setLoginUsername(e.target.value)} />  
        <input placeholder="password" onChange={e => setLoginPassword(e.target.value)}/>
        <button onClick={login}>Submit</button>
      </div>
  
  
      <div>
        <h1>Get User</h1>
        <button onClick={getUser}>Submit</button>
      </div>
  
      </div>
    );
}

export default LoginPage;