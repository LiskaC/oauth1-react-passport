import React, { useState, useMemo } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { UserContext } from "./Contexts/UserContext";
import './App.css';
import LandingPage from "./Views/Public/LandingPage";
import LoginPage from "./Views/Public/Auth/LoginPage";
import RegisterPage from "./Views/Public/Auth/RegisterPage";
import ForgotPasswordPage from "./Views/Public/Auth/ForgotPasswordPage";
import MapPage from "./Views/Protected/MapPage";
import ChatsListPage from "./Views/Protected/ChatsListPage";
import AddChargerPage from "./Views/Protected/AddCharger";
import PrivateRoute from "./Utils/PrivateRoute";


function App() {
const [user, setUser] = useState(null);

const providerValue = useMemo(() => ({user, setUser}), [user, setUser])

  return (
    <div className="App">
      <BrowserRouter history={{}} >
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/register" exact component={RegisterPage} />
        <Route path="/forgotpassword" component={ForgotPasswordPage} />

        <UserContext.Provider value={providerValue}>
          <Route path="/login" component={LoginPage} />
          
          {/* <Route path="/map" component={MapPage} />
          <Route path="/chats" component={ChatsListPage} />
          <Route path="/charger" exact component={AddChargerPage} />  */}
          <PrivateRoute path="/map" component={MapPage} />
          <PrivateRoute path="/chats" component={ChatsListPage} />
          <PrivateRoute path="/charger" exact component={AddChargerPage} /> 
        </UserContext.Provider>
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
