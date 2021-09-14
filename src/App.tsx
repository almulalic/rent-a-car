import "antd/dist/antd.css";
import "./App.scss";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Routes from "./routes/Routes";
import { Contact, Landing, LogIn, SignUp, Order } from "./pages/public";
import CustomRoute from "./routes/CustomRoute";
import { PermissionType } from "./shared/types";
import { useEffect } from "react";
import staticUsers from "./JSON/users.json";
import { ForgotPassword } from "./pages/public/ForgotPassword/ForgotPassword";
import { ResetPassword } from "./pages/public/ResetPassword/ResetPassword";

function App() {
  const injectStaticUsers = () => {
    if (!localStorage.getItem("users")) localStorage.setItem("users", JSON.stringify(staticUsers));
  };

  useEffect(() => {
    injectStaticUsers();
  }, []);

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
          path="/signup"
          component={SignUp}
          title="Sign Up"
        />
        <CustomRoute
          permission={[PermissionType.All]}
          exact
          path="/forgotPassword"
          component={ForgotPassword}
          title="Forgot Password"
        />
        <CustomRoute
          permission={[PermissionType.All]}
          exact
          path="/resetPassword"
          component={ResetPassword}
          title="Reset Password"
        />
        <CustomRoute permission={[PermissionType.All]} exact path="/" component={Landing} title="Landing" />
        <CustomRoute permission={[PermissionType.All]} exact title="Order" path="/order" component={Order} />
        <Route exact path="" component={Routes} />
      </Switch>
    </Router>
  );
}

export default App;
