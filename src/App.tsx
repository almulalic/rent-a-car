import React from "react";

import "./App.css";
import "antd/dist/antd.css";

import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { Contact, Landing, LogIn, SingUp } from "./pages";
import Routes from "./routes/Routes";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/contact" component={Contact} title="Contact" />
        <Route exact path="/landing" component={Landing} title="Landing" />
        <Route exact path="/login" component={LogIn} title="Log In" />
        <Route exact path="/singup" component={SingUp} title="Sing Up" />
        <Route exact path="/" component={Landing} title="Landing" />
        <Route exact path="" component={Routes} />
      </Switch>
    </Router>
  );
}

export default App;
