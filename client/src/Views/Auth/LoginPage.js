import React, { useState } from "react";
import axios from "axios";
import Button from '../../Components/Button';
import Input from '../../Components/Input';
import BackButton from "../../Components/BackButton";

function LoginPage(props) {
    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [data, setData] = useState(null);
    //input edits
    const handleLoginUsernameInputChange = (e) => {
        setLoginUsername(e.target.value);
        console.log("login username: " + loginUsername);
    }
    const handleLoginPasswordInputChange = (e) => {
        setLoginPassword(e.target.value);
        console.log("login password: " + loginPassword);
    }


    //button clicks
    const login = () => {console.log("Clicked login button")
    axios({
      method: "post",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:5000/auth/login",
    }).then((res) => console.log(res.data))
    .catch((err) => console.log(err));
  };
    const getUser = () => {console.log("Clicked get User button")
    axios({
      method: "get",
      withCredentials: true,
      url: "http://localhost:5000/auth/user",
    }).then((res) => {
      setData(res.data);
      console.log(res.data)
    })
    .catch((err) => console.log(err));
  };
  
    return (
      <div className="Login">
  
      <div>
        <h1>Login</h1>
        <Input placeholder="username" onChange={handleLoginUsernameInputChange} />  
        <Input placeholder="password" onChange={handleLoginPasswordInputChange}/>
        <Button handleClick={login} buttonText={"Submit"} />
      </div>
  
  
      <div>
        <h1>Get User</h1>
        <Button handleClick={getUser} buttonText={"Submit"} />
      {
        data ? <h1>Welcome back {data.username}!</h1> : null
      }
      </div>
 
      <BackButton history={props.history} />
  
      </div>
    );
}

export default LoginPage;