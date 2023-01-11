import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./index.css";

import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";

import UserDetails from "./components/userDetails";
// import Features from './components/Features';


function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">{isLoggedIn === "true" ? <UserDetails /> : <UserDetails />}</Route>
          {/* <Route path="/features"><Features /></Route> */}
          {/* <Route path="/sign-in"><Login /></Route> */}
          {/* <Route path="/sign-up"><SignUp /></Route> */}
          <Route path="/userDetails"><UserDetails /></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
