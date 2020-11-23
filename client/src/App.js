import React, { useState, useMemo } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import LandingPage from "./Views/Public/LandingPage";
import LoginPage from "./Views/Public/Auth/LoginPage";
import RegisterPage from "./Views/Public/Auth/RegisterPage";
import ForgotPasswordPage from "./Views/Public/Auth/ForgotPasswordPage";
import MapPage from "./Views/Protected/MapPage";
import { UserContext } from "./Contexts/UserContext";
import ChatsListPage from "./Views/Protected/ChatsListPage";


function App() {
const [user, setUser] = useState(null);

const providerValue = useMemo(() => ({user, setUser}), [user, setUser])

  return (
    <div className="App">
      <BrowserRouter history={{}} >
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/forgotpassword" component={ForgotPasswordPage} />

        <UserContext.Provider value={providerValue}>
          <Route path="/login" component={LoginPage} />
          <Route path="/map" component={MapPage} />
          <Route path="/chats" component={ChatsListPage} />
        </UserContext.Provider>
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
