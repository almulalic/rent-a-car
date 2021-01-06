import React from "react";
import { Route, useHistory, Redirect, RouteComponentProps } from "react-router-dom";
import { PermissionType } from "../shared/types";

interface ICustomRouteProps {
  permission: PermissionType[];
  title?: string;
  exact?: boolean;
  path?: string | string[];
  component?: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
}

export default function CustomRoute({ permission, title, ...rest }: ICustomRouteProps) {
  let permissionType = Number(localStorage.getItem("permission")) as PermissionType;

  if (!permission.includes(permissionType)) {
    return <Redirect to="login" />;
  }

  return <Route {...rest} />;
}
