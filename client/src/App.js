import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import LandingPage from "./Views/Public/LandingPage";
import LoginPage from "./Views/Public/Auth/LoginPage";
import RegisterPage from "./Views/Public/Auth/RegisterPage";
import ForgotPasswordPage from "./Views/Public/Auth/ForgotPasswordPage";
import MapPage from "./Views/Protected/MapPage";


function App() {
  return (
    <div className="App">
      <BrowserRouter history={{}} >
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/forgotpassword" component={ForgotPasswordPage} />
        <Route path="/map" component={MapPage} />
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
