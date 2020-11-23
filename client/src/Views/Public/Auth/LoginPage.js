import React, { useState, useContext } from "react";
import {UserContext} from "../../../Contexts/UserContext";
import axios from "axios";
import Button from '../../../Components/Button';
import Input from '../../../Components/Input';
import BackButton from "../../../Components/BackButton";
import { logout } from "../../../Utils/logout";

function LoginPage(props) {
    const {user, setUser} = useContext(UserContext);
    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

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
    const login = () => {console.log("Clicked login to Authenticate button")
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

    const getUser = () => {console.log("Clicked get User button")
    axios({
      method: "get",
      withCredentials: true,
      url: "http://localhost:5000/auth/user",
    }).then((res) => {
      setUser(res.data)
      console.log( "getUser res. data" + res.data)
    })
    .catch((err) => console.log(err));
  };

    const enter = () => {console.log("Clicked get Enter button")
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
        <h1>Get User</h1>
        <Button handleClick={getUser} buttonText={"Submit"} />
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