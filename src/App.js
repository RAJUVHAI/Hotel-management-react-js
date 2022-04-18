import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import '.././node_modules/bootstrap/dist/css/bootstrap.min.css'
import '.././node_modules/bootstrap/dist/js/bootstrap.min'
import Home from './Components/Pages/Home'
import './App.css';
import SignIn from "./Components/Pages/SignIn";
import SignUp from "./Components/Pages/SignUp";
import axios from axios;
axios.defaults.baseURL = "http://localhost:8000/"
axios.defaults.withCredentials = true;

export default function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route path="/SignIn">
            <SignIn />
          </Route>
          <Route path="/SignUp">
            <SignUp />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>

    </div >
  );
}

