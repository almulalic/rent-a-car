import React from "react";

import { Route, Switch } from "react-router-dom";
import RestrictedRoute from "./RestrictedRoute";

import createHistory from "history/createBrowserHistory";
import { PermissionType } from "../shared/types";
import { Dashboard, ProfileDashboard } from "../pages";

const Routes = (props: any) => {
  const history = createHistory();

  return (
    <div className="Content-wrap">
      <Switch>
        <RestrictedRoute
          permission={[PermissionType.Owner]}
          exact
          title="Dashboard"
          path="/dashboard"
          component={Dashboard}
        />
        <RestrictedRoute
          permission={[PermissionType.Customer]}
          exact
          title="Profile Dashboard"
          path="/profile"
          component={ProfileDashboard}
        />
      </Switch>
    </div>
  );
};

export default Routes;
