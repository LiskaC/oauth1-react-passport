
import React from "react";
import './App.css';
import LandingPage from "./Views/LandingPage";
import LoginPage from "./Views/Auth/LoginPage";


function App() {
  return (
    <div className="App">
    <LandingPage />
    <LoginPage />
    </div>
  );
}

export default App;
