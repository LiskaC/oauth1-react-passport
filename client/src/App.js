import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import LandingPage from "./Views/LandingPage";
import LoginPage from "./Views/Auth/LoginPage";
import RegisterPage from "./Views/Auth/RegisterPage";


function App() {
  return (
    <div className="App">
      <BrowserRouter history={{}} >
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/register" exact component={RegisterPage} />
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
