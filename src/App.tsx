import React from "react";

import "antd/dist/antd.css";
import "./App.scss";

import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

import Routes from "./routes/Routes";
import { Contact, Landing, LogIn, SingUp, Order } from "./pages/public";
import CustomRoute from "./routes/CustomRoute";
import { PermissionType } from "./shared/types";

function App() {
  return (
    <Router>
      <Switch>
        <CustomRoute
          permission={[PermissionType.All]}
          exact
          path="/contact"
          component={Contact}
          title="Contact"
        />
        <CustomRoute
          permission={[PermissionType.All]}
          exact
          path="/landing"
          component={Landing}
          title="Landing"
        />
        <CustomRoute permission={[PermissionType.All]} exact path="/login" component={LogIn} title="Log In" />
        <CustomRoute
          permission={[PermissionType.All]}
          exact
          path="/singup"
          component={SingUp}
          title="Sing Up"
        />
        <CustomRoute permission={[PermissionType.All]} exact path="/" component={Landing} title="Landing" />
        <CustomRoute permission={[PermissionType.All]} exact title="Order" path="/order" component={Order} />
        <Route exact path="" component={Routes} />
      </Switch>
    </Router>
  );
}

export default App;
