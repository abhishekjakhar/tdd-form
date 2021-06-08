import * as React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from "./components/navigation/navigation";
import Home from "./components/home/home";
import LoginForm from "./components/login-form/login-form";

function App() {
  return (
    <Router>
      <Navigation />
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/form">
            <LoginForm />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
