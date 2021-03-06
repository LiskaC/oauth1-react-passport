import React, { useState, useContext } from "react";
import {UserContext} from "../../../Contexts/UserContext";
import axios from "axios";
import Button from '../../../Components/Button';
import Input from '../../../Components/Input';
import BackButton from "../../../Components/BackButton";
import { logout } from "../../../Utils/axios-calls";

function LoginPage(props) {
    const {user, setUser} = useContext(UserContext);
    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    //input edits
    const handleLoginUsernameInputChange = (e) => {
        setLoginUsername(e.target.value);
    }
    const handleLoginPasswordInputChange = (e) => {
        setLoginPassword(e.target.value);
    }

    //button clicks
    const login = () => {
    axios({
      method: "post",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:5000/auth/login",
    }).then((res) => {
      console.log(res.data)
    })
    .catch((err) => console.log(err));
  };

    const enter = () => {
    axios({
      method: "get",
      withCredentials: true,
      url: "http://localhost:5000/auth/user",
    }).then((res) => {
      setUser(res.data);
      user ? props.history.push("/map") : console.log("No logged-in user");
    })
    .catch((err) => console.log(err));
  };
  
    return (
      <div className="Login">
  
      <div>
        <h1>Login</h1>
        <Input placeholder="username" onChange={handleLoginUsernameInputChange} />  
        <Input placeholder="password" onChange={handleLoginPasswordInputChange} />
        <Button handleClick={login} buttonText={"Submit"} />
      </div>
  
  
      <div>
      {
        user ? <h1>Welcome back {user.username}!</h1> : null
      }


    <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>


      <Button handleClick={enter} buttonText={"Enter Application"} />
 
      <BackButton history={props.history} />

  

<Button handleClick={logout} buttonText={"Logout Application"} />
      </div>
    );
}

export default LoginPage;