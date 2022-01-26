import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <div className="todo-app">
      <Router>
        <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route>
          <Route exact path="/homepage">
            <HomePage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/register">
            <RegisterPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
