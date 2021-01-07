import React from "react";

import { Switch } from "react-router-dom";

import { PermissionType } from "../shared/types";
import { Dashboard } from "../pages/administrator";
import CustomRoute from "./CustomRoute";
import { ProfileDashboard } from "../pages/customer";

const Routes = () => {
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
      </Switch>
    </div>
  );
};

export default Routes;
