
import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import LandingPage from "./Views/LandingPage";
import LoginPage from "./Views/Auth/LoginPage";
import BackButton from "./Components/BackButton";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/back-button" exact component={BackButton} />
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
