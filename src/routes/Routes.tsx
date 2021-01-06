import React from "react";

import { Route, Switch } from "react-router-dom";
import RestrictedRoute from "./CustomRoute";

import createHistory from "history/createBrowserHistory";
import { PermissionType } from "../shared/types";
import { Dashboard } from "../pages/administrator";
import { ProfileDashboard, Order } from "../pages/customer";
import CustomRoute from "./CustomRoute";

const Routes = (props: any) => {
  const history = createHistory();

  return (
    <div className="Content-wrap">
      <Switch>
        <CustomRoute
          permission={[PermissionType.Owner]}
          exact
          title="Dashboard"
          path="/dashboard"
          component={Dashboard}
        />
        <CustomRoute
          permission={[PermissionType.Customer]}
          exact
          title="Profile Dashboard"
          path="/profile"
          component={ProfileDashboard}
        />
        <CustomRoute
          permission={[PermissionType.Customer]}
          exact
          title="Order"
          path="/order"
          component={Order}
        />
      </Switch>
    </div>
  );
};

export default Routes;
